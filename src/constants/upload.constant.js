// ---------------------------------------------------------------------------
// Upload Defaults
// ---------------------------------------------------------------------------
// Max file size, allowed MIME types, allowed extensions, and storage path.
// Used by upload config and upload middleware.
//
// You can add ALLOWED_AUDIO_TYPES, ALLOWED_VIDEO_TYPES,
// or MAX_FILES_PER_REQUEST here later.
// ---------------------------------------------------------------------------

const UPLOAD = Object.freeze({
  MAX_SIZE_MB: 5,
  MAX_SIZE_BYTES: 5 * 1024 * 1024,

  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],

  ALLOWED_IMAGE_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
  ALLOWED_DOCUMENT_EXTENSIONS: ['.pdf', '.doc', '.docx'],

  STORAGE_PATH: 'uploads/',
});

module.exports = { UPLOAD };