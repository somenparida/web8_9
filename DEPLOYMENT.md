# Deploying this project to GitHub and Render

This document shows the recommended steps to safely push this repository to your GitHub repository and deploy both the backend (Node) and frontend (Vite) to Render.

IMPORTANT: Do NOT commit any real credentials (like your MongoDB URI with username/password) to the repository. Use the `backend/.env.example` as a template and set secrets in Render's dashboard.

1) Prepare local repo and commit changes

- Make sure you are at the repository root and have committed any local changes.

2) Add the GitHub remote and push

Replace the URL below with your repository URL if different.

```powershell
git remote add origin https://github.com/somenparida/web8_9.git
git branch -M main
git add .
git commit -m "chore: prepare repo for deployment (env example, docs, minor fix)"
git push -u origin main
```

If you use SSH keys, replace the remote URL with the SSH form.

3) Deploying on Render (recommended)

Render supports deploying a monorepo with multiple services. We'll create two services: the backend (Node web service) and the frontend (Static Site or Web Service built with Vite).

Backend (Node web service)

- In Render dashboard, create a new Web Service.
- Connect your GitHub account and select this repository and the `main` branch.
- Set the "Root Directory" (or "Start command directory") to `/backend`.
- Build command: (optional) leave empty or `npm install` (Render runs `npm install` automatically for Node). If you want an explicit command: `cd backend && npm install`.
- Start command: `npm start` (Render runs this from the `backend` directory because of the root setting).
- Environment variables: add these values in Render's Environment section:
  - MONGODB_URI = (your MongoDB Atlas connection string)
  - JWT_SECRET = (a long random secret)
  - ALLOWED_ORIGINS = https://<your-frontend>.onrender.com,http://localhost:3000
  - EMAIL_USER = (if used)
  - EMAIL_PASS = (if used)
  - NODE_ENV = production
  - PORT = 5000 (optional; Render provides $PORT automatically but your code uses process.env.PORT fallback)

- Deploy. Render will build and start your backend. Check logs for successful DB connection.

Frontend (Static Site)

- In Render, create a new Static Site (or Web Service if you prefer server-side hosting).
- Connect to the same repository and `main` branch.
- Set the "Root Directory" to `/frontend`.
- Build command: `npm run build`
- Publish directory: `dist`

- Environment variables: If your frontend makes API calls to the backend, set the client environment variable (or configure at runtime) for the API base URL. You can set `VITE_API_URL` in Render and reference it in the frontend via `import.meta.env.VITE_API_URL`. Example:
  - VITE_API_URL = https://<your-backend>.onrender.com/api

4) Notes and troubleshooting

- If MongoDB connection fails, ensure your Atlas cluster allows connections from Render's IP ranges or set IP access to allow all (temporarily) and use proper network rules later.
- Check Render logs for errors. Common errors: missing env var, port binding, start script not found.
- If your backend logs an error about `mongoose` or `connectDB`, ensure `backend/package.json` has the correct dependencies and `npm start` works locally.

5) Quick local test commands

```powershell
# from backend
cd backend; npm install; npm run dev

# from frontend
cd frontend; npm install; npm run dev
```

If you want, I can: set up a `render.yaml` for monorepo deployment, add GitHub Actions for automated deploys, or attempt to add the remote and push from this environment (I will not push secrets). Tell me which you prefer.
