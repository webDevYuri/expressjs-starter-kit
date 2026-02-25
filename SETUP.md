# Setup Guide

## 1. Clone & Install

```bash
git clone <your-repo-url>
cd express-starter-kit
npm install
```

## 2. Create Environment File

```bash
cp .env.example .env
```

Open `.env` and update the values to match your local setup.

## 3. Start Development Server

```bash
npm run dev
```

Open `http://localhost:3000/api/v1/health` to verify.

## 4. Start Production Server

```bash
npm start
```

## 5. Remove Sample Files

```powershell
Get-ChildItem src -Recurse -File -Filter 'sample.*' | Remove-Item -Force
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with auto-restart |
| `npm start` | Production server |
| `npm run lint` | Lint source code |
| `npm run lint:fix` | Lint and auto-fix |
