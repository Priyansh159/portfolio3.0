import { useEffect, useState } from 'react'
import HeroCanvas from '@/components/HeroCanvas'

const TAGS = ['React', 'TypeScript', 'Node.js', 'MongoDB']

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* 3D Canvas — right side, hidden on very small screens */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[80%] opacity-70 pointer-events-none hidden sm:block">
        <HeroCanvas />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full py-12 sm:py-0">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-green text-xs sm:text-sm tracking-widest mb-4">
            &lt; Hello World /&gt;
          </p>

          <h1
            className="font-extrabold leading-none mb-3"
            style={{ fontSize: 'clamp(36px, 7vw, 90px)' }}
          >
            <span className="text-white">Priyansh</span>
            <br />
            <span className="gradient-text">Rana</span>
          </h1>

          <p className="font-mono text-muted text-sm sm:text-base mb-2">
            SDE-1 @ Sai Computers Limited
          </p>
          <p className="font-mono text-muted/60 text-xs sm:text-sm mb-4">
            ~1 year of professional experience
          </p>

          <p className="text-muted text-sm sm:text-lg leading-relaxed max-w-xl mb-8">
            Full Stack Developer building modern, scalable web applications.
            Passionate about clean code, great UX, and continuous learning.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-3 sm:gap-4 flex-wrap mb-8 sm:mb-10">
            <button
              onClick={() => scrollTo('projects')}
              className="px-5 sm:px-7 py-2.5 sm:py-3 bg-green text-bg font-bold font-mono text-xs sm:text-sm rounded-xl hover:bg-green-dark transition-all duration-200 hover:scale-105 active:scale-95"
            >
              View Projects →
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 sm:px-7 py-2.5 sm:py-3 border border-green/30 text-green font-mono text-xs sm:text-sm rounded-xl hover:border-green hover:bg-green/5 transition-all duration-200"
            >
              Contact Me
            </button>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-green bg-green-dim border border-green/20 px-2.5 sm:px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-muted">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-green/60 to-transparent" />
      </div>
    </section>
  )
}
