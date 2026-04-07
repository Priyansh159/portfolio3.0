import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const el = mountRef.current
    const w = el.clientWidth
    const h = el.clientHeight

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    // Scene & camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
    camera.position.z = 5

    // ── Main icosahedron (solid dark core) ──
    const geo = new THREE.IcosahedronGeometry(1.4, 1)
    const mat = new THREE.MeshStandardMaterial({
      color: 0x003320,
      transparent: true,
      opacity: 0.85,
      roughness: 0.3,
      metalness: 0.8,
    })
    const mesh = new THREE.Mesh(geo, mat)
    scene.add(mesh)

    // ── Wireframe overlay ──
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00ff87,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    })
    const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.43, 1), wireMat)
    scene.add(wire)

    // ── Inner glow sphere ──
    const glowGeo = new THREE.SphereGeometry(1.0, 32, 32)
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x00ff87,
      transparent: true,
      opacity: 0.04,
    })
    const glow = new THREE.Mesh(glowGeo, glowMat)
    scene.add(glow)

    // ── Outer halo ring (small, stays within bounds) ──
    const ringGeo = new THREE.TorusGeometry(1.9, 0.008, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00ff87,
      transparent: true,
      opacity: 0.15,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 3
    scene.add(ring)

    // ── Second ring at different angle ──
    const ring2Geo = new THREE.TorusGeometry(2.1, 0.005, 16, 100)
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x00ff87,
      transparent: true,
      opacity: 0.08,
    })
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.x = -Math.PI / 4
    ring2.rotation.y = Math.PI / 6
    scene.add(ring2)

    // ── Floating vertices (orbit dots around icosahedron) ──
    const vertexCount = 12
    const vertexDots: THREE.Mesh[] = []
    const vertexData: { angle: number; speed: number; radius: number; tiltX: number; tiltY: number }[] = []
    for (let i = 0; i < vertexCount; i++) {
      const dotGeo = new THREE.SphereGeometry(0.025, 8, 8)
      const dotMat = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0x00ccff : 0x00ff87,
        transparent: true,
        opacity: 0.7,
      })
      const dot = new THREE.Mesh(dotGeo, dotMat)
      scene.add(dot)
      vertexDots.push(dot)
      vertexData.push({
        angle: (Math.PI * 2 * i) / vertexCount + Math.random() * 0.5,
        speed: 0.005 + Math.random() * 0.008,
        radius: 1.7 + Math.random() * 0.5,
        tiltX: (Math.random() - 0.5) * Math.PI,
        tiltY: (Math.random() - 0.5) * Math.PI,
      })
    }

    // ── Particles (space dust) ──
    const particlesGeo = new THREE.BufferGeometry()
    const pCount = 500
    const positions = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 14
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particlesMat = new THREE.PointsMaterial({
      color: 0x00ff87,
      size: 0.025,
      transparent: true,
      opacity: 0.45,
    })
    const particles = new THREE.Points(particlesGeo, particlesMat)
    scene.add(particles)

    // ── Orbiting satellite spheres ──
    const satellites: THREE.Mesh[] = []
    const satGlows: THREE.Mesh[] = []
    const satData: { angle: number; speed: number; radius: number; tiltX: number; tiltZ: number }[] = []
    const satConfigs = [
      { color: 0x00ff87, size: 0.06, radius: 2.0, speed: 0.012, tiltX: 0.3, tiltZ: 0.1 },
      { color: 0x00ccff, size: 0.05, radius: 2.3, speed: -0.009, tiltX: -0.5, tiltZ: 0.4 },
      { color: 0x00ff87, size: 0.045, radius: 2.6, speed: 0.007, tiltX: 0.8, tiltZ: -0.3 },
      { color: 0x00ccff, size: 0.04, radius: 1.85, speed: -0.015, tiltX: -0.2, tiltZ: 0.7 },
      { color: 0x00ff87, size: 0.035, radius: 2.45, speed: 0.01, tiltX: 0.6, tiltZ: -0.5 },
    ]
    satConfigs.forEach((cfg, i) => {
      // Satellite sphere
      const satGeo = new THREE.SphereGeometry(cfg.size, 12, 12)
      const satMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.9,
      })
      const sat = new THREE.Mesh(satGeo, satMat)
      scene.add(sat)
      satellites.push(sat)

      // Glow around satellite
      const glowGeoSat = new THREE.SphereGeometry(cfg.size * 3, 8, 8)
      const glowMatSat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.12,
      })
      const glowSat = new THREE.Mesh(glowGeoSat, glowMatSat)
      scene.add(glowSat)
      satGlows.push(glowSat)

      satData.push({
        angle: (Math.PI * 2 * i) / satConfigs.length,
        speed: cfg.speed,
        radius: cfg.radius,
        tiltX: cfg.tiltX,
        tiltZ: cfg.tiltZ,
      })
    })

    // ── Lights ──
    scene.add(new THREE.AmbientLight(0x00ff87, 0.4))
    const pointLight = new THREE.PointLight(0x00ff87, 2.5, 12)
    pointLight.position.set(3, 3, 3)
    scene.add(pointLight)
    const blueLight = new THREE.PointLight(0x0040ff, 1.2, 10)
    blueLight.position.set(-3, -2, 2)
    scene.add(blueLight)
    const rimLight = new THREE.PointLight(0x00ffaa, 0.6, 8)
    rimLight.position.set(0, -3, -1)
    scene.add(rimLight)

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    // Touch support
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 0.5
        mouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 0.5
      }
    }
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    // Animation loop
    let frameId: number
    let time = 0
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      time += 0.01

      // Core rotation
      mesh.rotation.x += 0.003
      mesh.rotation.y += 0.005
      wire.rotation.x += 0.003
      wire.rotation.y += 0.005

      // Inner glow pulse
      glow.scale.setScalar(1 + Math.sin(time * 0.8) * 0.1)
      glowMat.opacity = 0.03 + Math.sin(time * 0.5) * 0.02

      // Rings rotate
      ring.rotation.z += 0.002
      ring2.rotation.z -= 0.0015

      // Orbiting vertex dots
      vertexDots.forEach((dot, i) => {
        const d = vertexData[i]
        d.angle += d.speed
        const x = Math.cos(d.angle) * d.radius * Math.cos(d.tiltX)
        const y = Math.sin(d.angle) * d.radius * Math.cos(d.tiltY) * 0.6
        const z = Math.sin(d.angle) * d.radius * Math.sin(d.tiltX) * 0.5
        dot.position.set(x, y, z)
        // Pulse opacity
        const dotMat = dot.material as THREE.MeshBasicMaterial
        dotMat.opacity = 0.4 + Math.sin(time * 2 + i) * 0.3
      })

      // Particles drift
      particles.rotation.y += 0.0008
      particles.rotation.x += 0.0002

      // Orbiting satellites
      satellites.forEach((sat, i) => {
        const d = satData[i]
        d.angle += d.speed
        const x = Math.cos(d.angle) * d.radius
        const y = Math.sin(d.angle) * Math.sin(d.tiltX) * d.radius * 0.4
        const z = Math.sin(d.angle) * Math.cos(d.tiltZ) * d.radius * 0.5
        sat.position.set(x, y, z)
        satGlows[i].position.set(x, y, z)
        // Pulse the glow
        const gMat = satGlows[i].material as THREE.MeshBasicMaterial
        gMat.opacity = 0.08 + Math.sin(time * 3 + i) * 0.04
      })

      // Camera follows mouse
      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y += (-mouseY - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const onResize = () => {
      if (!el) return
      const nw = el.clientWidth
      const nh = el.clientHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      el.innerHTML = ''
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" />
}
