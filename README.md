# Express Starter Kit

A production-ready Express 5 starter template with a scalable layered architecture, security defaults, and structured folder conventions for building REST APIs.

## Features

- Express 5 with modern async error handling
- Layered architecture: Routes → Controllers → Services → Models
- Helmet for HTTP security headers
- CORS pre-configured
- Morgan HTTP request logging
- Environment-based configuration via dotenv
- Global error handler with dev/prod output
- Health check endpoint out of the box
- Core config layer with barrel exports (app, db, auth, cors, rate-limit, upload, mail)
- Core constants layer with barrel exports (HTTP status, regex, messages, roles, pagination, upload)
- Built-in middlewares for auth (JWT), role-based access, request validation (Joi), rate limiting, and file uploads (Multer)
- Scalable folder structure for enterprise growth

## Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| Express | 5 | Web framework |
| Helmet | 8 | Security headers |
| CORS | 2 | Cross-origin resource sharing |
| Morgan | 1 | HTTP request logger |
| dotenv | 16 | Environment variable management |
| jsonwebtoken | 9 | JWT authentication |
| Joi | 17 | Request validation schemas |
| express-rate-limit | 7 | API rate limiting |
| Multer | 1 | File upload handling |
| Nodemon | 3 | Development auto-restart |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/webDevYuri/expressjs-starter-kit.git
cd expressjs-starter-kit
npm install
```

### Environment Configuration

Copy the example file and update with your local values:

```bash
cp .env.example .env
```

Then update database, JWT, and other runtime values as needed.

### Start Development Server

```bash
npm run dev
```

Server URL: `http://localhost:3000`

Health check: `GET http://localhost:3000/api/v1/health`

### Production Start

```bash
npm start
```

## Project Structure

```text
src/
|-- server.js          # Entry point — loads env, starts HTTP server
|-- app.js             # Express app — middlewares, routes, error handler
|-- config/            # Environment-based settings per domain
|-- constants/         # Static immutable values (status codes, roles, messages)
|-- controllers/       # HTTP request/response handlers
|-- middlewares/        # Auth, validation, rate-limit, upload interceptors
|-- models/            # Database schemas and entity definitions
|-- routes/            # Endpoint definitions wired to controllers
|-- services/          # Core business logic (no req/res access)
|-- utils/             # Pure helper functions and custom error classes
\-- validators/        # Request validation schemas (Joi, Zod, etc.)
```

## Request Flow

```text
Client Request
  → Route          (defines endpoint + applies middleware)
  → Middleware      (auth, validation, rate-limit)
  → Controller     (extracts input, calls service, sends response)
  → Service        (business logic, database queries via models)
  → Model          (data shape, schema, ORM/ODM layer)
```

## Folder Guide

### config/

Centralized settings read from environment variables. One file per domain. Import from the barrel file:

```js
const { db, auth, cors } = require('../config');
```

Included files:
- `app.config.js` — PORT, NODE_ENV, API prefix
- `db.config.js` — Database URI, pool size, connection options
- `auth.config.js` — JWT secret, token expiry, bcrypt salt rounds
- `cors.config.js` — Allowed origins, methods, headers, credentials
- `rate-limit.config.js` — Window duration, max requests per window
- `upload.config.js` — Max file size, storage path, allowed types (reads from UPLOAD constant)
- `mail.config.js` — SMTP host, port, credentials, sender name and address
- `index.js` — Barrel exports for all configs

### constants/

Static immutable values. Use `Object.freeze()` and `UPPER_SNAKE_CASE`. Import from the barrel file:

```js
const { HTTP_STATUS, MESSAGES, ROLES } = require('../constants');
```

Included files:
- `http-status.constant.js` — `HTTP_STATUS` — Status codes grouped by success, client error, and server error
- `regex.constant.js` — `REGEX` — Validation patterns for email, password, username, phone, slug, OTP, Mongo ID, UUID, URL
- `messages.constant.js` — `MESSAGES` — Response strings grouped by AUTH, CRUD, VALIDATION, UPLOAD, RATE_LIMIT, SERVER
- `roles.constant.js` — `ROLES`, `PERMISSIONS`, `ROLE_PERMISSIONS` — Role definitions and role-to-permission mapping
- `pagination.constant.js` — `PAGINATION`, `SORT_ORDER` — Default page, limit, max limit, sort directions
- `upload.constant.js` — `UPLOAD` — Max file size, allowed MIME types and extensions, storage path
- `index.js` — Barrel exports for all constants

