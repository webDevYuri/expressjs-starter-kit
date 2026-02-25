// ---------------------------------------------------------------------------
// Constants Barrel — Re-exports all constant modules
// ---------------------------------------------------------------------------
// Import from here: const { HTTP_STATUS, MESSAGES, ROLES } = require('../constants');
//
// Add new constant modules to this barrel as you create them.
// ---------------------------------------------------------------------------

const { HTTP_STATUS } = require('./http-status.constant');
const { REGEX } = require('./regex.constant');
const { MESSAGES } = require('./messages.constant');
const { ROLES, PERMISSIONS, ROLE_PERMISSIONS } = require('./roles.constant');
const { PAGINATION, SORT_ORDER } = require('./pagination.constant');
const { UPLOAD } = require('./upload.constant');

module.exports = {
  HTTP_STATUS,
  REGEX,
  MESSAGES,
  ROLES,
  PERMISSIONS,
  ROLE_PERMISSIONS,
  PAGINATION,
  SORT_ORDER,
  UPLOAD,
};