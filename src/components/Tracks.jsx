import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { use3DTilt } from '../hooks/use3DTilt'

const tracks = [
  {
    id: 'track-ai',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    ),
    title: 'AI & Automation',
    desc: <>Build intelligent systems that automate, predict, and transform industries with cutting-edge <span className="highlight-cyan">AI and ML</span>.</>,
    themeClass: 'card--cyan'
  },
  {
    id: 'track-web3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        <path d="M12 22V12M2 7v10M22 7v10" />
      </svg>
    ),
    title: 'Web3 & Blockchain',
    desc: <>Create <span className="highlight-purple">decentralized applications</span>, smart contracts, and blockchain solutions for the next internet era.</>,
    themeClass: 'card--purple'
  },
  {
    id: 'track-cyber',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    ),
    title: 'Cybersecurity & Privacy',
    desc: <>Develop tools and solutions to <span className="highlight-emerald">protect digital assets</span>, ensure privacy, and secure the digital frontier.</>,
    themeClass: 'card--emerald'
  },
  {
    id: 'track-llm',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="8" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'LLM with MCP',
    desc: <>Harness large language models with <span className="highlight-blue">model context protocol</span> to build next-generation AI applications.</>,
    themeClass: 'card--blue'
  },
]

function TrackCard({ track }) {
  return (
    <div className={`track-card ${track.themeClass}`} id={track.id}>
      <div className="track-card__icon">{track.icon}</div>
      <h3 className="track-card__title">{track.title}</h3>
      <p className="track-card__desc">{track.desc}</p>
    </div>
  )
}

export default function Tracks() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="section tracks" id="tracks">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">Tracks</span>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Innovation Track</span>
          </h2>
          <p className="section-subtitle">
            Four cutting-edge tracks designed to challenge and inspire the next wave of technological breakthroughs.
          </p>
        </div>

        <div className="grid grid--4 stagger-children" ref={gridRef} id="tracks-grid">
          {tracks.map(track => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  )
}
