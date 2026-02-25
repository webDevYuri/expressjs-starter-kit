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
- Scalable folder structure for enterprise growth

## Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| Express | 5 | Web framework |
| Helmet | 8 | Security headers |
| CORS | 2 | Cross-origin resource sharing |
| Morgan | 1 | HTTP request logger |
| dotenv | 16 | Environment variable management |
| Nodemon | 3 | Development auto-restart |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/webDevYuri/expressjs-starter-kit.git
cd express-starter-kit
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

Centralized settings read from environment variables. One file per domain.

Suggested files:
- `app.config.js` — PORT, NODE_ENV, API prefix
- `db.config.js` — Database URI, pool size, connection options
- `auth.config.js` — JWT secret, token expiry, bcrypt salt rounds
- `cors.config.js` — Allowed origins, methods, headers
- `rate-limit.config.js` — Window duration, max requests
- `mail.config.js` — SMTP host, port, credentials
- `upload.config.js` — Max file size, allowed MIME types, storage path

### constants/

Static immutable values. Use `Object.freeze()` and `UPPER_SNAKE_CASE`.

Suggested files:
- `http-status.constant.js` — HTTP status codes (200, 201, 400, 401, 404, 500)
- `roles.constant.js` — User roles and role-to-permission mapping
- `regex.constant.js` — Validation patterns (email, phone, password, slug)
- `messages.constant.js` — Reusable response and error message strings
- `pagination.constant.js` — Default page, limit, max limit, sort orders

### controllers/

HTTP request/response handlers. Extract input, call services, return responses. No business logic here.

Suggested files:
- `auth.controller.js` — register, login, logout, refreshToken
- `user.controller.js` — getUsers, getUserById, updateUser, deleteUser

### middlewares/

Functions that intercept requests before reaching controllers. The 404 handler and global error handler are already wired in `app.js`.

Suggested files:
- `auth.middleware.js` — Verify JWT token, attach user to req
- `role.middleware.js` — Check user role/permissions
- `validate.middleware.js` — Run validation schemas and return errors
- `rate-limit.middleware.js` — Throttle requests per IP or user
- `upload.middleware.js` — Handle file uploads via Multer

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

Suggested files:
- `app-error.util.js` — Custom AppError class with statusCode
- `async-handler.util.js` — Wraps async handlers to catch errors
- `logger.util.js` — Winston or Pino logger setup
- `response.util.js` — Standard success/error response formatters
- `pagination.util.js` — Build pagination metadata from query params

### validators/

Request validation schemas consumed by a validate middleware.

Suggested files:
- `auth.validator.js` — registerSchema, loginSchema
- `user.validator.js` — createUserSchema, updateUserSchema
- `common.validator.js` — mongoIdSchema, paginationSchema (shared)

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
