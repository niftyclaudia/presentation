# CLAUDE.md — The Reality Check (laschicas.ai deck)

Auto-loaded context. Read this first; it captures everything decided so far so
a fresh session can continue without re-reading the whole history.

## What this is
A monochrome, motion-driven **React + Vite + framer-motion** keynote deck (14
slides) for a laschicas.ai alumni talk to a current bootcamp cohort. Pure
black & white, editorial/gallery styling, "electric but timeless." This folder
is meant to hold **multiple** presentations over time; this one lives at the root.

Repo: https://github.com/niftyclaudia/presentation (branch `main`).

## Run
```bash
pnpm install          # first time
pnpm dev              # http://localhost:5174  (strictPort)
pnpm build            # verify it compiles before committing
```
Drive: `→ ↓ Space` next · `← ↑` back · `1-9` jump · click/swipe · `⌃⌘F` fullscreen.

## Architecture
| File | Role |
| --- | --- |
| `src/Deck.jsx` | slide state, keyboard/swipe nav, AnimatePresence transitions, fixed chrome (header/progress), `MotionConfig reducedMotion="user"` |
| `src/slides.jsx` | the 14 slides as data: `{ id, dark, center, section, chapter, Content }` |
| `src/components.jsx` | primitives + figures: `Item`, `Rule`, `Logo`, `BrandLogo`, `Photo`, `MessageScene`, `SalaryTable`, `DataMountain` |
| `src/GridField.jsx` | canvas grid + light-pulse background (title slide) |
| `src/anim.js` | one storyboard of named timing constants (`ITEM`, `SLIDE`, `HLW`, `RULE`, `MTN`) |
| `src/index.css` | design tokens (`:root`) + all styling |

Slides mount fresh on navigation (AnimatePresence), so each `Item i={n}` runs its
spring entrance on mount; `i` drives the stagger.

## Non-negotiable design rules (from the design-taste-frontend skill)
- **ZERO em-dashes / en-dashes** in any visible copy. Use periods, commas, colons,
  parentheses, or restructure. Hyphen `-` only (compounds, ranges). Verify before commit:
  `grep -n $'—\|–' src/slides.jsx`
- **No section-number eyebrows** (`01 — The trap`). The running header carries section.
- **No decorative dots**; `·` rationed to max 1 per line.
- **No fake browser-chrome screenshots.** Real screenshots or clean vector mocks only
  (`MessageScene` is a crisp mock; never traffic-light dots + fake URL bar).
- **Off-black / off-white**, never pure `#000` / `#fff` (`--ink #0a0a0a`, `--paper #f7f6f3`).
- **Type:** Geist (display + body) + Geist Mono (labels). NOT Inter, NOT Bricolage.
- **Reduced motion** honored in JS (`useReducedMotion` in components + MotionConfig).
- The word **"actually"** was removed everywhere by request; keep it out.

## Theme rhythm
Dark slides are deliberate act-breaks: **title, the 3 part-dividers (chapter 1/2/3),
and the close.** Everything else is light. Section labels in the header:
`Open` / `The job` / `Offers` / `Staying in the job` / `Close`.

## Current slide order (13)
1 Title · 2 Who we are · **Part 1 The job:** 3 Why they're paying you (div) ·
4 Go past the minimum · 5 They expect the Avengers ·
**Part 2 Offers:** 6 Focus your fire (div, previews offers + negotiation) ·
7 Know what you're signing up for (role, incl. stay flexible) ·
8 Every dollar raises the bar (negotiation) · 9 What the market pays (salary table) ·
**Part 3 Staying in:** 10 The 90-day reality (div) · 11 Job security is staying ahead ·
12 Make it your wow factor (capstone) · 13 Now go survive the job (close).

## Assets (`public/assets/`, served at `/assets/*`)
- `logo-primary.png` — transparent horizontal lockup (mark + wordmark). **Default** for
  `BrandLogo`; rendered white on dark via `filter: invert(1)`.
- `logo-stacked.png` — transparent stacked variant (backup).
- `team.jpg` (16:9), `stage.jpg` (16:9) — photos auto-treated monochrome
  (`grayscale + contrast`), shown **uncropped** (`object-fit: contain`, frame = image ratio).
- Logos were de-backgrounded with **PIL** (luminance→alpha) so edges anti-alias and
  invert cleanly. Source logos were black-on-white JPEGs from the Photos library.

## Conventions when editing
- Copy & order live in `slides.jsx`; timing in `anim.js`; look in `index.css` `:root`.
- After any change: `pnpm build` (must pass) → check no em-dashes → commit → `git push`.
- Commit trailer: `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- Ignored: `node_modules/`, `dist/`, `.agents/` (vendored skill), `skills-lock.json`.

## New deck in this folder
Copy the structure, edit `slides.jsx`. The motion system, chrome, and `index.css`
tokens come along. The reusable house-style guide is the `laschicas-deck` skill
(`.claude/skills/laschicas-deck/SKILL.md`).
