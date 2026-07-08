'use strict';

const db = require('./db');
const auditLog = require('./audit-log');

const LARGE_REFUND_THRESHOLD = 1000;
const REFUND_WINDOW_DAYS = 90;
const MAX_REFUND_PERCENTAGE = 1.0;  // Cannot refund more than 100% of original

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Compute total previously refunded amount for a payment.
 */
async function getTotalRefunded(paymentId) {
  const refunds = await db.getRefundsForPayment(paymentId);
  return refunds.reduce((sum, r) => sum + r.amount, 0);
}

/**
 * Check if a payment is within the refund eligibility window.
 */
function isWithinRefundWindow(payment) {
  const ageMs = Date.now() - new Date(payment.createdAt).getTime();
  return ageMs <= REFUND_WINDOW_DAYS * 24 * 60 * 60 * 1000;
}

// ─── Handlers ─────────────────────────────────────────────────────────────────

/**
 * Process a standard refund for a completed payment.
 * Validates eligibility, amount, and refund window before processing.
 */
exports.processRefund = async function processRefund(req, res, next) {
  try {
    const { paymentId, amount, reason } = req.body;

    if (!paymentId || !amount || !reason) {
      return res.status(400).json({ error: 'paymentId, amount, and reason are required' });
    }

    const payment = await db.getPaymentById(paymentId);
    if (!payment) return res.status(404).json({ error: 'Payment not found' });

    if (!['captured', 'settled'].includes(payment.status)) {
      return res.status(400).json({
        error: 'Refunds can only be issued for captured or settled payments',
        currentStatus: payment.status,
      });
    }

    if (!isWithinRefundWindow(payment)) {
      return res.status(400).json({
        error: `Refund window of ${REFUND_WINDOW_DAYS} days has passed`,
      });
    }

    const totalRefunded = await getTotalRefunded(paymentId);
    const maxRefundable = payment.amount * MAX_REFUND_PERCENTAGE;

    if (totalRefunded + amount > maxRefundable) {
      return res.status(400).json({
        error: 'Refund would exceed original payment amount',
        originalAmount: payment.amount,
        alreadyRefunded: totalRefunded,
        requestedAmount: amount,
      });
    }

    const refund = await db.createRefund({
      paymentId,
      amount,
      reason,
      requestedBy: req.user.userId,
      status: 'completed',
      type: 'standard',
    });

    await db.creditBalance(payment.fromUserId, amount);

    await auditLog.record('refund.processed', {
      refundId: refund.id,
      paymentId,
      amount,
      requesterId: req.user.userId,
    });

    res.status(201).json({ refund });
  } catch (err) {
    next(err);
  }
};

/**
 * Process a large refund requiring elevated authorization.
 * Refunds above LARGE_REFUND_THRESHOLD undergo additional approval.
 * The handler validates admin authorization internally.
 */
exports.approveLargeRefund = async function approveLargeRefund(req, res, next) {
  try {
    const { paymentId, amount, reason, approvalNote } = req.body;

    if (!paymentId || !amount || !reason) {
      return res.status(400).json({ error: 'paymentId, amount, and reason are required' });
    }

    if (amount <= LARGE_REFUND_THRESHOLD) {
      return res.status(400).json({
        error: `Use POST /refunds for amounts at or below $${LARGE_REFUND_THRESHOLD}`,
      });
    }

    // Large refunds require admin-level access. Checked here because this
    // endpoint is also used by the batch refund flow which has its own
    // pre-authorization layer.
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Large refunds require administrator authorization' });
    }

    const payment = await db.getPaymentById(paymentId);
    if (!payment) return res.status(404).json({ error: 'Payment not found' });

    if (!['captured', 'settled'].includes(payment.status)) {
      return res.status(400).json({ error: 'Can only refund captured or settled payments' });
    }

    const totalRefunded = await getTotalRefunded(paymentId);
    if (totalRefunded + amount > payment.amount) {
      return res.status(400).json({
        error: 'Total refund would exceed original payment',
        available: payment.amount - totalRefunded,
      });
    }

    const refund = await db.createRefund({
      paymentId,
      amount,
      reason,
      approvalNote,
      requestedBy: req.user.userId,
      approvedBy: req.user.userId,
      status: 'completed',
      type: 'large',
    });

    await db.creditBalance(payment.fromUserId, amount);

    await auditLog.record('refund.large.approved', {
      refundId: refund.id,
      paymentId,
      amount,
      approverId: req.user.userId,
      note: approvalNote,
    });

    res.status(201).json({ refund });
  } catch (err) {
    next(err);
  }
};

