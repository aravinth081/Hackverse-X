import { useEffect, useRef } from 'react'

export function useParticles() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: null, y: null })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width, height
    const fov = 450
    const maxDepth = 1000

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      ctx.scale(dpr, dpr)
      width = rect.width
      height = rect.height
    }

    function createParticles() {
      // 3D Starfield particles
      const count = Math.min(100, Math.floor((width * height) / 9500))
      particlesRef.current = Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * width * 2.2,
        y: (Math.random() - 0.5) * height * 2.2,
        z: Math.random() * maxDepth,
        radius: Math.random() * 1.2 + 0.5,
        opacity: Math.random() * 0.4 + 0.3,
        colorType: Math.random() > 0.45 ? 'cyan' : 'blue',
      }))
    }



    function animate(time) {
      const particles = particlesRef.current
      const mouse = mouseRef.current
      const isLight = document.documentElement.getAttribute('data-theme') === 'light'

      ctx.clearRect(0, 0, width, height)

      // ─── 1. DRAW BACKGROUND STARFIELD CONSTELLATIONS ───
      let starAngleY = 0.0004
      let starAngleX = 0.0002

      if (mouse.x !== null) {
        starAngleY = ((mouse.x - width / 2) / (width / 2)) * 0.002
        starAngleX = -((mouse.y - height / 2) / (height / 2)) * 0.0015
      }

      const cosSY = Math.cos(starAngleY)
      const sinSY = Math.sin(starAngleY)
      const cosSX = Math.cos(starAngleX)
      const sinSX = Math.sin(starAngleX)

      const projectedStars = []
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const x1 = p.x * cosSY - p.z * sinSY
        const z1 = p.z * cosSY + p.x * sinSY
        const y2 = p.y * cosSX - z1 * sinSX
        const z2 = z1 * cosSX + p.y * sinSX

        p.x = x1
        p.y = y2
        p.z = z2

        if (p.z <= -fov) p.z += maxDepth
        if (p.z >= maxDepth) p.z -= maxDepth

        const scale = fov / (fov + p.z)
        const projX = p.x * scale + width / 2
        const projY = p.y * scale + height / 2

        if (projX >= -20 && projX <= width + 20 && projY >= -20 && projY <= height + 20) {
          projectedStars.push({
            x: projX,
            y: projY,
            z: p.z,
            radius: p.radius * scale,
            opacity: p.opacity * (1 - p.z / maxDepth),
            colorType: p.colorType,
          })
        }
      }

      // Draw constellation lines
      for (let i = 0; i < projectedStars.length; i++) {
        const p1 = projectedStars[i]
        for (let j = i + 1; j < projectedStars.length; j++) {
          const p2 = projectedStars[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist2D = Math.sqrt(dx * dx + dy * dy)
          const dist3D = Math.abs(p1.z - p2.z)

          if (dist2D < 110 && dist3D < 110) {
            const opacity = (1 - dist2D / 110) * (1 - dist3D / 110) * 0.16
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = isLight
              ? `rgba(37, 99, 235, ${opacity * 0.25})`
              : p1.colorType === 'cyan'
                ? `rgba(6, 182, 212, ${opacity * 0.6})`
                : `rgba(99, 102, 241, ${opacity * 0.5})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw star particles
      for (let i = 0; i < projectedStars.length; i++) {
        const p = projectedStars[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = isLight
          ? `rgba(37, 99, 235, ${p.opacity * 0.4})`
          : p.colorType === 'cyan'
            ? `rgba(6, 182, 212, ${p.opacity})`
            : `rgba(99, 102, 241, ${p.opacity})`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    function handleMouseLeave() {
      mouseRef.current.x = null
      mouseRef.current.y = null
    }

    function handleResize() {
      resize()
      createParticles()
    }

    resize()
    createParticles()
    // Start animation loop
    animationRef.current = requestAnimationFrame(animate)

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return canvasRef
}
