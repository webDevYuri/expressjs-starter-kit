// ---------------------------------------------------------------------------
// Roles & Permissions
// ---------------------------------------------------------------------------
// Role definitions, granular permissions, and role-to-permission mapping.
// Used by the authorize middleware to gate route access.
//
// You can add new roles (MODERATOR, SUPER_ADMIN) or permission groups
// (MANAGE_SETTINGS, VIEW_ANALYTICS) here later.
// ---------------------------------------------------------------------------

const ROLES = Object.freeze({
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
});

const PERMISSIONS = Object.freeze({
  // Users
  CREATE_USER: 'create:user',
  READ_USER: 'read:user',
  UPDATE_USER: 'update:user',
  DELETE_USER: 'delete:user',

  // Content
  CREATE_POST: 'create:post',
  READ_POST: 'read:post',
  UPDATE_POST: 'update:post',
  DELETE_POST: 'delete:post',

  // System
  MANAGE_ROLES: 'manage:roles',
  VIEW_LOGS: 'view:logs',
});

const ROLE_PERMISSIONS = Object.freeze({
  [ROLES.ADMIN]: Object.values(PERMISSIONS),
  [ROLES.EDITOR]: [
    PERMISSIONS.READ_USER,
    PERMISSIONS.CREATE_POST,
    PERMISSIONS.READ_POST,
    PERMISSIONS.UPDATE_POST,
    PERMISSIONS.DELETE_POST,
  ],
  [ROLES.VIEWER]: [
    PERMISSIONS.READ_USER,
    PERMISSIONS.READ_POST,
  ],
});

module.exports = { ROLES, PERMISSIONS, ROLE_PERMISSIONS };