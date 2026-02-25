// ---------------------------------------------------------------------------
// User Validator — User CRUD schemas
// ---------------------------------------------------------------------------
// Joi schemas for creating and updating users. Update requires min 1 field.
//
// You can add changeRoleSchema, updateProfileSchema, or
// bulkCreateSchema here later.
// ---------------------------------------------------------------------------

const Joi = require('joi');
const { REGEX } = require('../constants');

const createUserSchema = Joi.object({
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
  role: Joi.string().valid('admin', 'editor', 'viewer').default('viewer'),
});

const updateUserSchema = Joi.object({
  firstName: Joi.string().trim().min(2).max(50).pattern(REGEX.NAME)
    .messages({
      'string.pattern.base': 'First name may only contain letters, spaces, hyphens, and apostrophes',
    }),
  lastName: Joi.string().trim().min(2).max(50).pattern(REGEX.NAME)
    .messages({
      'string.pattern.base': 'Last name may only contain letters, spaces, hyphens, and apostrophes',
    }),
  email: Joi.string().trim().lowercase().email(),
  role: Joi.string().valid('admin', 'editor', 'viewer'),
}).min(1).messages({
  'object.min': 'At least one field is required to update',
});

module.exports = { createUserSchema, updateUserSchema };