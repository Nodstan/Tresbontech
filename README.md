# Tresbontech Academy — AI Education Guide for Tutors

Practical, research‑backed guide for teaching AI to students aged 10–17. The site includes two learner entry tracks (code‑first and concept/no‑code), a 12‑week roadmap, 20+ practical projects, best‑fit tools, myths & fixes, a knowledge quiz, and a tutor session checklist.

## Features
- Two Tracks: code‑first (Track A) and concept‑first/no‑code (Track B)
- 12‑Week Curriculum Roadmap with track‑specific activities
- 20+ practical projects with real outputs
- Tools catalog mapped to track, age, and learning goals
- Myths & Fixes, Practical Skills framework, interactive Quiz, and Session Checklist
- Zero dependencies (vanilla HTML/CSS/JS)

## Tech Stack
- HTML + CSS (Barlow & DM Mono fonts)
- Vanilla JS with a shared script for navbar/footer and small UI behaviors
- No build step required

## Project Structure
```
tresbontech-ai-site/
├─ index.html
├─ css/
│  ├─ brand.css
│  ├─ home.css
│  └─ pages.css
├─ js/
│  └─ shared.js
└─ pages/
   ├─ tracks.html
   ├─ roadmap.html
   ├─ projects.html
   ├─ tools.html
   ├─ practical.html
   ├─ myths.html
   ├─ quiz.html
   └─ checklist.html
```

## Local Development
Use any static server. With Python 3:

```bash
cd tresbontech-ai-site
python -m http.server 8000
# Open http://localhost:8000/
```

## Deploy to Vercel
### Via GitHub (recommended)
1. Push this folder to a GitHub repository.
2. In Vercel: New Project → Import GitHub repo.
3. Settings:
   - Framework: Other
   - Build Command: (leave empty)
   - Output Directory: .
4. Deploy.

### Via Vercel CLI
```bash
npm i -g vercel
cd tresbontech-ai-site
vercel         # choose "Other", no build, output "."
vercel --prod
```

## License
All rights reserved by Tresbontech Academy unless otherwise specified by the project owners.

