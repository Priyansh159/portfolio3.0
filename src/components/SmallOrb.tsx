import { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface SmallOrbProps {
  color?: string
  size?: number
}

export default function SmallOrb({ color = '#00ff87', size = 52 }: SmallOrbProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const el = mountRef.current

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(size, size)
    renderer.setPixelRatio(2)
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 2.5

    const c = new THREE.Color(color)
    const geo = new THREE.OctahedronGeometry(0.8, 0)
    const mat = new THREE.MeshStandardMaterial({
      color: c,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.9,
    })
    const mesh = new THREE.Mesh(geo, mat)
    const wireMat = new THREE.MeshBasicMaterial({
      color: c,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    })
    const wire = new THREE.Mesh(new THREE.OctahedronGeometry(0.83, 0), wireMat)
    scene.add(mesh)
    scene.add(wire)

    scene.add(new THREE.AmbientLight(0xffffff, 0.3))
    const pl = new THREE.PointLight(c, 3, 10)
    pl.position.set(2, 2, 2)
    scene.add(pl)

    let frameId: number
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      mesh.rotation.y += 0.02
      mesh.rotation.x += 0.01
      wire.rotation.y += 0.02
      wire.rotation.x += 0.01
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      renderer.dispose()
      el.innerHTML = ''
    }
  }, [color, size])

  return (
    <div
      ref={mountRef}
      style={{ width: size, height: size, display: 'inline-block' }}
    />
  )
}
