// ---------------------------------------------------------------------------
// AppError — Custom error class with HTTP status code
// ---------------------------------------------------------------------------
// Throw in services and controllers. The global error handler in app.js
// catches it and sends the appropriate status code and message.
//
// You can add error codes, i18n keys, or validation error arrays here later.
// ---------------------------------------------------------------------------

/**
 * Custom application error with HTTP status code.
 * Throw in services; the global error handler in app.js catches it.
 *
 * Usage:
 *   const AppError = require('../utils/app-error.util');
 *   throw new AppError('User not found', 404);
 */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;