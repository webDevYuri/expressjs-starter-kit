// ---------------------------------------------------------------------------
// Response Helpers — Standardized JSON responses
// ---------------------------------------------------------------------------
// success() and error() formatters that enforce a consistent API shape.
// Supports optional data, meta (pagination), and field-level errors.
//
// You can add CSV/XML formatters, envelope toggles, or HATEOAS
// link builders here later.
// ---------------------------------------------------------------------------

const { HTTP_STATUS } = require('../constants');

/**
 * Send a standardized success response.
 *
 * @param {import('express').Response} res
 * @param {Object} options
 * @param {number} [options.statusCode=200]
 * @param {string} [options.message='Success']
 * @param {*} [options.data=null]
 * @param {Object} [options.meta=null] - Pagination or extra metadata.
 */
const success = (res, { statusCode = HTTP_STATUS.OK, message = 'Success', data = null, meta = null } = {}) => {
  const response = { success: true, message };

  if (data !== null) {
    response.data = data;
  }

  if (meta !== null) {
    response.meta = meta;
  }

  return res.status(statusCode).json(response);
};

/**
 * Send a standardized error response.
 *
 * @param {import('express').Response} res
 * @param {Object} options
 * @param {number} [options.statusCode=500]
 * @param {string} [options.message='Internal Server Error']
 * @param {Array} [options.errors=null] - Validation or field-level errors.
 */
const error = (res, { statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR, message = 'Internal Server Error', errors = null } = {}) => {
  const response = { success: false, message };

  if (errors !== null) {
    response.errors = errors;
  }

  return res.status(statusCode).json(response);
};

module.exports = { success, error };