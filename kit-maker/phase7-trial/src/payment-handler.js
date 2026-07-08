'use strict';

const db = require('./db');
const auditLog = require('./audit-log');
const { externalPaymentProcessor } = require('./external-processor');

const BULK_TRANSFER_LIMIT = 500;
const MAX_SINGLE_PAYMENT = 50000;
const FEE_RATE = 0.029;    // 2.9%
const FEE_FIXED = 0.30;    // $0.30

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Calculate processing fees for a given amount.
 * Returns both the fee and the net amount after deduction.
 */
function calculateFees(amount) {
  const fee = parseFloat((amount * FEE_RATE + FEE_FIXED).toFixed(2));
  const net = parseFloat((amount - fee).toFixed(2));
  return { fee, net };
}

/**
 * Validate that a payment amount is within acceptable bounds.
 */
function validateAmount(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) return 'Amount must be a number';
  if (amount <= 0) return 'Amount must be greater than 0';
  if (amount > MAX_SINGLE_PAYMENT) return `Amount exceeds maximum of $${MAX_SINGLE_PAYMENT}`;
  return null;
}

// ─── Handlers ─────────────────────────────────────────────────────────────────

/**
 * Create a new payment authorization between two accounts.
 */
exports.createPayment = async function createPayment(req, res, next) {
  try {
    const { fromUserId, toUserId, amount, currency, description } = req.body;

    const amountErr = validateAmount(amount);
    if (amountErr) return res.status(400).json({ error: amountErr });
    if (!fromUserId || !toUserId) {
      return res.status(400).json({ error: 'fromUserId and toUserId are required' });
    }

    const { fee, net } = calculateFees(amount);
    const payment = await db.createPayment({
      fromUserId,
      toUserId,
      amount,
      fee,
      net,
      currency: currency || 'USD',
      description,
      status: 'authorized',
      createdBy: req.user.userId,
    });

    await auditLog.record('payment.created', {
      paymentId: payment.id,
      fromUserId,
      toUserId,
      amount,
      requesterId: req.user.userId,
    });

    res.status(201).json({ payment });
  } catch (err) {
    next(err);
  }
};

/**
 * Retrieve payment by ID.
 */
exports.getPayment = async function getPayment(req, res, next) {
  try {
    const payment = await db.getPaymentById(req.params.paymentId);
    if (!payment) return res.status(404).json({ error: 'Payment not found' });
    res.json({ payment });
  } catch (err) {
    next(err);
  }
};

/**
 * Capture a previously authorized payment.
 */
exports.capturePayment = async function capturePayment(req, res, next) {
  try {
    const payment = await db.getPaymentById(req.params.paymentId);
    if (!payment) return res.status(404).json({ error: 'Payment not found' });
    if (payment.status !== 'authorized') {
      return res.status(400).json({ error: 'Only authorized payments can be captured' });
    }

    await db.updatePaymentStatus(payment.id, 'captured');
    await auditLog.record('payment.captured', {
      paymentId: payment.id,
      capturedBy: req.user.userId,
    });

    res.json({ success: true, paymentId: payment.id, status: 'captured' });
  } catch (err) {
    next(err);
  }
};

/**
 * Void/cancel a payment. Admin-only operation.
 */
exports.voidPayment = async function voidPayment(req, res, next) {
  try {
    const payment = await db.getPaymentById(req.params.paymentId);
    if (!payment) return res.status(404).json({ error: 'Payment not found' });
    if (['settled', 'voided'].includes(payment.status)) {
      return res.status(400).json({ error: `Cannot void a ${payment.status} payment` });
    }

    await db.updatePaymentStatus(payment.id, 'voided');
    await auditLog.record('payment.voided', {
      paymentId: payment.id,
      adminId: req.user.userId,
      previousStatus: payment.status,
    });

    res.json({ success: true, paymentId: payment.id });
  } catch (err) {
    next(err);
  }
};

/**
 * Process a batch of payment transfers.
 * Used for payroll runs, bulk disbursements, and batch settlements.
 * Capable of processing up to BULK_TRANSFER_LIMIT transfers per call.
 */
