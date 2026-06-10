# Assets

Drop real image files here and the deck picks them up by URL (Vite serves
everything in `public/` at the site root, so a file at
`public/assets/logo.png` is reachable as `/assets/logo.png`).

## Expected files (swap-ready)

| File | Used by | Notes |
| --- | --- | --- |
| `logo.svg` or `logo-white.png` | title slide + running header | laschicas.ai mark, light version for the dark slides |
| `team.jpg` | slide 02 (Who we are) | Claudia, Nani & Vanes. Portrait, roughly 4:5 |
| `stage.jpg` | slide 13 (Capstone) | Capstone demo on stage. Landscape, roughly 4:3 |
| `slack.png` | slide 05 (CFO scenario) | optional: a real grayscale Slack screenshot |

Images are auto-treated to monochrome in CSS (`grayscale` + contrast), so
color originals are fine.

Once the files are here, tell me the names and I'll wire them in (one-line
swaps in `src/components.jsx` / `src/slides.jsx`), replacing the picsum
placeholders and the CSS logo mark.
