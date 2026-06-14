import { useState, useEffect } from 'react'

export default function CounterStat({ value, suffix = '', label, colorClass = '', isLive = false }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = count
    const end = parseInt(value, 10)
    if (isNaN(end) || start === end) return

    // Animate from current to new value
    const duration = 1200
    const startTime = performance.now()

    const update = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing out quadratic
      const eased = progress * (2 - progress)
      
      const currentVal = Math.round(start + eased * (end - start))
      setCount(currentVal)

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(update)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <div className={`hero__stat ${colorClass}`}>
      {isLive && (
        <div className="hero__stat-live-indicator" title="Live updating from Devpost">
          <span className="hero__stat-live-dot widget-dot--pulse" />
          <span>Live</span>
        </div>
      )}
      <div className="hero__stat-value">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="hero__stat-label">{label}</div>
    </div>
  )
}
