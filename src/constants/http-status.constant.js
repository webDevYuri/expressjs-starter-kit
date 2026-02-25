// ---------------------------------------------------------------------------
// HTTP Status Codes
// ---------------------------------------------------------------------------
// Grouped status codes for success, client error, and server error responses.
//
// You can add PARTIAL_CONTENT (206), METHOD_NOT_ALLOWED (405),
// or GONE (410) here later as needed.
// ---------------------------------------------------------------------------

const HTTP_STATUS = Object.freeze({
  // Success
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,

  // Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,

  // Server Errors
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
});

module.exports = { HTTP_STATUS };