// ---------------------------------------------------------------------------
// Rate Limit Middleware — Request throttling
// ---------------------------------------------------------------------------
// General API limiter and stricter auth limiter for login/register endpoints.
// Uses express-rate-limit with config from rate-limit.config.js.
//
// You can add Redis-backed stores, user-based rate limits, or
// endpoint-specific throttles here later.
// ---------------------------------------------------------------------------

const rateLimit = require('express-rate-limit');
const { rateLimit: rateLimitConfig } = require('../config');
const { HTTP_STATUS, MESSAGES } = require('../constants');

/**
 * General API rate limiter.
 * Apply globally in app.js or per-route group in routes.
 *
 * Usage (global):
 *   app.use('/api', apiLimiter);
 *
 * Usage (per-route):
 *   router.post('/login', authLimiter, login);
 */
const apiLimiter = rateLimit({
  windowMs: rateLimitConfig.WINDOW_MS,
  max: rateLimitConfig.MAX_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: MESSAGES.RATE_LIMIT.TOO_MANY_REQUESTS,
  },
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
});

/**
 * Stricter limiter for auth endpoints (login, register, password reset).
 * 10 requests per 15-minute window.
 */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: MESSAGES.RATE_LIMIT.TOO_MANY_REQUESTS,
  },
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
});

module.exports = { apiLimiter, authLimiter };