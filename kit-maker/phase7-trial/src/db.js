'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// ─── Payment operations ───────────────────────────────────────────────────────

async function createPayment(data) {
  const { rows } = await pool.query(
    `INSERT INTO payments
       (from_user_id, to_user_id, amount, fee, net, currency, description, status, created_by)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     RETURNING id, from_user_id AS "fromUserId", to_user_id AS "toUserId",
               amount, fee, net, currency, description, status,
               created_at AS "createdAt", created_by AS "createdBy"`,
    [data.fromUserId, data.toUserId, data.amount, data.fee, data.net,
     data.currency, data.description, data.status, data.createdBy]
  );
  return rows[0];
}

async function getPaymentById(paymentId) {
  const { rows } = await pool.query(
    `SELECT id, from_user_id AS "fromUserId", to_user_id AS "toUserId",
            amount, fee, net, currency, description, status,
            created_at AS "createdAt"
     FROM payments WHERE id = $1`,
    [paymentId]
  );
  return rows[0] || null;
}

async function updatePaymentStatus(paymentId, status) {
  await pool.query(
    'UPDATE payments SET status = $1, updated_at = NOW() WHERE id = $2',
    [status, paymentId]
  );
}

async function queryTransactions(filters = {}) {
  const conditions = [];
  const params = [];
  let idx = 1;

  if (filters.userId) {
    conditions.push(`(from_user_id = $${idx} OR to_user_id = $${idx})`);
    params.push(filters.userId);
    idx++;
  }
  if (filters.status) {
    conditions.push(`status = $${idx}`);
    params.push(filters.status);
    idx++;
  }
  if (filters.startDate) {
    conditions.push(`created_at >= $${idx}`);
    params.push(filters.startDate);
    idx++;
  }
  if (filters.endDate) {
    conditions.push(`created_at <= $${idx}`);
    params.push(filters.endDate);
    idx++;
  }

  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
  const { rows } = await pool.query(
    `SELECT id, from_user_id AS "fromUserId", to_user_id AS "toUserId",
            amount, currency, status, created_at AS "createdAt"
     FROM payments ${where} ORDER BY created_at DESC LIMIT $${idx}`,
    [...params, filters.limit || 100]
  );
  return rows;
}

async function getTransactionSummary(userId, period) {
  const periodMap = { '7d': '7 days', '30d': '30 days', '90d': '90 days', '1y': '1 year' };
  const interval = periodMap[period] || '30 days';

  const { rows } = await pool.query(
    `SELECT
       COUNT(*) AS "totalCount",
       COALESCE(SUM(amount), 0) AS "totalAmount",
       COALESCE(SUM(CASE WHEN status = 'captured' THEN amount ELSE 0 END), 0) AS "capturedAmount",
       COALESCE(SUM(CASE WHEN status = 'voided' THEN amount ELSE 0 END), 0) AS "voidedAmount"
     FROM payments
     WHERE (from_user_id = $1 OR to_user_id = $1)
       AND created_at >= NOW() - INTERVAL '${interval}'`,
    [userId]
  );
  return rows[0];
}

// ─── Balance operations ───────────────────────────────────────────────────────

async function getBalance(userId) {
  const { rows } = await pool.query(
    'SELECT balance FROM accounts WHERE user_id = $1',
    [userId]
  );
  if (!rows[0]) throw new Error(`Account not found for user: ${userId}`);
  return parseFloat(rows[0].balance);
}

async function getPendingBalance(userId) {
  const { rows } = await pool.query(
    `SELECT COALESCE(SUM(amount), 0) AS pending
     FROM payments WHERE from_user_id = $1 AND status = 'authorized'`,
    [userId]
  );
  return parseFloat(rows[0].pending);
}

async function deductBalance(userId, amount) {
  const { rowCount } = await pool.query(
    `UPDATE accounts
     SET balance = balance - $1, updated_at = NOW()
     WHERE user_id = $2 AND balance >= $1`,
    [amount, userId]
  );
  if (rowCount === 0) {
    throw new Error(`Balance deduction failed: insufficient funds or account not found (userId: ${userId})`);
  }
}

async function creditBalance(userId, amount) {
  await pool.query(
    'UPDATE accounts SET balance = balance + $1, updated_at = NOW() WHERE user_id = $2',
    [amount, userId]
  );
}

async function setBalance(userId, newBalance) {
  await pool.query(
    'UPDATE accounts SET balance = $1, updated_at = NOW() WHERE user_id = $2',
    [newBalance, userId]
  );
}

// ─── Refund operations ────────────────────────────────────────────────────────

async function createRefund(data) {
  const { rows } = await pool.query(
    `INSERT INTO refunds
       (payment_id, amount, reason, approval_note, requested_by, approved_by, status, type)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING id, payment_id AS "paymentId", amount, reason, status,
               type, created_at AS "createdAt"`,
    [data.paymentId, data.amount, data.reason, data.approvalNote,
     data.requestedBy, data.approvedBy, data.status, data.type || 'standard']
  );
  return rows[0];
}

async function getRefundsForPayment(paymentId) {
  const { rows } = await pool.query(
    `SELECT id, payment_id AS "paymentId", amount, reason, status,
            type, created_at AS "createdAt"
     FROM refunds WHERE payment_id = $1 ORDER BY created_at DESC`,
    [paymentId]
  );
  return rows;
}

// ─── Audit operations ─────────────────────────────────────────────────────────

async function insertAuditRecord(entry) {
  await pool.query(
    `INSERT INTO audit_log (operation, metadata, timestamp, expires_at)
     VALUES ($1, $2, $3, $4)`,
    [entry.operation, JSON.stringify(entry.metadata), entry.timestamp, entry.expiresAt]
  );
}

async function queryAuditRecords(filters = {}) {
  const conditions = [];
  const params = [];
  let idx = 1;

  if (filters.operation) {
    conditions.push(`operation = $${idx}`);
    params.push(filters.operation);
    idx++;
  }
  if (filters.startDate) {
    conditions.push(`timestamp >= $${idx}`);
    params.push(filters.startDate.toISOString());
    idx++;
  }
  if (filters.endDate) {
    conditions.push(`timestamp <= $${idx}`);
    params.push(filters.endDate.toISOString());
    idx++;
  }

  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
  const { rows } = await pool.query(
    `SELECT id, operation, metadata, timestamp
     FROM audit_log ${where} ORDER BY timestamp DESC LIMIT $${idx}`,
    [...params, filters.limit || 1000]
  );

  return rows.map(r => ({
    ...r,
    metadata: typeof r.metadata === 'string' ? JSON.parse(r.metadata) : r.metadata,
  }));
}

module.exports = {
  createPayment, getPaymentById, updatePaymentStatus, queryTransactions, getTransactionSummary,
  getBalance, getPendingBalance, deductBalance, creditBalance, setBalance,
  createRefund, getRefundsForPayment,
  insertAuditRecord, queryAuditRecords,
};
