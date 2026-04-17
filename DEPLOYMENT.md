# Deployment Guide — Cloudflare Pages

## Files Changed from GitHub Pages Setup

| File | Change |
|------|--------|
| `vite.config.js` | `base` changed from `'/arovita.care/'` to `'/'` |
| `src/main.jsx` | Removed `basename="/arovita.care"` from `<BrowserRouter>` |
| `package.json` | Removed `homepage`, `predeploy`, `deploy` scripts and `gh-pages` dependency |
| `public/_redirects` | New file — fixes page refresh 404 on SPA routes |

---

## Cloudflare Pages — First Time Setup

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** tab
2. Click **Connect to Git** → authorize GitHub → select repo `Balwinder-arovita/arovita.care`
3. Set build configuration:
   - Framework preset: `React (Vite)`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click **Save and Deploy**
5. Live URL: `https://arovita-care.pages.dev`

---

## Deploying Updates

Just push to `master` — Cloudflare auto-deploys on every push.

```bash
git add .
git commit -m "your message"
git push origin master
```
