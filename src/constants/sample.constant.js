/**
 * CONSTANTS — Static immutable values used across the application.
 *
 * Create one constant file per domain:
 *   - http-status.constant.js   → HTTP status codes (200, 201, 400, 401, 404, 500, etc.)
 *   - roles.constant.js         → User roles and role-to-permission mapping
 *   - regex.constant.js         → Validation patterns (email, phone, password, slug, OTP)
 *   - messages.constant.js      → Reusable response and error message strings
 *   - pagination.constant.js    → Default page, limit, max limit, sort orders
 *   - upload.constant.js        → Allowed MIME types, max file sizes
 *
 * Use Object.freeze() to enforce immutability.
 * Use UPPER_SNAKE_CASE for exported constant names.
 * Keep constants static — no transformation logic belongs here.
 *
 * Optionally create an index.js barrel file to re-export all constants:
 *   const { HTTP_STATUS, ROLES } = require('../constants');
 */
