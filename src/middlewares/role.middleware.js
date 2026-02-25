// ---------------------------------------------------------------------------
// Role Middleware — Permission-based access control
// ---------------------------------------------------------------------------
// Checks if the authenticated user's role has the required permissions.
// Must be used after the authenticate middleware (req.user must exist).
//
// You can add resource-level ownership checks or team-based
// permission logic here later.
// ---------------------------------------------------------------------------

const { HTTP_STATUS, MESSAGES, ROLE_PERMISSIONS } = require('../constants');

/**
 * Check if the authenticated user has the required permission.
 * Must be used after authenticate middleware (req.user must exist).
 *
 * @param  {...string} requiredPermissions - One or more permission strings to check.
 * @returns {Function} Express middleware
 *
 * Usage:
 *   router.delete('/users/:id', authenticate, authorize('delete:user'), deleteUser);
 */
const authorize = (...requiredPermissions) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(HTTP_STATUS.FORBIDDEN).json({
        success: false,
        message: MESSAGES.AUTH.FORBIDDEN,
      });
    }

    const userPermissions = ROLE_PERMISSIONS[req.user.role] || [];
    const hasPermission = requiredPermissions.every((perm) => userPermissions.includes(perm));

    if (!hasPermission) {
      return res.status(HTTP_STATUS.FORBIDDEN).json({
        success: false,
        message: MESSAGES.AUTH.FORBIDDEN,
      });
    }

    next();
  };
};

module.exports = { authorize };