// ---------------------------------------------------------------------------
// Pagination Helpers — Query parsing and metadata builders
// ---------------------------------------------------------------------------
// parsePagination() extracts page/limit/sort from query params.
// buildPaginationMeta() creates response metadata (totalPages, hasNext, etc.).
//
// You can add cursor-based pagination, offset helpers, or
// Mongoose/Sequelize-specific adapters here later.
// ---------------------------------------------------------------------------

const { PAGINATION, SORT_ORDER } = require('../constants');

/**
 * Parse pagination parameters from query string.
 *
 * @param {Object} query - req.query object.
 * @returns {{ page: number, limit: number, skip: number, sort: string }}
 *
 * Usage:
 *   const { page, limit, skip, sort } = parsePagination(req.query);
 *   const users = await User.find().sort(sort).skip(skip).limit(limit);
 */
const parsePagination = (query = {}) => {
  let page = parseInt(query.page, 10) || PAGINATION.DEFAULT_PAGE;
  let limit = parseInt(query.limit, 10) || PAGINATION.DEFAULT_LIMIT;

  if (page < 1) page = 1;
  if (limit < 1) limit = PAGINATION.DEFAULT_LIMIT;
  if (limit > PAGINATION.MAX_LIMIT) limit = PAGINATION.MAX_LIMIT;

  const skip = (page - 1) * limit;

  const sortField = query.sortBy || 'createdAt';
  const sortOrder = query.order === SORT_ORDER.ASC ? 1 : -1;
  const sort = { [sortField]: sortOrder };

  return { page, limit, skip, sort };
};

/**
 * Build pagination metadata for the response.
 *
 * @param {number} totalItems - Total number of documents/rows.
 * @param {number} page - Current page number.
 * @param {number} limit - Items per page.
 * @returns {{ totalItems: number, totalPages: number, currentPage: number, perPage: number, hasNextPage: boolean, hasPrevPage: boolean }}
 *
 * Usage:
 *   const meta = buildPaginationMeta(totalUsers, page, limit);
 *   res.json({ success: true, data: users, meta });
 */
const buildPaginationMeta = (totalItems, page, limit) => {
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems,
    totalPages,
    currentPage: page,
    perPage: limit,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
};

module.exports = { parsePagination, buildPaginationMeta };