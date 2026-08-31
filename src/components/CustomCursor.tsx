import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePointerFine } from '@/hooks/usePointerFine'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function CustomCursor() {
  const fine = usePointerFine()
  const reduced = useReducedMotion()
  const active = fine && !reduced

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 })
  const [hovering, setHovering] = useState(false)
  const [onLight, setOnLight] = useState(false)

  useEffect(() => {
    if (!active) return

    document.body.classList.add('cursor-none-desktop')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const el = target?.closest?.('a, button, [data-cursor]')
      setHovering(!!el)
      setOnLight(!!target?.closest?.('[data-cursor-theme="light"]'))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      document.body.classList.remove('cursor-none-desktop')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [active, x, y])

  if (!active) return null

  // All three read from the shared tokens so the cursor matches whichever
  // surface it is over, and follows the accent on interactive targets.
  const dotColor = onLight ? 'rgb(var(--light-text))' : 'rgb(var(--dark-text))'
  const ringColor = hovering
    ? 'rgb(var(--accent))'
    : onLight
      ? 'rgb(var(--light-text) / 0.3)'
      : 'rgb(var(--dark-text) / 0.35)'

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[100]"
        style={{ x, y, translateX: '-50%', translateY: '-50%', background: dotColor }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[100]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          borderColor: ringColor,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
      />
    </>
  )
}
