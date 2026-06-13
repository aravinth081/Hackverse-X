import { useState, useEffect } from 'react'
import CounterStat from './CounterStat'

export default function Hero() {

  // Initialize participants state from localStorage (fallback to 131, current Devpost live number)
  const [participants, setParticipants] = useState(() => {
    const cached = localStorage.getItem('devpost_participants_count')
    if (cached) {
      const parsed = parseInt(cached, 10)
      if (!isNaN(parsed)) return parsed
    }
    return 131
  })

  useEffect(() => {
    const fetchParticipants = async () => {
      const url = 'https://global-tech-innovation-2026.devpost.com/'
      const proxies = [
        `https://corsproxy.io/?${encodeURIComponent(url)}`,
        `https://corsproxy.io/?url=${encodeURIComponent(url)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
      ]

      for (const proxyUrl of proxies) {
        try {
          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 12000) // 12 seconds timeout per proxy

          const res = await fetch(proxyUrl, { signal: controller.signal })
          clearTimeout(timeoutId)

          if (!res.ok) continue

          let html = ''
          if (proxyUrl.includes('allorigins') && !proxyUrl.includes('/raw')) {
            const json = await res.json()
            html = json.contents || ''
          } else {
            html = await res.text()
          }

          if (!html || html.length === 0) continue

          // Match participants count robustly matching Devpost HTML variations
          let count = null
          const match1 = html.match(/<strong[^>]*>(\d+)<\/strong>\s*participants/i)
          if (match1 && match1[1]) {
            count = parseInt(match1[1], 10)
          } else {
            const match2 = html.match(/(\d+)\s*participants/i)
            if (match2 && match2[1]) {
              count = parseInt(match2[1], 10)
            } else {
              const match3 = html.match(/Participants\s*\((\d+)\)/i)
              if (match3 && match3[1]) {
                count = parseInt(match3[1], 10)
              }
            }
          }

          if (count && count > 0) {
            setParticipants(count)
            localStorage.setItem('devpost_participants_count', count.toString())
            break // Successfully fetched and updated count
          }
        } catch (err) {
          console.warn(`Failed to fetch from proxy: ${proxyUrl}`, err)
        }
      }
    }

    // Fetch immediately
    fetchParticipants()

    // Poll every 45 seconds to fetch updated counts live
    const interval = setInterval(fetchParticipants, 45000)

    return () => clearInterval(interval)
  }, [])

  const handleRegisterClick = () => {
    // Increment participants locally on registration click (only once per session)
    const alreadyRegistered = sessionStorage.getItem('devpost_registered_locally')
    if (!alreadyRegistered) {
      setParticipants((prev) => {
        const next = prev + 1
        localStorage.setItem('devpost_participants_count', next.toString())
        return next
      })
      sessionStorage.setItem('devpost_registered_locally', 'true')
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__grid-container">
          <div className="hero__left">
            <div className="hero__badge">
              <span className="badge badge--live">June 10 – 30, 2026 • Online • Global</span>
            </div>

            <h1 className="hero__title">
              <span className="hero__title-main gradient-text">HACKVERSE X</span>
              <span className="hero__title-sub">Global Tech Innovation 2026</span>
            </h1>

            <p className="hero__subtitle">
              Join innovators worldwide to build next-generation solutions in AI, Web3,
              Cybersecurity, and LLM technologies. Your Innovation. Global Impact.
            </p>

            <div className="hero__cta-group">
              <a
                href="https://global-tech-innovation-2026.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--large"
                id="hero-register-btn"
                onClick={handleRegisterClick}
              >
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                Register on Devpost
              </a>
              <a href="#prizes" className="btn btn--purple btn--large" id="hero-prizes-btn">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                View Prizes
              </a>
              <a href="https://chat.whatsapp.com/mock-hackverse-x" target="_blank" rel="noopener noreferrer" className="btn btn--emerald btn--large" id="hero-community-btn">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Join Community
              </a>
            </div>

            <div className="hero__stats">
              <CounterStat value={participants} label="Participants" colorClass="stat--cyan" />
              <CounterStat value={120} suffix="+" label="Countries" colorClass="stat--emerald" />
              <CounterStat value={4} label="Tracks" colorClass="stat--purple" />
              <CounterStat value={3} label="Prizes" colorClass="stat--gold" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
