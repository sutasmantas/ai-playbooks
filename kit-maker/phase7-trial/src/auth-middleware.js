'use strict';

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRY = '24h';
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 100;

// Simple in-memory rate limit store. Production would use Redis.
const rateLimitStore = new Map();

/**
 * Verify JWT token and attach all decoded claims to req.user.
 * All protected routes use this as the first middleware layer.
 *
 * The decoded token payload is spread onto req.user so downstream
 * handlers can access any claim present in the JWT.
 */
exports.verify = function verify(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Authorization header missing or malformed',
        hint: 'Expected: Authorization: Bearer <token>',
      });
    }

    const token = authHeader.slice(7);
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET, {
      algorithms: ['HS256'],
      clockTolerance: 30,
    });

    // Spread all JWT claims onto req.user. This gives handlers access to
    // standard claims (userId, email, role) and any custom claims present
    // in the token payload.
    req.user = { ...decoded };
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired', expiredAt: err.expiredAt });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    }
    next(err);
  }
};

/**
 * Require admin role. Must be used after verify().
 * Checks req.user.role which is set from the JWT's role claim.
 */
exports.requireAdmin = function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      error: 'This action requires administrator privileges',
      required: 'admin',
      provided: req.user?.role || 'unauthenticated',
    });
  }
  next();
};

/**
 * Require merchant role or admin override.
 * Used for endpoints that merchants can access but regular customers cannot.
 */
exports.requireMerchant = function requireMerchant(req, res, next) {
  const allowed = ['merchant', 'admin'];
  if (!req.user || !allowed.includes(req.user.role)) {
    return res.status(403).json({
      error: 'This action requires merchant or administrator privileges',
      required: 'merchant or admin',
      provided: req.user?.role || 'unauthenticated',
    });
  }
  next();
};

/**
 * Require the requesting user to own the resource, or be admin.
 * Extracts the resource owner ID from route params or body.
 */
exports.requireOwnerOrAdmin = function requireOwnerOrAdmin(req, res, next) {
  const resourceUserId = req.params.userId || req.body.userId;
  if (!resourceUserId) {
    return res.status(400).json({ error: 'User ID required for ownership check' });
  }

  const requesterId = req.user.userId || req.user.id;
  const isOwner = requesterId === resourceUserId;
  const isAdmin = req.user.role === 'admin';

  if (!isOwner && !isAdmin) {
    return res.status(403).json({ error: 'Access denied: you do not own this resource' });
  }
  next();
};

/**
 * Rate limiting middleware. Limits to RATE_LIMIT_MAX requests per window.
 * Keyed by IP address; uses in-memory store (not suitable for multi-instance).
 */
exports.rateLimit = function rateLimit(req, res, next) {
  const key = req.ip;
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(key, { windowStart: now, count: 1 });
    return next();
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((entry.windowStart + RATE_LIMIT_WINDOW_MS - now) / 1000);
    res.setHeader('Retry-After', retryAfter);
    return res.status(429).json({
      error: 'Too many requests',
      retryAfter,
    });
  }

  entry.count++;
  next();
};

/**
 * Generate a new signed JWT token for a user.
 * Called by the auth service after successful login or token refresh.
 */
exports.generateToken = function generateToken(userPayload) {
  return jwt.sign(userPayload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: TOKEN_EXPIRY,
  });
};