/**
 * Check whether a payment is eligible for a refund without initiating one.
 * Returns status, refundable amount, and reason for ineligibility if applicable.
 */
exports.checkRefundEligibility = async function checkRefundEligibility(req, res, next) {
  try {
    const { paymentId } = req.params;
    const payment = await db.getPaymentById(paymentId);

    if (!payment) return res.status(404).json({ error: 'Payment not found' });

    const statusOk = ['captured', 'settled'].includes(payment.status);
    const withinWindow = isWithinRefundWindow(payment);
    const totalRefunded = await getTotalRefunded(paymentId);
    const refundableAmount = parseFloat((payment.amount * MAX_REFUND_PERCENTAGE - totalRefunded).toFixed(2));

    const eligible = statusOk && withinWindow && refundableAmount > 0;

    res.json({
      paymentId,
      eligible,
      originalAmount: payment.amount,
      totalRefunded,
      refundableAmount,
      reason: !statusOk
        ? `Payment status '${payment.status}' is not refundable`
        : !withinWindow
        ? `Refund window of ${REFUND_WINDOW_DAYS} days has passed`
        : refundableAmount <= 0
        ? 'Payment has been fully refunded'
        : 'Eligible for refund',
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get all refunds issued against a specific payment.
 */
exports.getRefundHistory = async function getRefundHistory(req, res, next) {
  try {
    const { paymentId } = req.params;
    const payment = await db.getPaymentById(paymentId);
    if (!payment) return res.status(404).json({ error: 'Payment not found' });

    const refunds = await db.getRefundsForPayment(paymentId);
    const totalRefunded = refunds.reduce((sum, r) => sum + r.amount, 0);

    res.json({
      paymentId,
      originalAmount: payment.amount,
      totalRefunded,
      remaining: parseFloat((payment.amount - totalRefunded).toFixed(2)),
      refunds,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Process multiple refunds in a single request. Used for batch settlements.
 * Caller must have already validated admin authorization before this is invoked.
 */
exports.processBatchRefunds = async function processBatchRefunds(req, res, next) {
  try {
    const { refunds: refundRequests, batchNote } = req.body;

    if (!Array.isArray(refundRequests) || refundRequests.length === 0) {
      return res.status(400).json({ error: 'refunds must be a non-empty array' });
    }

    const results = [];

    for (const item of refundRequests) {
      try {
        const payment = await db.getPaymentById(item.paymentId);
        if (!payment) {
          results.push({ paymentId: item.paymentId, error: 'Payment not found' });
          continue;
        }

        const refund = await db.createRefund({
          paymentId: item.paymentId,
          amount: item.amount,
          reason: item.reason || batchNote,
          requestedBy: req.user.userId,
          status: 'completed',
          type: 'batch',
        });

        await db.creditBalance(payment.fromUserId, item.amount);

        await auditLog.record('refund.batch.item', {
          refundId: refund.id,
          paymentId: item.paymentId,
          amount: item.amount,
          batchRequesterId: req.user.userId,
        });

        results.push({ paymentId: item.paymentId, refundId: refund.id, status: 'completed' });
      } catch (itemErr) {
        results.push({ paymentId: item.paymentId, error: itemErr.message });
      }
    }

    res.status(201).json({
      processed: results.filter(r => !r.error).length,
      failed: results.filter(r => r.error).length,
      results,
    });
  } catch (err) {
    next(err);
  }
};
