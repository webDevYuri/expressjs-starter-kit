// ---------------------------------------------------------------------------
// Express Application Factory
// ---------------------------------------------------------------------------
// Creates and configures the Express 5 app instance: registers global
// middlewares, mounts API routes, and wires the 404 and error handlers.
//
// You can add cookie-parser, compression, request-id generation,
// or additional security middlewares (hpp, mongo-sanitize) here later.
// ---------------------------------------------------------------------------

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

// ---------------------------------------------------------------------------
// Global Middlewares
// ---------------------------------------------------------------------------
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------
app.use('/api/v1', routes);

// ---------------------------------------------------------------------------
// 404 — Undefined routes
// ---------------------------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Cannot ${req.method} ${req.originalUrl}` });
});

// ---------------------------------------------------------------------------
// Global Error Handler
// ---------------------------------------------------------------------------
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
});

module.exports = app;
