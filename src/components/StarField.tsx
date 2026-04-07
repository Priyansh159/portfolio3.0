import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrameId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }
    resize()

    // Generate stars
    const starCount = 350
    const stars: { x: number; y: number; size: number; opacity: number; speed: number; twinkleSpeed: number; twinkleOffset: number }[] = []
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.15 + 0.02,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      })
    }

    // Shooting stars
    const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; angle: number; life: number; maxLife: number }[] = []
    let shootingStarTimer = 0

    let time = 0
    const animate = () => {
      animFrameId = requestAnimationFrame(animate)
      time += 1

      // Check if page height changed
      const pageHeight = document.documentElement.scrollHeight
      if (canvas.height !== pageHeight || canvas.width !== window.innerWidth) {
        canvas.width = window.innerWidth
        canvas.height = pageHeight
        // Re-distribute stars
        stars.forEach((star) => {
          star.x = Math.random() * canvas.width
          star.y = Math.random() * canvas.height
        })
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars with twinkling
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset)
        const currentOpacity = star.opacity + twinkle * 0.2
        const currentSize = star.size + twinkle * 0.3

        ctx.beginPath()
        ctx.arc(star.x, star.y, Math.max(0.1, currentSize), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, currentOpacity))})`
        ctx.fill()

        // Add glow to brighter stars
        if (star.size > 1.2) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, currentSize * 3, 0, Math.PI * 2)
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, currentSize * 3)
          gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.15})`)
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          ctx.fillStyle = gradient
          ctx.fill()
        }
      })

      // Occasional shooting stars
      shootingStarTimer++
      if (shootingStarTimer > 300 + Math.random() * 500) {
        shootingStarTimer = 0
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.4,
          length: 80 + Math.random() * 120,
          speed: 4 + Math.random() * 4,
          opacity: 0.7 + Math.random() * 0.3,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          life: 0,
          maxLife: 40 + Math.random() * 30,
        })
      }

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i]
        ss.life++
        ss.x += Math.cos(ss.angle) * ss.speed
        ss.y += Math.sin(ss.angle) * ss.speed

        const lifeRatio = 1 - ss.life / ss.maxLife
        const tailX = ss.x - Math.cos(ss.angle) * ss.length * lifeRatio
        const tailY = ss.y - Math.sin(ss.angle) * ss.length * lifeRatio

        const gradient = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y)
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
        gradient.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity * lifeRatio})`)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(ss.x, ss.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Glow head
        ctx.beginPath()
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${ss.opacity * lifeRatio})`
        ctx.fill()

        if (ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1)
        }
      }
    }
    animate()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
