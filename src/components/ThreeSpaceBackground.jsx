import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeSpaceBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // ─── 1. SETUP SCENE, CAMERA, RENDERER ───
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000)
    camera.position.z = 400

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    // ─── 2. DETECT THEME ───
    let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark'
    
    const getColors = (theme) => {
      const isLight = theme === 'light'
      return {
        earthWire: isLight ? 0x2563eb : 0x3b82f6,
        earthPoints: isLight ? 0x0f172a : 0x06b6d4,
        orbitRing: isLight ? 0x93c5fd : 0x2563eb,
        satellite: isLight ? 0x2563eb : 0x06b6d4,
        stars: isLight ? 0x2563eb : 0xffffff,
        earthPointsOpacity: isLight ? 0.35 : 0.8,
        earthWireOpacity: isLight ? 0.08 : 0.16,
        orbitOpacity: isLight ? 0.15 : 0.25,
        starOpacity: isLight ? 0.25 : 0.65
      }
    }

    let colors = getColors(currentTheme)

    // ─── 3. CREATE STARFIELD ───
    const starsCount = 1200
    const starsGeometry = new THREE.BufferGeometry()
    const starsPositions = new Float32Array(starsCount * 3)

    for (let i = 0; i < starsCount * 3; i += 3) {
      // Distribute stars in a sphere of radius 800
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 500 + Math.random() * 400
      
      starsPositions[i] = r * Math.sin(phi) * Math.cos(theta)
      starsPositions[i + 1] = r * Math.sin(phi) * Math.sin(theta)
      starsPositions[i + 2] = r * Math.cos(phi)
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3))
    const starsMaterial = new THREE.PointsMaterial({
      color: colors.stars,
      size: 1.5,
      transparent: true,
      opacity: colors.starOpacity,
      sizeAttenuation: true
    })
    const starField = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(starField)

    // ─── 4. CREATE HOLOGRAPHIC EARTH ───
    const earthGroup = new THREE.Group()
    earthGroup.rotation.z = 0.41 // Simulate axial tilt of 23.4 degrees
    scene.add(earthGroup)

    const earthRadius = 125
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 38, 38)
    
    // Wireframe Mesh
    const earthWireMaterial = new THREE.MeshBasicMaterial({
      color: colors.earthWire,
      wireframe: true,
      transparent: true,
      opacity: colors.earthWireOpacity
    })
    const earthWireframe = new THREE.Mesh(earthGeometry, earthWireMaterial)
    earthGroup.add(earthWireframe)

    // Point Cloud (Nodes)
    const earthPointsMaterial = new THREE.PointsMaterial({
      color: colors.earthPoints,
      size: 2.2,
      transparent: true,
      opacity: colors.earthPointsOpacity
    })
    const earthPoints = new THREE.Points(earthGeometry, earthPointsMaterial)
    earthGroup.add(earthPoints)

    // ─── 5. CREATE ORBITAL RINGS & SATELLITES ───
    const orbitGroup = new THREE.Group()
    scene.add(orbitGroup)

    const createOrbit = (radiusX, radiusY, angleZ) => {
      const points = []
      const segments = 100
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2
        points.push(new THREE.Vector3(Math.cos(theta) * radiusX, 0, Math.sin(theta) * radiusY))
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({
        color: colors.orbitRing,
        transparent: true,
        opacity: colors.orbitOpacity
      })
      const orbitLine = new THREE.LineLoop(geometry, material)
      orbitLine.rotation.z = angleZ
      orbitLine.rotation.x = 0.6 // Tilt the ring in 3D
      return orbitLine
    }

    const orbit1 = createOrbit(220, 200, 0.4)
    const orbit2 = createOrbit(260, 230, -0.5)
    orbitGroup.add(orbit1)
    orbitGroup.add(orbit2)

    // Satellite point meshes
    const satGeometry = new THREE.SphereGeometry(3.5, 8, 8)
    const satMaterial = new THREE.MeshBasicMaterial({ color: colors.satellite })
    
    const sat1 = new THREE.Mesh(satGeometry, satMaterial)
    const sat2 = new THREE.Mesh(satGeometry, satMaterial)
    scene.add(sat1)
    scene.add(sat2)

    // ─── 6. INTERACTIVE MOUSE TRACKING ───
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)
      mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)

    // ─── 7. ANIMATION LOOP ───
    let animationId
    let clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate Earth Group
      earthGroup.rotation.y = elapsedTime * 0.04
      
      // Rotate Stars Field
      starField.rotation.y = elapsedTime * 0.015

      // Move satellites along orbits
      const speed1 = elapsedTime * 0.25
      sat1.position.x = Math.cos(speed1) * 220
      sat1.position.z = Math.sin(speed1) * 200
      sat1.position.y = 0
      sat1.position.applyAxisAngle(new THREE.Vector3(0, 0, 1), 0.4)
      sat1.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), 0.6)

      const speed2 = elapsedTime * 0.18 + Math.PI
      sat2.position.x = Math.cos(speed2) * 260
      sat2.position.z = Math.sin(speed2) * 230
      sat2.position.y = 0
      sat2.position.applyAxisAngle(new THREE.Vector3(0, 0, 1), -0.5)
      sat2.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), 0.6)

      // Smooth mouse drift camera interpolation
      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      camera.position.x = targetX * 120
      camera.position.y = -targetY * 120
      camera.lookAt(scene.position)

      // Check for theme changes dynamically
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark'
      if (activeTheme !== currentTheme) {
        currentTheme = activeTheme
        colors = getColors(currentTheme)
        
        // Update Materials
        starsMaterial.color.setHex(colors.stars)
        starsMaterial.opacity = colors.starOpacity
        
        earthWireMaterial.color.setHex(colors.earthWire)
        earthWireMaterial.opacity = colors.earthWireOpacity
        
        earthPointsMaterial.color.setHex(colors.earthPoints)
        earthPointsMaterial.opacity = colors.earthPointsOpacity
        
        orbit1.material.color.setHex(colors.orbitRing)
        orbit1.material.opacity = colors.orbitOpacity
        orbit2.material.color.setHex(colors.orbitRing)
        orbit2.material.opacity = colors.orbitOpacity
        
        satMaterial.color.setHex(colors.satellite)
      }

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // ─── 8. RESIZE LISTENER ───
    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // ─── 9. CLEANUP ───
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      // Dispose materials & geometries
      starsGeometry.dispose()
      starsMaterial.dispose()
      earthGeometry.dispose()
      earthWireMaterial.dispose()
      earthPointsMaterial.dispose()
      satGeometry.dispose()
      satMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      className="three-space-background" 
      ref={containerRef} 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 0, 
        pointerEvents: 'none', 
        overflow: 'hidden' 
      }} 
    />
  )
}
