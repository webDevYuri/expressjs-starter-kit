/**
 * MIDDLEWARES — Functions that intercept requests before they reach controllers.
 *
 * Create one middleware file per concern:
 *   - auth.middleware.js        → Verify JWT token and attach user to req
 *   - role.middleware.js        → Check user role/permissions before allowing access
 *   - validate.middleware.js    → Run validation schemas (Joi/Zod) and return errors
 *   - rate-limit.middleware.js  → Throttle requests per IP or per user
 *   - upload.middleware.js      → Handle file uploads via Multer or similar
 *
 * The 404 handler and global error handler are already wired in app.js.
 * Add route-specific or domain-specific middleware files here.
 *
 * Naming convention: {concern}.middleware.js
 */
