// ---------------------------------------------------------------------------
// Regex Patterns
// ---------------------------------------------------------------------------
// Reusable validation patterns for email, password, username, phone, etc.
//
// You can add IP_ADDRESS, MAC_ADDRESS, HEX_COLOR, CREDIT_CARD,
// or custom domain patterns here later.
// ---------------------------------------------------------------------------

const REGEX = Object.freeze({
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  STRONG_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#+\-_])[A-Za-z\d@$!%*?&#+\-_]{8,128}$/,
  USERNAME: /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,28}[a-zA-Z0-9])$/,
  PHONE_INTERNATIONAL: /^\+[1-9]\d{6,14}$/,
  NAME: /^[a-zA-ZÀ-ÿ' -]{2,50}$/,
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  OTP: /^\d{4,8}$/,
  MONGO_ID: /^[a-fA-F0-9]{24}$/,
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  URL: /^https?:\/\/[^\s/$.?#].[^\s]*$/i,
});

module.exports = { REGEX };