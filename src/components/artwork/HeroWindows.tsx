import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import BrowserFrame from './BrowserFrame'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function HeroWindows() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 })
  const px = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 })
  const py = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 })

  // Hooks must run unconditionally — previously these useTransform calls
  // lived inside `reduced ? ... : ...` ternaries in the JSX below, so when
  // `reduced` flipped to true the hook count changed and React threw,
  // blanking the whole page for reduced-motion users.
  const offsetX1 = useTransform(px, (v) => v - 18)
  const offsetY1 = useTransform(py, (v) => v + 40)
  const offsetX2 = useTransform(px, (v) => v + 24)
  const offsetY2 = useTransform(py, (v) => v - 16)

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full aspect-[6/5]"
      style={{ perspective: 1000 }}
    >
      <motion.div style={reduced ? undefined : { rotateX: rx, rotateY: ry }} className="relative w-full h-full">
        <motion.div
          style={reduced ? { x: -18, y: 40 } : { x: offsetX1, y: offsetY1 }}
          className="absolute left-0 top-6 w-[64%] aspect-[4/3] -rotate-6"
        >
          <BrowserFrame className="w-full h-full shadow-2xl shadow-black/50">
            <img src="/projects/smriti.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover object-top rounded-md" />
          </BrowserFrame>
        </motion.div>

        <motion.div
          style={reduced ? { x: 24, y: -16 } : { x: offsetX2, y: offsetY2 }}
          className="absolute right-0 top-0 w-[58%] aspect-[4/3] rotate-3"
        >
          <BrowserFrame className="w-full h-full shadow-2xl shadow-black/50">
            <img src="/projects/tournament.png" alt="" aria-hidden="true" className="w-full h-full object-cover object-top rounded-md" />
          </BrowserFrame>
        </motion.div>

        <motion.div
          style={reduced ? undefined : { x: px, y: py }}
          className="absolute left-[18%] bottom-0 w-[62%] aspect-[4/3] rotate-1"
        >
          <BrowserFrame className="w-full h-full shadow-2xl shadow-black/60">
            <img src="/projects/qlothe.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover object-top rounded-md" />
          </BrowserFrame>
        </motion.div>
      </motion.div>
    </div>
  )
}
