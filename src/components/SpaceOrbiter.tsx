import { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface SpaceOrbiterProps {
  className?: string
}

export default function SpaceOrbiter({ className = '' }: SpaceOrbiterProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const el = mountRef.current
    const w = el.clientWidth
    const h = el.clientHeight
    if (w === 0 || h === 0) return

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100)
    camera.position.z = 4

    // Saturn-like planet
    const planetGeo = new THREE.SphereGeometry(0.6, 32, 32)
    const planetMat = new THREE.MeshStandardMaterial({
      color: 0x003322,
      metalness: 0.8,
      roughness: 0.25,
      transparent: true,
      opacity: 0.9,
    })
    const planet = new THREE.Mesh(planetGeo, planetMat)
    scene.add(planet)

    // Planet wireframe
    const planetWire = new THREE.Mesh(
      new THREE.SphereGeometry(0.62, 16, 16),
      new THREE.MeshBasicMaterial({
        color: 0x00ff87,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      })
    )
    scene.add(planetWire)

    // Rings
    const ringGeo = new THREE.TorusGeometry(1.1, 0.02, 8, 80)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00ff87,
      transparent: true,
      opacity: 0.25,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 2.5
    scene.add(ring)

    const ring2Geo = new THREE.TorusGeometry(1.3, 0.008, 8, 80)
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x00ccff,
      transparent: true,
      opacity: 0.12,
    })
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.x = Math.PI / 2.2
    scene.add(ring2)

    // Tiny moons
    const moonCount = 3
    const moons: THREE.Mesh[] = []
    const moonData: { angle: number; speed: number; radius: number; y: number }[] = []
    for (let i = 0; i < moonCount; i++) {
      const moonGeo = new THREE.SphereGeometry(0.04, 8, 8)
      const moonMat = new THREE.MeshBasicMaterial({
        color: i === 0 ? 0x00ff87 : 0x00ccff,
        transparent: true,
        opacity: 0.8,
      })
      const moon = new THREE.Mesh(moonGeo, moonMat)
      scene.add(moon)
      moons.push(moon)
      moonData.push({
        angle: (Math.PI * 2 * i) / moonCount,
        speed: 0.015 + i * 0.005,
        radius: 1.4 + i * 0.3,
        y: (Math.random() - 0.5) * 0.3,
      })
    }

    // Particles
    const pCount = 100
    const pGeo = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount * 3; i++) {
      pPos[i] = (Math.random() - 0.5) * 8
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0x00ff87,
      size: 0.02,
      transparent: true,
      opacity: 0.3,
    })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // Lights
    scene.add(new THREE.AmbientLight(0x00ff87, 0.3))
    const pointLight = new THREE.PointLight(0x00ff87, 2, 8)
    pointLight.position.set(2, 2, 3)
    scene.add(pointLight)
    const blueLight = new THREE.PointLight(0x0066ff, 1, 8)
    blueLight.position.set(-2, -1, 2)
    scene.add(blueLight)

    let frameId: number
    let time = 0
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      time += 0.01

      planet.rotation.y += 0.005
      planetWire.rotation.y += 0.005
      ring.rotation.z += 0.003
      ring2.rotation.z -= 0.002
      particles.rotation.y += 0.0005

      // Float the whole scene
      planet.position.y = Math.sin(time * 0.6) * 0.1
      planetWire.position.y = planet.position.y
      ring.position.y = planet.position.y
      ring2.position.y = planet.position.y

      // Orbiting moons
      moons.forEach((moon, i) => {
        const d = moonData[i]
        d.angle += d.speed
        moon.position.x = Math.cos(d.angle) * d.radius
        moon.position.z = Math.sin(d.angle) * d.radius
        moon.position.y = d.y + Math.sin(time * 0.6) * 0.1
      })

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const nw = el.clientWidth
      const nh = el.clientHeight
      if (nw === 0 || nh === 0) return
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      el.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none ${className}`}
      style={{ minHeight: 200 }}
    />
  )
}
