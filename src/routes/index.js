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
