import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { SLIDES } from './slides.jsx'
import { Logo } from './components.jsx'
import { SLIDE } from './anim.js'

const pad = (x) => (x < 10 ? '0' : '') + x

export default function Deck() {
  const [idx, setIdx] = useState(0)
  const n = SLIDES.length
  const touchX = useRef(null)

  const go = useCallback((i) => setIdx(Math.max(0, Math.min(n - 1, i))), [n])
  const next = useCallback(() => go(idx + 1), [go, idx])
  const prev = useCallback(() => go(idx - 1), [go, idx])

  /* keyboard */
  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); next() }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev() }
      else if (e.key === 'Home') go(0)
      else if (e.key === 'End') go(n - 1)
      else if (/^[1-9]$/.test(e.key)) go(parseInt(e.key, 10) - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, n])

  /* swipe */
  useEffect(() => {
    const start = (e) => { touchX.current = e.touches[0].clientX }
    const end = (e) => {
      if (touchX.current === null) return
      const dx = e.changedTouches[0].clientX - touchX.current
      if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
      touchX.current = null
    }
    window.addEventListener('touchstart', start, { passive: true })
    window.addEventListener('touchend', end, { passive: true })
    return () => {
      window.removeEventListener('touchstart', start)
      window.removeEventListener('touchend', end)
    }
  }, [next, prev])

  const slide = SLIDES[idx]
  const cls = ['slide', slide.dark ? 'dark' : '', slide.center ? 'center' : ''].filter(Boolean).join(' ')

  return (
    <MotionConfig reducedMotion="user">
    <div className="deck">
      <div className="stage">
        <AnimatePresence initial={false}>
          <motion.section
            key={slide.id}
            className={cls}
            initial={{ opacity: 0, filter: 'blur(7px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)', transition: SLIDE.enter }}
            exit={{
              opacity: 0,
              scale: SLIDE.exitScale,
              filter: `blur(${SLIDE.exitBlur}px)`,
              transition: SLIDE.exit,
            }}
          >
            {slide.chapter && <span className="chapter" aria-hidden>{slide.chapter}</span>}
            <slide.Content />
          </motion.section>
        </AnimatePresence>
      </div>

      {/* fixed chrome — difference-blended so it reads on black or white */}
      <div className="chrome">
        <div className="hdr">
          <Logo size={16} />
          <div className="r">
            <span className="sec">{slide.section}</span>
            <span>{pad(idx + 1)} / {pad(n)}</span>
          </div>
        </div>
        <div className="foot-l">THE REALITY CHECK</div>
        <div className="foot-r">← → navigate</div>
      </div>

      {/* progress */}
      <div className="prog-track">
        <motion.div
          className="prog-fill"
          initial={false}
          animate={{ scaleX: (idx + 1) / n }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        />
      </div>

      {/* click zones */}
      <div className="nav">
        <div className="z prev" onClick={prev} />
        <div className="z next" onClick={next} />
      </div>

      {/* tactile grain */}
      <div className="grain" aria-hidden />
    </div>
    </MotionConfig>
  )
}
