/**
 * ROUTES — Endpoint definitions that wire HTTP methods to controllers.
 *
 * Create one route file per resource or domain:
 *   - auth.routes.js      → POST /register, POST /login, POST /logout, POST /refresh
 *   - user.routes.js      → GET /, GET /:id, PATCH /:id, DELETE /:id
 *   - post.routes.js      → GET /, GET /:id, POST /, PATCH /:id, DELETE /:id
 *   - upload.routes.js    → POST /upload, DELETE /upload/:id
 *
 * Apply route-level middleware (auth, validation, rate-limit) inline:
 *   router.post('/register', validate(registerSchema), authController.register);
 *   router.get('/', authenticate, authorize('admin'), userController.getUsers);
 *
 * Register each route file in routes/index.js:
 *   router.use('/auth', authRoutes);
 *   router.use('/users', userRoutes);
 *
 * Naming convention: {resource}.routes.js
 */
