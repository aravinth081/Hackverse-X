import { useScrollAnimation } from '../hooks/useScrollAnimation'

const details = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: 'Date',
    value: <span className="highlight-blue">June 10 – 30, 2026</span>,
    themeClass: 'card--blue'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: 'Mode',
    value: <span className="highlight-cyan">Online | Global</span>,
    themeClass: 'card--cyan'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: 'Team Size',
    value: <span className="highlight-purple">1–4 Members</span>,
    themeClass: 'card--purple'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
    label: 'Participants',
    value: <span className="highlight-emerald">Students & Innovators</span>,
    themeClass: 'card--emerald'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    label: 'Sponsor',
    value: <span className="highlight-gold" style={{ fontWeight: 'bold' }}>YouCam API</span>,
    themeClass: 'card--gold'
  },
]

function DetailCard({ item }) {
  return (
    <div className={`detail-card ${item.themeClass}`}>
      <div className="detail-card__icon">{item.icon}</div>
      <div className="detail-card__label">{item.label}</div>
      <div className="detail-card__value">{item.value}</div>
    </div>
  )
}

export default function EventDetails() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="section event-details" id="about">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">Event Details</span>
          <h2 className="section-title">
            Everything You Need <span className="gradient-text">To Know</span>
          </h2>
          <p className="section-subtitle">
            A global online hackathon bringing together the brightest minds in technology
            to build, innovate, and compete.
          </p>
        </div>

        <div className="grid grid--5 stagger-children" ref={gridRef} id="event-details-grid">
          {details.map((d, i) => (
            <DetailCard key={i} item={d} />
          ))}
        </div>
      </div>
    </section>
  )
}
