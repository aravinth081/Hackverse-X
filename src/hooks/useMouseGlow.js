import { useEffect } from 'react'

export function useMouseGlow() {
  useEffect(() => {
    const glow = document.querySelector('.mouse-glow')
    if (!glow) return
    if ('ontouchstart' in window) {
      glow.style.display = 'none'
      return
    }

    function handleMove(e) {
      requestAnimationFrame(() => {
        glow.style.left = e.clientX + 'px'
        glow.style.top = e.clientY + 'px'
        glow.style.opacity = '1'
      })
    }

    document.addEventListener('mousemove', handleMove)
    return () => document.removeEventListener('mousemove', handleMove)
  }, [])
}
