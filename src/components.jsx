import { motion, useReducedMotion } from 'framer-motion'
import { ITEM, HLW, RULE, MTN } from './anim.js'

/* ============================================================
   PRIMITIVES
   ============================================================ */

/* Item — atomic entrance unit. Pass `i` to stagger.
   Honors prefers-reduced-motion (renders static). */
export function Item({ i = 0, as = 'div', className, style, children, ...rest }) {
  const reduce = useReducedMotion()
  const M = motion[as] || motion.div
  if (reduce) {
    const Tag = as
    return <Tag className={className} style={style} {...rest}>{children}</Tag>
  }
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y: ITEM.y, filter: `blur(${ITEM.blur}px)` }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ ...ITEM.spring, delay: ITEM.base + i * ITEM.step }}
      {...rest}
    >
      {children}
    </M>
  )
}

/* HL — signature monochrome highlight wipe. A bar sweeps across the
   keyword and the letters flip paper-on-ink. Communicates emphasis. */
export function HL({ children, delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <span className="hl">
      <span className="hl-base">{children}</span>
      <motion.span
        className="hl-fill"
        initial={{ width: reduce ? '100%' : '0%' }}
        animate={{ width: '100%' }}
        transition={reduce ? { duration: 0 } : { delay: HLW.delay + delay, duration: HLW.dur, ease: HLW.ease }}
      >
        <span className="hl-inner">{children}</span>
      </motion.span>
    </span>
  )
}

/* Rule — hairline that draws in */
export function Rule({ delay = 0, style }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="rule"
      style={style}
      initial={{ scaleX: reduce ? 1 : 0 }}
      animate={{ scaleX: 1 }}
      transition={reduce ? { duration: 0 } : { delay: RULE.delay + delay, duration: RULE.dur, ease: RULE.ease }}
    />
  )
}

/* Logo — text wordmark (used in the running header chrome). */
export function Logo({ size = 18, type = true, mark = true, gap = 10 }) {
  return (
    <span className="logo" style={{ gap, fontSize: size * 0.92 }}>
      {mark && <span className="mark" style={{ width: size, height: size }} />}
      {type && <span>laschicas.ai</span>}
    </span>
  )
}

/* BrandLogo — the real laschicas.ai mark (transparent PNG).
   `white` inverts the black artwork to render on dark slides. */
export function BrandLogo({ height = 'clamp(64px, 8vw, 96px)', white = false }) {
  return (
    <img
      className="brand-logo"
      src="/assets/logo-stacked.png"
      alt="laschicas.ai"
      style={{ height, filter: white ? 'invert(1)' : 'none' }}
    />
  )
}

/* Photo — real grayscale photography in a clean frame.
   Uses picsum seeds as swap-ready placeholders; replace the src with
   the real team / stage shot. Caption sits BELOW the frame, never on it. */
export function Photo({ src, seed, w, h, ratio = '4 / 5', alt, caption, i = 1, maxWidth }) {
  const url = src || `https://picsum.photos/seed/${seed}/${w}/${h}?grayscale`
  return (
    <Item i={i} className="figure">
      <div className="photo" style={{ aspectRatio: ratio, maxWidth }}>
        <img src={url} alt={alt} loading="eager" />
      </div>
      {caption && <div className="caption">{caption}</div>}
    </Item>
  )
}

/* ============================================================
   FIGURE — DATA MOUNTAIN (title hero, motivated by the data theme)
   ============================================================ */
const MTN_HEIGHTS = [2, 3, 3, 4, 5, 4, 6, 7, 6, 8, 9, 8, 10, 11, 10, 12, 11, 9, 8, 6, 7, 5, 6, 4, 3, 4, 2, 2]
function shade(t) {
  if (t > 0.8) return '#f7f6f3'
  if (t > 0.58) return '#b6b6b3'
  if (t > 0.34) return '#797977'
  return '#3a3a39'
}
export function DataMountain() {
  const reduce = useReducedMotion()
  return (
    <div className="mountain-wrap">
      <div className="mountain">
        {MTN_HEIGHTS.map((h, i) => (
          <motion.div
            key={i}
            className="mcol"
            initial={{ scaleY: reduce ? 1 : 0 }}
            animate={{ scaleY: 1 }}
            transition={reduce ? { duration: 0 } : { ...MTN.spring, delay: MTN.base + i * MTN.step }}
          >
            {Array.from({ length: h }).map((_, p) => (
              <div key={p} className="mpx" style={{ background: shade(p / h) }} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   FIGURE — BOSS MESSAGE (clean monochrome mock of the real screenshot)
   Vector-crisp at any size. The second message lands a beat later.
   ============================================================ */
export function MessageScene() {
  const reduce = useReducedMotion()
  const enter = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { ...ITEM.spring, delay } }
  return (
    <Item i={1} className="note">
      <div className="channel"># team-chat</div>
      <div className="chat">
        <div className="msg">
          <span className="av round">B</span>
          <div>
            <div className="nm">The Boss <time>9:14</time></div>
            <motion.div className="bd lead" {...enter(0.45)}>
              Team, did you all see Jenson announce NemoClaw yesterday? I was excited
              to see a complete, enterprise-level approach to OpenClaw. I'm interested
              in your take on it.
            </motion.div>
            <motion.div className="bd lead" style={{ marginTop: 12 }} {...enter(1.15)}>
              Also, how are all of you? I should have started with that{' '}
              <span className="emoji">🙂</span>
            </motion.div>
          </div>
        </div>
      </div>
    </Item>
  )
}

/* ============================================================
   FIGURE — SALARY TABLE (hyphenated ranges, rationed separators)
   ============================================================ */
const SALARY = {
  cols: ['Role', 'NYC (mid)', 'SF (mid)', 'High'],
  rows: [
    ['Product / Full-Stack', '$225-230k', '$230-250k', '$275k'],
    ['AI Engineering', '$230-250k', '$250-285k', '$300k'],
    ['Backend', '$230-270k', '$250-292k', '$355k'],
    ['Data Engineering', '$225-232k', '$220-235k', '$249k'],
    ['Senior, all roles', '$230-250k', '$230-275k', '$355k'],
  ],
}
export function SalaryTable() {
  const reduce = useReducedMotion()
  return (
    <Item i={2} className="salary">
      <div className="label">
        <span>Base salary, open roles 2026. NYC and SF startups.</span>
        <span className="n">n ≈ 380, pre-seed to Series C</span>
      </div>
      <div className="tbl">
        <div className="trow htr">
          <div className="c role">{SALARY.cols[0]}</div>
          <div className="c num">{SALARY.cols[1]}</div>
          <div className="c num sf">{SALARY.cols[2]}</div>
          <div className="c num">{SALARY.cols[3]}</div>
        </div>
        {SALARY.rows.map((r, i) => (
          <motion.div
            key={r[0]}
            className="trow"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { ...ITEM.spring, delay: 0.55 + i * 0.08 }}
          >
            <div className="c role">{r[0]}</div>
            <div className="c num">{r[1]}</div>
            <div className="c num sf">{r[2]}</div>
            <div className="c num">{r[3]}</div>
          </motion.div>
        ))}
      </div>
    </Item>
  )
}
