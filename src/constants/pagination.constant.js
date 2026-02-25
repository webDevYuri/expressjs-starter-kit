// ---------------------------------------------------------------------------
// Pagination Defaults
// ---------------------------------------------------------------------------
// Default page, limit, max limit, and sort order values.
// Used by the pagination utility and common validator.
//
// You can add CURSOR_BASED settings or default sort fields here later.
// ---------------------------------------------------------------------------

const PAGINATION = Object.freeze({
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
});

const SORT_ORDER = Object.freeze({
  ASC: 'asc',
  DESC: 'desc',
});

module.exports = { PAGINATION, SORT_ORDER };