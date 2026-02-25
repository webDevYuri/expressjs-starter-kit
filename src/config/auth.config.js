// ---------------------------------------------------------------------------
// Auth Config — Authentication and token settings
// ---------------------------------------------------------------------------
// JWT secret, token expiry, bcrypt salt rounds, and header format.
//
// You can add OAuth client IDs, session config, or MFA settings here later.
// ---------------------------------------------------------------------------

module.exports = Object.freeze({
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
  BCRYPT_SALT_ROUNDS: 12,
  TOKEN_HEADER: 'Authorization',
  TOKEN_PREFIX: 'Bearer',
});