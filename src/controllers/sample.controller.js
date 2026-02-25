/**
 * CONTROLLERS — HTTP request/response handlers.
 *
 * Create one controller file per resource or domain:
 *   - auth.controller.js     → register, login, logout, refreshToken
 *   - user.controller.js     → getUsers, getUserById, updateUser, deleteUser
 *   - post.controller.js     → getPosts, getPostById, createPost, updatePost, deletePost
 *   - upload.controller.js   → uploadFile, deleteFile
 *
 * Controller responsibilities:
 *   1. Extract input from req.body, req.params, req.query.
 *   2. Call the appropriate service method.
 *   3. Return the formatted HTTP response.
 *
 * Controllers should NOT contain business logic — delegate that to services.
 * Controllers should NOT query the database directly — delegate that to services.
 *
 * Naming convention: {resource}.controller.js
 */
