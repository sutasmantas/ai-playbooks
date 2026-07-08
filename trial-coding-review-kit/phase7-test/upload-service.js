'use strict';

const fs      = require('fs');
const path    = require('path');
const crypto  = require('crypto');

// ── Config ────────────────────────────────────────────────────────────────────

const UPLOAD_DIR   = process.env.UPLOAD_DIR   || path.join(__dirname, '../uploads');
const MAX_SIZE     = parseInt(process.env.MAX_FILE_SIZE || '10485760', 10); // 10 MB
const SESSION_TTL  = parseInt(process.env.SESSION_TTL  || '3600000',  10); // 1 h
const ALLOWED_MIME = new Set([
  'image/jpeg', 'image/png', 'image/gif',
  'application/pdf', 'text/plain',
]);

const sessions = new Map(); // token → { userId, permissions, expiresAt }

// ── Session management ────────────────────────────────────────────────────────

function createSession(userId, permissions = ['read', 'upload']) {
  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, { userId, permissions, expiresAt: Date.now() + SESSION_TTL });
  return token;
}

function validateSession(token) {
  if (!token) return null;
  const session = sessions.get(token);
  if (!session) return null;
  if (session.expiresAt < Date.now()) {
    sessions.delete(token);
    return null;
  }
  return session;
}

function requirePermission(session, permission) {
  if (!session || !session.permissions.includes(permission)) {
    const err = new Error('Forbidden');
    err.statusCode = 403;
    throw err;
  }
}

// ── Input utilities ───────────────────────────────────────────────────────────

