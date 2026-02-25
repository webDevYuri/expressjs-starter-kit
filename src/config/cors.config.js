// ---------------------------------------------------------------------------
// CORS Config — Cross-origin resource sharing settings
// ---------------------------------------------------------------------------
// Allowed origins, methods, headers, and credentials policy.
//
// You can add per-route CORS overrides or dynamic origin logic here later.
// ---------------------------------------------------------------------------

module.exports = Object.freeze({
  ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:4200',
  METHODS: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  ALLOWED_HEADERS: ['Content-Type', 'Authorization'],
  CREDENTIALS: true,
});