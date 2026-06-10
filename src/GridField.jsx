import { useRef, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

/* ─────────────────────────────────────────────────────────
 * GRID FIELD — title-slide background
 *
 * Adapted from 21st.dev "Grid Hero" + "Moving Grid" patterns,
 * stripped to pure monochrome. A crisp static grid with white
 * light pulses racing along the lines. Electric, but timeless.
 *
 * Motion is motivated: the pulses read as data/energy moving
 * through a system, echoing the deck's data-mountain motif.
 * Honors prefers-reduced-motion (static grid, no pulses).
 * ───────────────────────────────────────────────────────── */

const CFG = {
  cell: 48,            // px between grid lines
  lineAlpha: 0.06,     // resting grid line opacity
  spawnChance: 0.035,  // probability of a new pulse per frame
  maxPulses: 7,
  speedMin: 2.0,
  speedMax: 4.6,
  trailMin: 70,
  trailMax: 180,
}

export default function GridField() {
  const canvasRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    const pulses = []

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = `rgba(247,246,243,${CFG.lineAlpha})`
      ctx.lineWidth = 1
      for (let x = 0; x <= w; x += CFG.cell) {
        ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, h); ctx.stroke()
      }
      for (let y = 0; y <= h; y += CFG.cell) {
        ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); ctx.stroke()
      }
    }

    const spawn = () => {
      const vertical = Math.random() > 0.5
      const lines = Math.floor((vertical ? w : h) / CFG.cell)
      const at = Math.floor(Math.random() * (lines + 1)) * CFG.cell
      const trail = CFG.trailMin + Math.random() * (CFG.trailMax - CFG.trailMin)
      pulses.push({
        vertical,
        at,                       // fixed coordinate of the line
        pos: -trail,              // head position along the line
        speed: CFG.speedMin + Math.random() * (CFG.speedMax - CFG.speedMin),
        trail,
        bright: 0.6 + Math.random() * 0.4,
      })
    }

    const drawPulse = (p) => {
      // gradient trail from transparent tail to bright head
      let x0, y0, x1, y1
      if (p.vertical) { x0 = p.at; y0 = p.pos - p.trail; x1 = p.at; y1 = p.pos }
      else { x0 = p.pos - p.trail; y0 = p.at; x1 = p.pos; y1 = p.at }
      const g = ctx.createLinearGradient(x0, y0, x1, y1)
      g.addColorStop(0, 'rgba(247,246,243,0)')
      g.addColorStop(1, `rgba(247,246,243,${0.55 * p.bright})`)
      ctx.strokeStyle = g
      ctx.lineWidth = 1.5
      ctx.beginPath(); ctx.moveTo(x0 + 0.5, y0 + 0.5); ctx.lineTo(x1 + 0.5, y1 + 0.5); ctx.stroke()

      // glowing head
      ctx.save()
      ctx.shadowBlur = 14
      ctx.shadowColor = `rgba(247,246,243,${p.bright})`
      ctx.fillStyle = `rgba(247,246,243,${p.bright})`
      ctx.beginPath(); ctx.arc(x1, y1, 1.7, 0, Math.PI * 2); ctx.fill()
      ctx.restore()
    }

    const tick = () => {
      drawGrid()
      if (Math.random() < CFG.spawnChance && pulses.length < CFG.maxPulses) spawn()
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.pos += p.speed
        drawPulse(p)
        if (p.pos - p.trail > (p.vertical ? h : w)) pulses.splice(i, 1)
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    if (reduce) {
      drawGrid()
    } else {
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [reduce])

  return (
    <div className="gridfield" aria-hidden>
      <canvas ref={canvasRef} />
    </div>
  )
}