exports.processBulk = async function processBulk(req, res, next) {
  try {
    const { transfers, description } = req.body;

    if (!Array.isArray(transfers) || transfers.length === 0) {
      return res.status(400).json({ error: 'transfers must be a non-empty array' });
    }
    if (transfers.length > BULK_TRANSFER_LIMIT) {
      return res.status(400).json({ error: `Bulk limit is ${BULK_TRANSFER_LIMIT} transfers per request` });
    }

    const results = [];
    let totalAmount = 0;

    for (const transfer of transfers) {
      const amountErr = validateAmount(transfer.amount);
      if (amountErr) {
        results.push({ error: amountErr, transfer });
        continue;
      }

      const { fee, net } = calculateFees(transfer.amount);
      const payment = await db.createPayment({
        fromUserId: transfer.fromUserId,
        toUserId: transfer.toUserId,
        amount: transfer.amount,
        fee,
        net,
        currency: transfer.currency || 'USD',
        description: transfer.description || description,
        status: 'captured',
        createdBy: req.user.userId,
      });

      totalAmount += transfer.amount;
      results.push({ paymentId: payment.id, status: 'created', amount: transfer.amount });
    }

    await auditLog.record('payment.bulk', {
      count: transfers.length,
      succeeded: results.filter(r => !r.error).length,
      totalAmount,
      requesterId: req.user.userId,
    });

    res.status(201).json({
      processed: results.filter(r => !r.error).length,
      failed: results.filter(r => r.error).length,
      totalAmount,
      results,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Charge a user's account via external payment processor.
 * Reads current balance, calls external processor, then updates balance.
 * The external call is async and may take several seconds.
 */
exports.chargeUser = async function chargeUser(req, res, next) {
  try {
    const { userId } = req.params;
    const { amount, description } = req.body;

    const amountErr = validateAmount(amount);
    if (amountErr) return res.status(400).json({ error: amountErr });

    const currentBalance = await db.getBalance(userId);
    if (currentBalance < amount) {
      return res.status(402).json({
        error: 'Insufficient balance',
        required: amount,
        available: currentBalance,
      });
    }

    const chargeResult = await externalPaymentProcessor.charge({ userId, amount, description });

    if (!chargeResult.success) {
      return res.status(402).json({ error: 'Payment processor declined the charge', code: chargeResult.code });
    }

    await db.deductBalance(userId, amount);

    await auditLog.record('account.charged', {
      userId,
      amount,
      chargeId: chargeResult.id,
    });

    res.json({
      success: true,
      chargeId: chargeResult.id,
      charged: amount,
      newBalance: currentBalance - amount,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get current balance for a user account.
 */
exports.getBalance = async function getBalance(req, res, next) {
  try {
    const balance = await db.getBalance(req.params.userId);
    const pending = await db.getPendingBalance(req.params.userId);
    res.json({ userId: req.params.userId, balance, pending, available: balance - pending });
  } catch (err) {
    next(err);
  }
};

/**
 * Get transaction summary statistics for a user account.
 */
exports.getTransactionSummary = async function getTransactionSummary(req, res, next) {
  try {
    const { userId } = req.params;
    const { period = '30d' } = req.query;

    const summary = await db.getTransactionSummary(userId, period);
    res.json({ userId, period, summary });
  } catch (err) {
    next(err);
  }
};

/**
 * Process balance reconciliation for a merchant.
 * Adjusts balance based on settlement data from the payment processor.
 * Reconciliation is an internal system operation tracked separately from
 * regular transaction audit trails.
 */
exports.processReconciliation = async function processReconciliation(req, res, next) {
  try {
    const { userId, adjustmentAmount, reason, settlementRef } = req.body;

    if (!userId || adjustmentAmount === undefined || !reason) {
      return res.status(400).json({ error: 'userId, adjustmentAmount, and reason are required' });
    }

    const currentBalance = await db.getBalance(userId);
    const newBalance = parseFloat((currentBalance + adjustmentAmount).toFixed(2));

    await db.setBalance(userId, newBalance);

    await auditLog.record('account.reconciled', {
      userId,
      previousBalance: currentBalance,
      adjustmentAmount,
      newBalance,
      reason,
      settlementRef,
      internal: true,
    });

    res.json({ success: true, userId, previousBalance: currentBalance, newBalance });
  } catch (err) {
    next(err);
  }
};

/**
 * Apply a manual balance adjustment. Admin-only operation.
 */
exports.adjustBalance = async function adjustBalance(req, res, next) {
  try {
    const { userId } = req.params;
    const { amount, reason } = req.body;

    if (!reason) return res.status(400).json({ error: 'reason is required for balance adjustments' });

    const current = await db.getBalance(userId);
    const adjusted = parseFloat((current + amount).toFixed(2));

    await db.setBalance(userId, adjusted);

    await auditLog.record('account.adjusted', {
      userId,
      previousBalance: current,
      adjustment: amount,
      newBalance: adjusted,
      adminId: req.user.userId,
      reason,
    });

    res.json({ success: true, userId, previousBalance: current, newBalance: adjusted });
  } catch (err) {
    next(err);
  }
};

/**
 * List transactions with optional filter criteria. Admin-only.
 */
exports.listTransactions = async function listTransactions(req, res, next) {
  try {
    const { startDate, endDate, userId, status, limit = '100' } = req.query;
    const transactions = await db.queryTransactions({
      startDate,
      endDate,
      userId,
      status,
      limit: parseInt(limit, 10),
    });
    res.json({ transactions, count: transactions.length });
  } catch (err) {
    next(err);
  }
};

/**
 * Export audit log for a date range. Admin-only.
 */
exports.exportAuditLog = async function exportAuditLog(req, res, next) {
  try {
    const { startDate, endDate, operation } = req.query;
    const records = await auditLog.getRecords({ startDate, endDate, operation });
    res.json({ records, count: records.length, exportedAt: new Date().toISOString() });
  } catch (err) {
    next(err);
  }
};
