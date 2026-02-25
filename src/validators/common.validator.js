// ---------------------------------------------------------------------------
// Common Validator — Shared reusable schemas
// ---------------------------------------------------------------------------
// Generic schemas used across multiple routes: MongoDB ObjectId validation,
// pagination query params with search.
//
// You can add uuidSchema, dateRangeSchema, or fileUploadSchema here later.
// ---------------------------------------------------------------------------

const Joi = require('joi');
const { REGEX, PAGINATION, SORT_ORDER } = require('../constants');

/**
 * Validates a MongoDB ObjectId string.
 *
 * Usage:
 *   router.get('/:id', validate(mongoIdSchema, 'params'), getUser);
 */
const mongoIdSchema = Joi.object({
  id: Joi.string().pattern(REGEX.MONGO_ID).required()
    .messages({
      'string.pattern.base': 'Invalid ID format',
    }),
});

/**
 * Validates standard pagination query parameters.
 *
 * Usage:
 *   router.get('/', validate(paginationSchema, 'query'), getUsers);
 */
const paginationSchema = Joi.object({
  page: Joi.number().integer().min(1).default(PAGINATION.DEFAULT_PAGE),
  limit: Joi.number().integer().min(1).max(PAGINATION.MAX_LIMIT).default(PAGINATION.DEFAULT_LIMIT),
  sortBy: Joi.string().trim().max(50).default('createdAt'),
  order: Joi.string().valid(SORT_ORDER.ASC, SORT_ORDER.DESC).default(SORT_ORDER.DESC),
  search: Joi.string().trim().max(100).allow(''),
});

module.exports = { mongoIdSchema, paginationSchema };