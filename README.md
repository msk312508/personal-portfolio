# Portfolio — React + Vite

A glassmorphism portfolio with animated aurora background, a typing-effect hero terminal,
and a signature "workflow pipeline" timeline for the experience section.

## 1. Customize your content

Everything text-based lives in one file:

```
src/data/portfolioData.js
```

Update:
- `profile.name`, `email`, `phone`, `github`, `linkedin`, `resumeUrl`
- `profile.summary`, `stats`
- `skills`, `experience`, `education`, `certifications`

## 2. Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## 3. Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Framework Preset: **Vite**, Build Command: `npm run build`,
   Output Directory: `dist`. Just click **Deploy**.
4. Every future `git push` to `main` auto-redeploys.

**Option B — via CLI (no GitHub needed)**
```bash
npm install -g vercel
vercel
```
Follow the prompts; it deploys directly from your machine.

## 4. Add a real resume PDF

Drop your resume PDF into the `public/` folder (e.g. `public/resume.pdf`) and set
`resumeUrl: "/resume.pdf"` in `portfolioData.js`.

## Tech used

- React 18 + Vite
- Framer Motion (scroll-triggered animations)
- react-icons (icon set)
- Hand-written CSS (no UI framework) using CSS variables for the design system
