// ---------------------------------------------------------------------------
// Config Barrel — Re-exports all config modules
// ---------------------------------------------------------------------------
// Import from here: const { db, auth, cors } = require('../config');
//
// Add new config modules to this barrel as you create them.
// ---------------------------------------------------------------------------

const app = require('./app.config');
const db = require('./db.config');
const auth = require('./auth.config');
const cors = require('./cors.config');
const rateLimit = require('./rate-limit.config');
const upload = require('./upload.config');
const mail = require('./mail.config');

module.exports = {
  app,
  db,
  auth,
  cors,
  rateLimit,
  upload,
  mail,
};