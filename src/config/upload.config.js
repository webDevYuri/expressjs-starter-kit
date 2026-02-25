// ---------------------------------------------------------------------------
// Upload Config — File upload settings
// ---------------------------------------------------------------------------
// Max file size, storage path, and allowed MIME types from UPLOAD constant.
//
// You can add cloud storage config (S3, GCS), thumbnail sizes, or
// per-route upload limits here later.
// ---------------------------------------------------------------------------

const { UPLOAD } = require('../constants');

module.exports = Object.freeze({
  MAX_SIZE_BYTES: UPLOAD.MAX_SIZE_BYTES,
  STORAGE_PATH: process.env.UPLOAD_PATH || UPLOAD.STORAGE_PATH,
  ALLOWED_IMAGE_TYPES: UPLOAD.ALLOWED_IMAGE_TYPES,
  ALLOWED_DOCUMENT_TYPES: UPLOAD.ALLOWED_DOCUMENT_TYPES,
});