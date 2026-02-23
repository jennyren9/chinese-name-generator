const express = require('express');
const cors = require('cors');
const path = require('path');
const pinyin = require('pinyin');
const { SURNAMES, SURNAME_PINYIN_MAP, CHARACTERS } = require('./data/names');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

function chooseSurname(input) {
  if (!input) {
    return SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
  }
  input = input.trim();
  // if input contains non-ascii (likely Chinese characters), use directly
  if (/[^\x00-\x7F]/.test(input)) {
    return input[0];
  }
  // try to map pinyin to common surname
  const key = input.toLowerCase();
  if (SURNAME_PINYIN_MAP[key]) return SURNAME_PINYIN_MAP[key];
  // fallback: pick a random common surname
  return SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
}

function scoreChar(ch, vibeWords) {
  let score = 0;
  for (const w of vibeWords) {
    if (ch.tags && ch.tags.includes(w)) score += 2;
    if (ch.meaning && ch.meaning.toLowerCase().includes(w)) score += 1;
  }
  return score;
}

function generateGivenCandidates({ gender, age, vibe }) {
  const vibeWords = (vibe || '').toLowerCase().split(/[^a-z0-9\u4e00-\u9fff]+/).filter(Boolean);
  const pool = CHARACTERS.filter(c => c.genders.includes(gender) || c.genders.includes('neutral'))
    .filter(c => c.ages.includes(age) || c.ages.includes('all'));

  // score single chars
  const scored = pool.map(c => ({ c, s: scoreChar(c, vibeWords) }));
  scored.sort((a,b)=>b.s - a.s);

  // build 1- and 2-char candidates
  const candidates = [];
  // take top N singles
  const topSingles = scored.slice(0, 12).map(x => x.c);
  for (const c1 of topSingles) {
    candidates.push({ name: c1.char, score: scoreChar(c1, vibeWords) });
  }
  // two-char combos: pair top with others
  for (let i=0;i<Math.min(8, topSingles.length);i++){
    for (let j=0;j<Math.min(12, pool.length);j++){
      const c2 = pool[j];
      const s = scoreChar(topSingles[i], vibeWords) + scoreChar(c2, vibeWords);
      candidates.push({ name: topSingles[i].char + c2.char, score: s });
    }
  }

  // deduplicate and sort
  const map = new Map();
  for (const cand of candidates) {
    if (cand.name.length > 2) continue;
    if (!map.has(cand.name) || map.get(cand.name) < cand.score) map.set(cand.name, cand.score);
  }
  const arr = Array.from(map.entries()).map(([name, score])=>({name,score}));
  arr.sort((a,b)=>b.score - a.score);
  return arr;
}

function explainNameChars(given) {
  // create short explanation from characters using CHARACTERS data
  const chars = [];
  for (const ch of CHARACTERS) {
    if (given.includes(ch.char)) chars.push(ch);
  }
  if (chars.length === 0) return 'A pleasant-sounding name.';
  const parts = chars.map(c => c.meaning);
  return parts.join(' and ');
}

app.post('/generate-names', (req, res) => {
  const { gender = 'neutral', age = 'adult', vibe = '', surname } = req.body || {};
  const sname = chooseSurname(surname);

  const candidates = generateGivenCandidates({ gender, age, vibe });
  const results = [];
  const used = new Set();
  for (const cand of candidates) {
    if (results.length >= 3) break;
    if (used.has(cand.name)) continue;
    used.add(cand.name);
    const full = (sname + cand.name).replace(/\s+/g,'');
    const py = pinyin(full, { style: pinyin.STYLE_NORMAL }).flat().join(' ');
    const explanation = explainNameChars(cand.name);
    results.push({ chinese: full, pinyin: py, explanation: explanation });
  }

  res.json({ surname: sname, results });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
