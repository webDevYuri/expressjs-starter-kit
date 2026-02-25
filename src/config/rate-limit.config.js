// ---------------------------------------------------------------------------
// Rate Limit Config — Request throttling settings
// ---------------------------------------------------------------------------
// Global window duration and max requests per window.
//
// You can add per-route limits, skip rules, or key generators here later.
// ---------------------------------------------------------------------------

module.exports = Object.freeze({
  WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000,
  MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,
});