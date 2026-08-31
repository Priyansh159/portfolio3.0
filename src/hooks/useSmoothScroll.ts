import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenis } from '@/lib/smoothScroll'
import { useReducedMotion } from '@/hooks/useReducedMotion'

// Lenis drives the *real* window scroll position (it eases wheel input and
// calls scrollTo), so position:fixed layers, native scrollbar, keyboard,
// and touch all keep working. That matters here: the giant-name footer
// reveal is pure layout, and stays correct because actual scrollY moves.
export function useSmoothScroll() {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({
      // Slightly weighted, still responsive — not floaty.
      lerp: 0.11,
      wheelMultiplier: 1,
      // Leave touch alone: native mobile scrolling already feels right.
      syncTouch: false,
    })
    setLenis(lenis)

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      setLenis(null)
      lenis.destroy()
    }
  }, [reduced])
}
