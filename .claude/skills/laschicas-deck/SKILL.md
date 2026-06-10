---
name: laschicas-deck
description: Build or extend monochrome, motion-driven keynote decks in the laschicas.ai house style (React + Vite + framer-motion, pure black & white, Geist type, anti-slop). Use when creating a new presentation in this folder or restyling slides to match The Reality Check.
---

# laschicas-deck — house style for keynote decks

Monochrome, editorial, "electric but timeless" React slide decks. Use this when
building a new deck in this folder or editing an existing one to match.

## Stack
React + Vite + framer-motion. One slide = one entry in a `SLIDES` array
(`{ id, dark, center, section, chapter, Content }`). `Deck.jsx` handles nav +
AnimatePresence crossfade + fixed chrome. Slides mount fresh, so each `Item i={n}`
springs in on mount; `i` drives the stagger. Run on `pnpm dev` (port 5174).

## House rules (hard, from design-taste-frontend)
1. **Zero em-dashes / en-dashes** in visible copy. Hyphen only. Grep before shipping.
2. **No section-number eyebrows** (`01 — Topic`). Header carries the section.
3. **No decorative dots**; `·` max 1 per line. No status dots.
4. **No fake browser-chrome screenshots.** Real images or clean vector mocks.
5. **Off-black / off-white** (`#0a0a0a` / `#f7f6f3`), never pure `#000`/`#fff`.
6. **Geist + Geist Mono.** Not Inter, not a serif by default.
7. **Motion must be motivated** (hierarchy / storytelling / feedback). Honor
   `prefers-reduced-motion` in JS via `useReducedMotion` + `MotionConfig`.
8. Real photos shown **uncropped**: frame `aspect-ratio` = image ratio,
   `object-fit: contain`, `grayscale` filter for monochrome.

## Motion system
- `Item({ i, as, className })` — spring lift + de-blur entrance, staggered by `i`.
- Whole-slide crossfade with blur on enter/exit (`SLIDE` in `anim.js`).
- Optional `GridField` canvas (static grid + white light-pulses) for hero backgrounds.
- All timing in `anim.js` as named constants. No magic numbers in JSX.

## Theme rhythm
Dark slides = deliberate act-breaks (title, part-dividers with a big outlined
`chapter` numeral, close). Everything else light. One accent-free palette.

## Building a slide
```jsx
{
  id: 'thing', section: 'The job', /* dark, center, chapter optional */
  Content: () => (
    <>
      <Item i={0} as="h2" className="hlg">Short, plain headline.</Item>
      <div className="rows">
        <Item i={1} className="row"><span className="mk">01</span><span className="tx">Point one.</span></Item>
        <Item i={2} className="row"><span className="mk">02</span><span className="tx">Point two.</span></Item>
      </div>
    </>
  ),
}
```
Type classes: `displg` `disp` `hlg` `h` (display), `sub` `body` (`.lead` = full color),
`kicker` (mono label), `rows`/`row`/`mk`/`tx`, `cols`(.wide-text), `photo`, `note`/`chat`/`msg`.

## Workflow
`pnpm build` must pass → `grep -n $'—\|–' src/slides.jsx` returns nothing →
commit (trailer `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`)
→ `git push`.

## New deck
Copy the source structure, replace `slides.jsx`. `index.css` tokens, `Deck.jsx`,
`components.jsx`, and `anim.js` carry the system. Drop assets in `public/assets/`;
de-background logos with PIL (luminance→alpha) so they invert to crisp white on dark.
