# Chinese Name Generator

Simple full-stack JavaScript app that generates Chinese names from an English description.

Quick start

1. Install dependencies

```bash
npm install
```

2. Start the server

```bash
npm start
```

3. Open http://localhost:3000 in your browser.

Notes
- Backend: `server.js` exposes `POST /generate-names` and serves static files from `public/`.
- Frontend: `public/index.html` + `public/app.js` (React via CDN). No build step required.
- Data: `data/names.js` contains in-memory surname and character lists. Edit to expand.

Demo snapshot
- A demo snapshot of the app (from the UI) is included at `public/demo/snapshot.svg` for reference.

API
- POST /generate-names
  - body: { gender: 'male'|'female'|'neutral', age: 'baby'|'child'|'adult', vibe: string, surname?: string }
  - response: { surname: string, results: [ { chinese, pinyin, explanation } ] }
# chinese-name-generator