// ---------------------------------------------------------------------------
// Auth Middleware — JWT token verification
// ---------------------------------------------------------------------------
// Verifies the Bearer token from the Authorization header and attaches
// the decoded payload to req.user. Returns 401 on missing/invalid/expired tokens.
//
// You can add API key auth, session-based auth, or token blacklist
// checking here later.
// ---------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
const { auth: authConfig } = require('../config');
const { HTTP_STATUS, MESSAGES } = require('../constants');

/**
 * Verify JWT token from the Authorization header.
 * Attaches the decoded payload to req.user on success.
 */
const authenticate = (req, res, next) => {
  const header = req.headers[authConfig.TOKEN_HEADER.toLowerCase()];

  if (!header || !header.startsWith(`${authConfig.TOKEN_PREFIX} `)) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      message: MESSAGES.AUTH.UNAUTHORIZED,
    });
  }

  const token = header.split(' ')[1];

  try {
    const decoded = jwt.verify(token, authConfig.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    const message = err.name === 'TokenExpiredError'
      ? MESSAGES.AUTH.TOKEN_EXPIRED
      : MESSAGES.AUTH.TOKEN_INVALID;

    return res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      message,
    });
  }
};

module.exports = { authenticate };