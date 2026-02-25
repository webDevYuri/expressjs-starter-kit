// ---------------------------------------------------------------------------
// Async Handler — Wraps async route handlers
// ---------------------------------------------------------------------------
// Catches rejected promises and forwards them to next() so you do not need
// try/catch in every controller function.
//
// You can add request timing, logging hooks, or performance tracking here later.
// ---------------------------------------------------------------------------

/**
 * Wraps an async route handler so thrown errors are forwarded to next().
 * Eliminates the need for try/catch in every controller.
 *
 * Usage:
 *   const asyncHandler = require('../utils/async-handler.util');
 *
 *   const getUsers = asyncHandler(async (req, res) => {
 *     const users = await userService.getUsers(req.query);
 *     res.json({ success: true, data: users });
 *   });
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;