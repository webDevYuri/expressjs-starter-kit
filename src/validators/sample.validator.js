/**
 * VALIDATORS — Request validation schemas.
 *
 * Create one validator file per resource or domain:
 *   - auth.validator.js     → registerSchema, loginSchema
 *   - user.validator.js     → createUserSchema, updateUserSchema, getUsersQuerySchema
 *   - post.validator.js     → createPostSchema, updatePostSchema
 *   - upload.validator.js   → uploadFileSchema (MIME type, size)
 *   - common.validator.js   → mongoIdSchema, paginationSchema (shared across routes)
 *
 * Use a validation library of your choice:
 *   - Joi               → Mature, rich API, widely used
 *   - Zod               → TypeScript-first, growing ecosystem
 *   - express-validator  → Express-native, chain-based syntax
 *
 * Validators are consumed by a validate middleware that runs the schema
 * against req.body / req.query / req.params and returns formatted errors.
 *
 * Naming convention: {resource}.validator.js
 */
