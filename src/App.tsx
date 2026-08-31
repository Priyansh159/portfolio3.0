import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NameReveal from '@/components/NameReveal'
import ScrollProgress from '@/components/ScrollProgress'
import CustomCursor from '@/components/CustomCursor'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Hero from '@/sections/Hero'
import Work from '@/sections/Work'
import TechStack from '@/components/TechStack'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Contact from '@/sections/Contact'
import { TECH_GROUPS } from '@/data'

export default function App() {
  const nameRef = useRef<HTMLDivElement>(null)
  const [revealHeight, setRevealHeight] = useState(0)

  useSmoothScroll()

  // NameReveal is fixed, so it adds no document height of its own. Giving
  // <main> a matching bottom margin creates exactly enough extra scroll
  // room for main to travel up and off it. Margins are transparent, so the
  // name shows through there — pure layering, no opacity or animation.
  useEffect(() => {
    const el = nameRef.current
    if (!el) return
    const update = () => setRevealHeight(el.offsetHeight)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-bg text-ink font-sans">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10 bg-bg" style={{ marginBottom: revealHeight }}>
        <Hero />
        <Work />
        <TechStack groups={TECH_GROUPS} />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </main>
      <NameReveal ref={nameRef} />
    </div>
  )
}
