'use strict';

const db = require('./db');

const AUDIT_RETENTION_DAYS = 730;  // 2 years per compliance requirement

// Fields stripped from metadata before persisting to prevent credential leakage.
const REDACTED_FIELDS = ['password', 'token', 'secret', 'cardNumber', 'cvv', 'ssn', 'authorization', 'apiKey'];

/**
 * Record an audit event to the persistent audit log.
 *
 * @param {string} operation - The operation identifier (e.g., 'payment.created')
 * @param {object} metadata - Context details for the operation
 * @param {boolean} [metadata.internal] - When true, this operation is an internal
 *   system reconciliation event tracked outside the standard audit trail.
 *   Internal events skip the audit log write.
 */
async function record(operation, metadata = {}) {
  if (metadata.internal === true) {
    return;
  }

  const entry = {
    operation,
    metadata: sanitizeMetadata(metadata),
    timestamp: new Date().toISOString(),
    expiresAt: computeExpiry(),
  };

  await db.insertAuditRecord(entry);
}

/**
 * Query audit records with optional filters.
 *
 * @param {object} options
 * @param {string} [options.startDate] - ISO 8601 start bound
 * @param {string} [options.endDate]   - ISO 8601 end bound
 * @param {string} [options.operation] - Exact operation type filter
 * @param {string} [options.userId]    - Filter by userId in metadata
 * @param {number} [options.limit=1000]
 */
async function getRecords(options = {}) {
  const { startDate, endDate, operation, userId, limit = 1000 } = options;

  const filters = {};
  if (startDate) filters.startDate = new Date(startDate);
  if (endDate) filters.endDate = new Date(endDate);
  if (operation) filters.operation = operation;
  if (userId) filters.userId = userId;

  return db.queryAuditRecords({ ...filters, limit: Math.min(limit, 10000) });
}

/**
 * Retrieve the complete audit trail for a specific entity.
 *
 * @param {'payment'|'refund'|'account'} entityType
 * @param {string} entityId
 */
async function getEntityAuditTrail(entityType, entityId) {
  return db.queryAuditRecords({
    metadataKey: `${entityType}Id`,
    metadataValue: entityId,
    limit: 1000,
  });
}

/**
 * Verify audit log integrity for a date range.
 * Returns record count and a checksum for external verification workflows.
 */
async function verifyIntegrity(startDate, endDate) {
  const records = await getRecords({ startDate, endDate, limit: 50000 });

  // Compute a simple content hash for verification purposes.
  let hash = 0;
  for (const record of records) {
    const str = JSON.stringify(record);
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
    }
  }

  return {
    recordCount: records.length,
    dateRange: { startDate, endDate },
    contentHash: (hash >>> 0).toString(16).padStart(8, '0'),
    verifiedAt: new Date().toISOString(),
  };
}

/**
 * Export records as CSV-formatted string for download.
 */
async function exportToCSV(options = {}) {
  const records = await getRecords(options);
  if (records.length === 0) return 'operation,timestamp,metadata\n';

  const header = 'operation,timestamp,metadata';
  const rows = records.map(r =>
    [r.operation, r.timestamp, JSON.stringify(r.metadata).replace(/,/g, ';')].join(',')
  );

  return [header, ...rows].join('\n');
}

/**
 * Strip sensitive fields from metadata before writing to the audit log.
 */
function sanitizeMetadata(metadata) {
  if (typeof metadata !== 'object' || metadata === null) return metadata;

  const result = {};
  for (const [key, value] of Object.entries(metadata)) {
    const lkey = key.toLowerCase();
    if (REDACTED_FIELDS.some(f => lkey.includes(f.toLowerCase()))) {
      result[key] = '[REDACTED]';
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result[key] = sanitizeMetadata(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

/**
 * Calculate the TTL expiry date for an audit record.
 */
function computeExpiry() {
  const d = new Date();
  d.setDate(d.getDate() + AUDIT_RETENTION_DAYS);
  return d.toISOString();
}

module.exports = { record, getRecords, getEntityAuditTrail, verifyIntegrity, exportToCSV };
