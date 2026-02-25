// ---------------------------------------------------------------------------
// Validate Middleware — Joi schema validation
// ---------------------------------------------------------------------------
// Runs a Joi schema against req.body, req.query, or req.params.
// Returns 422 with field-level error details on validation failure.
//
// You can add custom error formatting, i18n message support, or
// multi-source validation (body + params in one call) here later.
// ---------------------------------------------------------------------------

const { HTTP_STATUS } = require('../constants');

/**
 * Validate request data against a Joi schema.
 *
 * @param {import('joi').ObjectSchema} schema - Joi validation schema.
 * @param {'body'|'query'|'params'} source - Which part of the request to validate.
 * @returns {Function} Express middleware
 *
 * Usage:
 *   const { registerSchema } = require('../validators/auth.validator');
 *   router.post('/register', validate(registerSchema), register);
 *   router.get('/users', validate(getUsersQuerySchema, 'query'), getUsers);
 */
const validate = (schema, source = 'body') => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[source], {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message.replace(/"/g, ''),
      }));

      return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({
        success: false,
        message: 'Validation failed.',
        errors,
      });
    }

    req[source] = value;
    next();
  };
};

module.exports = { validate };