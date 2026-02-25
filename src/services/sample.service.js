/**
 * SERVICES — Core business logic layer.
 *
 * Create one service file per resource or domain:
 *   - auth.service.js     → register, login, refreshToken, logout
 *   - user.service.js     → getUsers, getUserById, updateUser, deleteUser
 *   - mail.service.js     → sendWelcomeEmail, sendPasswordReset
 *   - upload.service.js   → processUpload, deleteFile
 *   - token.service.js    → generateToken, verifyToken, blacklistToken
 *
 * Service responsibilities:
 *   - Business rule enforcement
 *   - Database queries (via models)
 *   - External API calls
 *   - Data processing and transformation
 *   - Throwing errors for known failure cases
 *
 * Services should NOT access req or res — they receive plain data and return plain data.
 * Services are called by controllers.
 *
 * Naming convention: {resource}.service.js
 */
