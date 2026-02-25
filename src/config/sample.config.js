/**
 * CONFIG — Centralized application settings read from environment variables.
 *
 * Create one config file per domain:
 *   - app.config.js         → PORT, NODE_ENV, API_PREFIX
 *   - db.config.js          → DATABASE_URL, pool size, connection options
 *   - auth.config.js        → JWT_SECRET, token expiry, bcrypt salt rounds
 *   - cors.config.js        → Allowed origins, methods, headers
 *   - rate-limit.config.js  → Window duration, max requests
 *   - mail.config.js        → SMTP host, port, credentials
 *   - upload.config.js      → Max file size, allowed MIME types, storage path
 *
 * All values should read from process.env with sensible defaults.
 * Never hardcode secrets — always use environment variables.
 *
 * Optionally create an index.js barrel file to re-export all configs:
 *   const { db, app, auth } = require('../config');
 */
