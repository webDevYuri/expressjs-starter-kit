// ---------------------------------------------------------------------------
// Upload Middleware — File upload handling via Multer
// ---------------------------------------------------------------------------
// Handles image and document uploads with MIME type filtering and size limits.
// Uses disk storage with unique filenames.
//
// You can add cloud storage (S3, GCS), memory storage for processing,
// multi-file uploads, or image resizing pipelines here later.
// ---------------------------------------------------------------------------

const multer = require('multer');
const path = require('path');
const { upload: uploadConfig } = require('../config');
const { HTTP_STATUS, MESSAGES } = require('../constants');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadConfig.STORAGE_PATH);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const fileFilter = (allowedTypes) => {
  return (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(MESSAGES.UPLOAD.INVALID_TYPE(allowedTypes.join(', '))), false);
    }
  };
};

/**
 * Upload a single image file.
 *
 * Usage:
 *   router.post('/avatar', authenticate, uploadImage('avatar'), updateAvatar);
 */
const uploadImage = (fieldName = 'file') => {
  return (req, res, next) => {
    const upload = multer({
      storage,
      limits: { fileSize: uploadConfig.MAX_SIZE_BYTES },
      fileFilter: fileFilter(uploadConfig.ALLOWED_IMAGE_TYPES),
    }).single(fieldName);

    upload(req, res, (err) => {
      if (err) {
        const message = err.code === 'LIMIT_FILE_SIZE'
          ? MESSAGES.UPLOAD.TOO_LARGE(`${uploadConfig.MAX_SIZE_BYTES / (1024 * 1024)}`)
          : err.message;

        return res.status(HTTP_STATUS.BAD_REQUEST).json({ success: false, message });
      }
      next();
    });
  };
};

/**
 * Upload a single document file.
 *
 * Usage:
 *   router.post('/resume', authenticate, uploadDocument('resume'), submitResume);
 */
const uploadDocument = (fieldName = 'file') => {
  return (req, res, next) => {
    const upload = multer({
      storage,
      limits: { fileSize: uploadConfig.MAX_SIZE_BYTES },
      fileFilter: fileFilter(uploadConfig.ALLOWED_DOCUMENT_TYPES),
    }).single(fieldName);

    upload(req, res, (err) => {
      if (err) {
        const message = err.code === 'LIMIT_FILE_SIZE'
          ? MESSAGES.UPLOAD.TOO_LARGE(`${uploadConfig.MAX_SIZE_BYTES / (1024 * 1024)}`)
          : err.message;

        return res.status(HTTP_STATUS.BAD_REQUEST).json({ success: false, message });
      }
      next();
    });
  };
};

module.exports = { uploadImage, uploadDocument };