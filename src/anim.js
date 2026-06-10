/* ─────────────────────────────────────────────────────────
 * MOTION STORYBOARD — global timing language
 *
 * Every slide mounts fresh (AnimatePresence), so each element's
 * `animate` runs on entrance. Indices drive a stagger so copy
 * arrives like a sentence being spoken, not dumped.
 *
 *    0ms   slide crossfades in (blur 6 → 0)
 *  140ms   first line lifts up + unblurs
 *   +85ms  each subsequent line (by index i)
 *  550ms   signature highlight wipes across the keyword
 *  300ms   hairline rule draws left → right
 * ───────────────────────────────────────────────────────── */

export const EASE = [0.2, 0.7, 0.2, 1]
export const EASE_IO = [0.4, 0, 0.2, 1]

/* per-element entrance — spring lift + de-blur */
export const ITEM = {
  y: 26,
  blur: 8,
  base: 0.14, // s before the first item moves
  step: 0.085, // s between staggered items
  spring: { type: 'spring', stiffness: 320, damping: 30, mass: 0.9 },
}

/* whole-slide crossfade */
export const SLIDE = {
  enter: { duration: 0.5, ease: EASE },
  exit: { duration: 0.42, ease: EASE_IO },
  exitScale: 1.012,
  exitBlur: 7,
}

/* signature highlight wipe */
export const HLW = { delay: 0.55, dur: 0.5, ease: [0.76, 0, 0.24, 1] }

/* hairline rule draw */
export const RULE = { delay: 0.3, dur: 0.75, ease: EASE }

/* data-mountain columns rising */
export const MTN = {
  base: 0.35, // s before first column rises
  step: 0.026, // s between columns
  spring: { type: 'spring', stiffness: 200, damping: 24 },
}
