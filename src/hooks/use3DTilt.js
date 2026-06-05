import { useEffect, useRef } from 'react'

export function use3DTilt(options = {}) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const maxRotate = options.maxRotate || 12
    const scale = options.scale || 1.04

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const xc = rect.width / 2
      const yc = rect.height / 2
      
      const dx = x - xc
      const dy = y - yc
      
      const rx = -(dy / yc) * maxRotate
      const ry = (dx / xc) * maxRotate

      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${scale}, ${scale}, ${scale})`
    }

    const handleMouseLeave = () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [options.maxRotate, options.scale])

  return cardRef
}
