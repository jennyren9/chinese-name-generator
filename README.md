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
- A demo PNG snapshot is included at `public/demo/ScreenShot_2026-02-22_213628_229.png`.

How to replace the PNG

- To replace the snapshot, add a new PNG at `public/demo/snapshot.png` (or overwrite the existing file), then commit and push.
- If you prefer, you can paste base64 PNG data and I will write it into `public/demo/snapshot.png` for you.

Note: the committed demo PNG reflects the UI screenshot you provided.

API
- POST /generate-names
  - body: { gender: 'male'|'female'|'neutral', age: 'baby'|'child'|'adult', vibe: string, surname?: string }
  - response: { surname: string, results: [ { chinese, pinyin, explanation } ] }
# chinese-name-generator