function sanitiseFilename(filename) {
  return path.basename(filename).replace(/[^a-zA-Z0-9._-]/g, '_');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── Storage primitives ────────────────────────────────────────────────────────

/**
 * Creates the per-user upload directory and returns the intended target path
 * for a new file.  Throws 409 if a file with this name already exists.
 */
async function reserveSlot(userId, filename) {
  const safe    = sanitiseFilename(filename);
  const userDir = path.join(UPLOAD_DIR, String(userId));
  await fs.promises.mkdir(userDir, { recursive: true });

  const target = path.join(userDir, safe);
  if (fs.existsSync(target)) {
    const err = new Error('File already exists');
    err.statusCode = 409;
    throw err;
  }

  return target;
}

async function persistUpload(targetPath, data) {
  await fs.promises.writeFile(targetPath, data);
  return targetPath;
}

// ── Metadata ──────────────────────────────────────────────────────────────────

async function readMetadata(filePath) {
  try {
    const stats = await fs.promises.stat(filePath);
    return {
      size:     stats.size,
      modified: stats.mtime.toISOString(),
      exists:   true,
    };
  } catch (_err) {
    // file missing or inaccessible
  }
}

// ── HTML generation ───────────────────────────────────────────────────────────

/**
 * Returns the upload-confirmation panel rendered in the user's dashboard.
 *
 * Refactored in this PR to use template literals throughout the notification
 * layer for consistency.  Previously used manual string concatenation.
 */
function buildUploadNotification(displayName, filename, fileSize) {
  const sizeLabel = fileSize >= 1024 * 1024
    ? `${(fileSize / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.ceil(fileSize / 1024)} KB`;

  return `<div class="upload-notification" data-filename="${filename}">
  <span class="owner">${displayName}</span> uploaded
  <strong>${filename}</strong> (${sizeLabel}).
  <a href="/files/${filename}" class="view-link">View</a>
</div>`;
}

// ── Upload flow ───────────────────────────────────────────────────────────────

/**
 * Primary upload handler — called by the HTTP route.
 * Validates the session, enforces MIME type and size limits, writes the file,
 * and enqueues post-processing.
 */
async function handleUpload(token, filename, mimeType, data) {
  const session = validateSession(token);
  if (!session) {
    const err = new Error('Unauthorized');
    err.statusCode = 401;
    throw err;
  }
  requirePermission(session, 'upload');

  if (!ALLOWED_MIME.has(mimeType)) {
    const err = new Error(`MIME type '${mimeType}' not permitted`);
    err.statusCode = 415;
    throw err;
  }
  if (data.length > MAX_SIZE) {
    const err = new Error('File exceeds size limit');
    err.statusCode = 413;
    throw err;
  }

  const target = await reserveSlot(session.userId, filename);
  await persistUpload(target, data);

  const meta = await readMetadata(target);
  return { path: target, size: meta.size, userId: session.userId };
}

/**
 * Post-upload processor: records virus-scan verdicts and updates the search
 * index.
 *
 * Called by the internal job queue after handleUpload() completes.  Also
 * called directly from the scan-service webhook at
 * POST /internal/process-upload, which passes filePath and userId from the
 * webhook payload.
 */
async function processUpload(filePath, userId, scanResults = {}) {
  const meta = await readMetadata(filePath);
  if (!meta) return null;

  const record = {
    filePath,
    userId,
    size:      meta.size,
    modified:  meta.modified,
    safe:      scanResults.clean !== false,
    indexedAt: new Date().toISOString(),
  };

  const indexPath = path.join(UPLOAD_DIR, 'index.json');
  let index = [];
  try {
    const raw = await fs.promises.readFile(indexPath, 'utf8');
    index = JSON.parse(raw);
  } catch (_err) {
    // first run or corrupt index — start fresh
  }
  index.push(record);
  await fs.promises.writeFile(indexPath, JSON.stringify(index, null, 2));

  return record;
}

// ── File listing ──────────────────────────────────────────────────────────────

async function listUserFiles(token) {
  const session = validateSession(token);
  if (!session) {
    const err = new Error('Unauthorized');
    err.statusCode = 401;
    throw err;
  }

  const userDir = path.join(UPLOAD_DIR, String(session.userId));
  let entries;
  try {
    entries = await fs.promises.readdir(userDir);
  } catch (_err) {
    return [];
  }

  const results = await Promise.all(
    entries.map(async (name) => {
      const fp   = path.join(userDir, name);
      const meta = await readMetadata(fp);
      return meta ? { name, ...meta } : null;
    })
  );
  return results.filter(Boolean);
}

// ── Statistics ────────────────────────────────────────────────────────────────

async function getUserStats(token) {
  const files     = await listUserFiles(token);
  const totalSize = files.reduce((sum, f) => sum + (f.size || 0), 0);
  const sorted    = files.slice().sort((a, b) => b.modified.localeCompare(a.modified));
  return {
    fileCount:   files.length,
    totalSize,
    totalSizeMb: (totalSize / (1024 * 1024)).toFixed(2),
    lastUpload:  sorted.length > 0 ? sorted[0].modified : null,
  };
}

// ── Admin ─────────────────────────────────────────────────────────────────────

async function deleteFile(token, targetUserId, filename) {
  const session = validateSession(token);
  if (!session) {
    const err = new Error('Unauthorized');
    err.statusCode = 401;
    throw err;
  }
  requirePermission(session, 'admin');

  const safe     = sanitiseFilename(filename);
  const filePath = path.join(UPLOAD_DIR, String(targetUserId), safe);
  await fs.promises.unlink(filePath);
  return { deleted: filePath };
}

async function purgeUserUploads(token, targetUserId) {
  const session = validateSession(token);
  if (!session) {
    const err = new Error('Unauthorized');
    err.statusCode = 401;
    throw err;
  }
  requirePermission(session, 'admin');

  const userDir = path.join(UPLOAD_DIR, String(targetUserId));
  let entries;
  try {
    entries = await fs.promises.readdir(userDir);
  } catch (_err) {
    return { deleted: 0 };
  }

  await Promise.all(
    entries.map(name =>
      fs.promises.unlink(path.join(userDir, name)).catch(() => null)
    )
  );
  await fs.promises.rmdir(userDir);
  return { deleted: entries.length };
}

// ── Exports ───────────────────────────────────────────────────────────────────

module.exports = {
  createSession,
  validateSession,
  handleUpload,
  processUpload,
  listUserFiles,
  buildUploadNotification,
  readMetadata,
  getUserStats,
  deleteFile,
  purgeUserUploads,
};
