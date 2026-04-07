import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Contact from '@/sections/Contact'
import StarField from '@/components/StarField'

export default function App() {
  return (
    <div className="space-bg min-h-screen text-white font-head overflow-x-hidden">
      <StarField />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
