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
- Place a screenshot PNG at `public/demo/snapshot.png` to include a visual demo of the app.

How to add your PNG

- Upload or copy your PNG file to `public/demo/snapshot.png` in the project root.
- Alternatively you can provide a base64 PNG and I can write it into `public/demo/snapshot.png` for you — paste the base64 data and I will add it.

Note: I removed the previous SVG and left this placeholder so you can add the original PNG screenshot.

API
- POST /generate-names
  - body: { gender: 'male'|'female'|'neutral', age: 'baby'|'child'|'adult', vibe: string, surname?: string }
  - response: { surname: string, results: [ { chinese, pinyin, explanation } ] }
# chinese-name-generator