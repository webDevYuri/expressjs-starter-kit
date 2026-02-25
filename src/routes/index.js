// ---------------------------------------------------------------------------
// Route Registry — Central router that mounts all route modules
// ---------------------------------------------------------------------------
// Mount new route files here as you create them.
// All routes are prefixed with /api/v1 from app.js.
//
// You can add versioned route groups (/api/v2), health/readiness probes,
// or API documentation routes (swagger) here later.
// ---------------------------------------------------------------------------

const { Router } = require('express');

const router = Router();

// Mount route modules here:
//   const authRoutes = require('./auth.routes');
//   const userRoutes = require('./user.routes');
//   router.use('/auth', authRoutes);
//   router.use('/users', userRoutes);

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

module.exports = router;