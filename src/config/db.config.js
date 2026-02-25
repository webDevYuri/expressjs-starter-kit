// ---------------------------------------------------------------------------
// Database Config — Connection settings
// ---------------------------------------------------------------------------
// Database URI, pool size, and timeout options.
//
// You can add replica set config, SSL options, or read preference here later.
// ---------------------------------------------------------------------------

module.exports = Object.freeze({
  URI: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp',
  OPTIONS: {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  },
});