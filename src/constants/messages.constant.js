// ---------------------------------------------------------------------------
// Response Messages
// ---------------------------------------------------------------------------
// Centralized strings for auth, CRUD, validation, upload, and server responses.
// Keeps controllers and services free from hardcoded message strings.
//
// You can add PAYMENT, NOTIFICATION, or domain-specific message groups here later.
// ---------------------------------------------------------------------------

const MESSAGES = Object.freeze({
  AUTH: {
    LOGIN_SUCCESS: 'Login successful.',
    LOGIN_FAILED: 'Invalid email or password.',
    REGISTER_SUCCESS: 'Account created successfully.',
    LOGOUT_SUCCESS: 'Logged out successfully.',
    UNAUTHORIZED: 'Authentication required.',
    FORBIDDEN: 'You do not have permission to perform this action.',
    TOKEN_EXPIRED: 'Token has expired. Please log in again.',
    TOKEN_INVALID: 'Invalid or malformed token.',
    TOKEN_REFRESHED: 'Token refreshed successfully.',
  },

  CRUD: {
    CREATED: (resource) => `${resource} created successfully.`,
    UPDATED: (resource) => `${resource} updated successfully.`,
    DELETED: (resource) => `${resource} deleted successfully.`,
    FETCHED: (resource) => `${resource} retrieved successfully.`,
    NOT_FOUND: (resource) => `${resource} not found.`,
    ALREADY_EXISTS: (resource) => `${resource} already exists.`,
  },

  VALIDATION: {
    REQUIRED: (field) => `${field} is required.`,
    INVALID_FORMAT: (field) => `${field} has an invalid format.`,
    TOO_SHORT: (field, min) => `${field} must be at least ${min} characters.`,
    TOO_LONG: (field, max) => `${field} must not exceed ${max} characters.`,
    INVALID_EMAIL: 'Please provide a valid email address.',
    WEAK_PASSWORD: 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.',
    PASSWORDS_MISMATCH: 'Passwords do not match.',
  },

  UPLOAD: {
    SUCCESS: 'File uploaded successfully.',
    TOO_LARGE: (maxMB) => `File size must not exceed ${maxMB}MB.`,
    INVALID_TYPE: (allowed) => `Invalid file type. Allowed: ${allowed}.`,
  },

  RATE_LIMIT: {
    TOO_MANY_REQUESTS: 'Too many requests. Please try again later.',
  },

  SERVER: {
    INTERNAL_ERROR: 'An unexpected error occurred. Please try again later.',
    SERVICE_UNAVAILABLE: 'Service is temporarily unavailable. Please try again later.',
  },
});

module.exports = { MESSAGES };