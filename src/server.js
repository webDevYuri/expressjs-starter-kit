// ---------------------------------------------------------------------------
// Server Entry Point
// ---------------------------------------------------------------------------
// Bootstraps the Express app: loads environment variables, imports the
// configured app from app.js, and starts the HTTP server.
//
// Keep this file thin. All Express configuration belongs in app.js.
// You can add graceful shutdown, cluster mode, or HTTPS setup here later.
// ---------------------------------------------------------------------------

require('dotenv').config();

const app = require('./app');

const PORT = parseInt(process.env.PORT, 10) || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} [${process.env.NODE_ENV || 'development'}]`);
});
