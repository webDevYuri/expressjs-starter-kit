/**
 * UTILS — Pure helper functions with no side effects.
 *
 * Create one util file per concern:
 *   - app-error.util.js    → Custom AppError class with statusCode property
 *   - async-handler.util.js → Wrapper that catches async errors and forwards to next()
 *   - logger.util.js       → Winston or Pino logger configuration
 *   - response.util.js     → Standard success/error response formatters
 *   - date.util.js         → Date formatting and calculation helpers
 *   - string.util.js       → Capitalize, slugify, truncate
 *   - file.util.js         → File size formatting, extension extraction
 *   - pagination.util.js   → Build pagination metadata from query params
 *   - token.util.js        → JWT sign/verify wrappers
 *
 * Utils should be stateless and framework-agnostic when possible.
 * They should not import models, services, or Express-specific objects.
 *
 * Naming convention: {concern}.util.js
 */
