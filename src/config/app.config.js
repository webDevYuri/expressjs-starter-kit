// ---------------------------------------------------------------------------
// App Config — General application settings
// ---------------------------------------------------------------------------
// Core runtime values: port, environment, API version prefix.
//
// You can add BASE_URL, APP_NAME, default timezone, or debug flags here later.
// ---------------------------------------------------------------------------

module.exports = Object.freeze({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_PREFIX: '/api/v1',
});