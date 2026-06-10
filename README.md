# Presentations

A reusable home for talk decks. Each deck is a React + framer-motion app
(monochrome, motion-driven). Add new decks as siblings — this one is
**The Reality Check** (laschicas.ai, for the current cohort).

## Run it

```bash
cd ~/Desktop/presentation
pnpm install      # first time only
pnpm dev          # opens http://localhost:5173
```

Then present full-screen (⌃⌘F in most browsers).

## Drive it

| Key | Action |
| --- | --- |
| → ↓ Space | next slide |
| ← ↑ | previous slide |
| 1–9 | jump to slide N |
| Home / End | first / last |
| click right / left | next / prev |
| swipe | next / prev (touch) |

## Edit it

- **Copy & slide order** → `src/slides.jsx` (each slide is a small component)
- **Motion timing** → `src/anim.js` (one storyboard of named constants)
- **Look & feel** → `src/index.css` (`:root` tokens at the top; pure B&W)
- **Reusable pieces / figures** → `src/components.jsx`
  (`HL` highlight wipe, `DataMountain`, `SlackMock`, `CapstoneMock`, `SalaryTable`, `Logo`)

### Swapping in real assets (logo / photos / screenshots)

Everything ships with elegant monochrome placeholders:

- **Logo** — `Logo` in `components.jsx` is a geometric mark. Drop a real SVG/PNG
  into `src/assets/` and replace the `<span className="mark" />` with an `<img>`.
- **Team & stage photos** — slides 02 and 09 have layout space; add an `<img>`
  styled with `filter: grayscale(1) contrast(1.05)` to stay monochrome.
- **Slack screenshot** — `SlackMock` is a faithful recreation; keep it, or swap
  for a real grayscale screenshot inside the `.device` frame.

## New deck

Copy this folder, rename it, edit `src/slides.jsx`. The motion system and
chrome come along for free.
