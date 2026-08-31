import Lenis from 'lenis'

let instance: Lenis | null = null

export function setLenis(lenis: Lenis | null) {
  instance = lenis
}

// Lenis honours each target's CSS scroll-margin-top, so the existing
// scroll-mt-* utilities on the sections already position anchor jumps
// below the fixed navbar — no extra offset needed here.
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (instance) {
    instance.scrollTo(el)
  } else {
    // Reduced motion, or Lenis not running — jump natively.
    el.scrollIntoView()
  }
}
