// ---------------------------------------------------------------------------
// Mail Config — SMTP and email sender settings
// ---------------------------------------------------------------------------
// SMTP connection details, auth credentials, and default sender info.
//
// You can add template paths, queue config, or provider-specific
// settings (SendGrid, SES, Mailgun) here later.
// ---------------------------------------------------------------------------

module.exports = Object.freeze({
  HOST: process.env.SMTP_HOST,
  PORT: parseInt(process.env.SMTP_PORT, 10) || 587,
  SECURE: process.env.SMTP_SECURE === 'true',
  AUTH: {
    USER: process.env.SMTP_USER,
    PASS: process.env.SMTP_PASS,
  },
  FROM_NAME: process.env.MAIL_FROM_NAME || 'App',
  FROM_ADDRESS: process.env.MAIL_FROM_ADDRESS || 'noreply@example.com',
});