### controllers/

HTTP request/response handlers. Extract input, call services, return responses. No business logic here.

Suggested files:
- `auth.controller.js` — register, login, logout, refreshToken
- `user.controller.js` — getUsers, getUserById, updateUser, deleteUser

### middlewares/

Functions that intercept requests before reaching controllers. The 404 handler and global error handler are already wired in `app.js`.

Included files:
- `auth.middleware.js` — `authenticate` — Verify JWT token, attach decoded user to `req.user`
- `role.middleware.js` — `authorize(...permissions)` — Check user role against `ROLE_PERMISSIONS` mapping
- `validate.middleware.js` — `validate(schema, source)` — Run Joi schema against `req.body`, `req.query`, or `req.params`
- `rate-limit.middleware.js` — `apiLimiter`, `authLimiter` — General and strict (auth) rate limiters
- `upload.middleware.js` — `uploadImage(field)`, `uploadDocument(field)` — Multer-based file upload with type/size checks

### models/

Database schemas and entity definitions. Adapt to your ORM/ODM (Mongoose, Sequelize, Prisma, Knex).

Suggested files:
- `user.model.js` — User schema (name, email, password, role)
- `token.model.js` — Refresh token or password reset token schema

### routes/

Endpoint definitions that wire HTTP methods to controllers with inline middleware.

`routes/index.js` is the central registry — mount all route files here.

Suggested files:
- `auth.routes.js` — POST /register, POST /login, POST /logout
- `user.routes.js` — GET /, GET /:id, PATCH /:id, DELETE /:id

### services/

Core business logic. Services receive plain data and return plain data — no `req` or `res` access.

Suggested files:
- `auth.service.js` — register, login, refreshToken, logout
- `user.service.js` — getUsers, getUserById, updateUser, deleteUser
- `mail.service.js` — sendWelcomeEmail, sendPasswordReset
- `token.service.js` — generateToken, verifyToken, blacklistToken

### utils/

Pure helper functions with no side effects. Stateless and framework-agnostic.

Included files:
- `app-error.util.js` — `AppError` — Custom Error class with `statusCode` and `isOperational` flag
- `async-handler.util.js` — `asyncHandler(fn)` — Wraps async controllers so errors forward to `next()`
- `response.util.js` — `success(res, opts)`, `error(res, opts)` — Standardized JSON response formatters with optional `meta` and `errors`
- `pagination.util.js` — `parsePagination(query)`, `buildPaginationMeta(total, page, limit)` — Parse query params and build pagination metadata

### validators/

Joi validation schemas consumed by the `validate` middleware. Uses `REGEX` constants for pattern matching.

Included files:
- `auth.validator.js` — `registerSchema`, `loginSchema` — Name, email, password with strength check, confirm password match
- `user.validator.js` — `createUserSchema`, `updateUserSchema` — User CRUD validation with role enum and `.min(1)` on update
- `common.validator.js` — `mongoIdSchema`, `paginationSchema` — Reusable ID param and pagination query validation

## Template Cleanup

Remove all sample placeholder files when you're ready to build:

```powershell
Get-ChildItem src -Recurse -File -Filter 'sample.*' | Remove-Item -Force
```

## Scripts

- `npm run dev` — Start development server with auto-restart
- `npm start` — Start production server
- `npm run lint` — Lint source code
- `npm run lint:fix` — Lint and auto-fix

## Best Practices

- Keep controllers thin — delegate logic to services
- Keep services unaware of HTTP (no req/res)
- Validate all input at the route level via middleware
- Use environment variables for all secrets and config
- Use `Object.freeze()` for constants
- Prefer async/await with a centralized error handler
- One file per concern, one concern per file

## License

MIT
