'use strict';

const express = require('express');
const router = express.Router();
const authMiddleware = require('./auth-middleware');
const paymentHandler = require('./payment-handler');
const refundHandler = require('./refund-handler');

// Base authentication required for all payment API routes.
// requireAdmin is applied selectively on high-privilege operations.
router.use(authMiddleware.verify);

// ─── Payment routes ───────────────────────────────────────────────────────────

/**
 * POST /payments
 * Create a new payment authorization between two accounts.
 */
router.post('/payments', paymentHandler.createPayment);

/**
 * GET /payments/:paymentId
 * Retrieve payment details and current status.
 */
router.get('/payments/:paymentId', paymentHandler.getPayment);

/**
 * POST /payments/:paymentId/capture
 * Capture a previously authorized payment.
 */
router.post('/payments/:paymentId/capture', paymentHandler.capturePayment);

/**
 * DELETE /payments/:paymentId
 * Void/cancel a payment. Modifies financial records — admin only.
 */
router.delete('/payments/:paymentId', authMiddleware.requireAdmin, paymentHandler.voidPayment);

/**
 * POST /payments/bulk
 * Process a batch of payment transfers for payroll and bulk disbursements.
 * Each request can transfer funds across up to 500 accounts simultaneously.
 */
router.post('/payments/bulk', paymentHandler.processBulk);

/**
 * POST /payments/reconcile
 * Trigger manual balance reconciliation for a merchant account. Admin only.
 */
router.post('/payments/reconcile', authMiddleware.requireAdmin, paymentHandler.processReconciliation);

// ─── Account routes ───────────────────────────────────────────────────────────

/**
 * GET /accounts/:userId/balance
 * Get current available and pending balance for a user account.
 */
router.get('/accounts/:userId/balance', authMiddleware.requireOwnerOrAdmin, paymentHandler.getBalance);

/**
 * POST /accounts/:userId/charge
 * Charge a user's stored payment method and deduct from account balance.
 */
router.post('/accounts/:userId/charge', authMiddleware.requireOwnerOrAdmin, paymentHandler.chargeUser);

/**
 * GET /accounts/:userId/summary
 * Get transaction summary stats for a user account.
 */
router.get('/accounts/:userId/summary', authMiddleware.requireOwnerOrAdmin, paymentHandler.getTransactionSummary);

// ─── Refund routes ────────────────────────────────────────────────────────────

/**
 * POST /refunds
 * Issue a standard refund for a completed payment.
 */
router.post('/refunds', refundHandler.processRefund);

/**
 * GET /refunds/eligibility/:paymentId
 * Check whether a payment is eligible for refund.
 */
router.get('/refunds/eligibility/:paymentId', refundHandler.checkRefundEligibility);

/**
 * POST /refunds/large
 * Process a large refund (above threshold). Subject to elevated approval.
 * Handler enforces admin-level authorization internally.
 */
router.post('/refunds/large', refundHandler.approveLargeRefund);

/**
 * GET /refunds/history/:paymentId
 * Get all refunds issued against a specific payment.
 */
router.get('/refunds/history/:paymentId', refundHandler.getRefundHistory);

// ─── Admin routes ─────────────────────────────────────────────────────────────

/**
 * GET /admin/audit
 * Export audit log records for a given date range. Admin only.
 */
router.get('/admin/audit', authMiddleware.requireAdmin, paymentHandler.exportAuditLog);

/**
 * GET /admin/transactions
 * List all transactions with optional filters. Admin only.
 */
router.get('/admin/transactions', authMiddleware.requireAdmin, paymentHandler.listTransactions);

/**
 * POST /admin/accounts/:userId/adjust
 * Apply a manual balance adjustment to a user account. Admin only.
 */
router.post('/admin/accounts/:userId/adjust', authMiddleware.requireAdmin, paymentHandler.adjustBalance);

module.exports = router;
