// ---------------------------------------------------------------------------
// Auth Validator — Registration and login schemas
// ---------------------------------------------------------------------------
// Joi schemas for auth endpoints. Uses REGEX constants for pattern matching.
//
// You can add forgotPasswordSchema, resetPasswordSchema, or
// changePasswordSchema here later.
// ---------------------------------------------------------------------------

const Joi = require('joi');
const { REGEX } = require('../constants');

const registerSchema = Joi.object({
  firstName: Joi.string().trim().min(2).max(50).pattern(REGEX.NAME).required()
    .messages({
      'string.pattern.base': 'First name may only contain letters, spaces, hyphens, and apostrophes',
    }),
  lastName: Joi.string().trim().min(2).max(50).pattern(REGEX.NAME).required()
    .messages({
      'string.pattern.base': 'Last name may only contain letters, spaces, hyphens, and apostrophes',
    }),
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string().min(8).max(128).pattern(REGEX.STRONG_PASSWORD).required()
    .messages({
      'string.pattern.base': 'Password must contain uppercase, lowercase, number, and special character',
    }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required()
    .messages({
      'any.only': 'Passwords do not match',
    }),
});

const loginSchema = Joi.object({
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string().required(),
});

module.exports = { registerSchema, loginSchema };