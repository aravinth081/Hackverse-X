import { useScrollAnimation } from '../hooks/useScrollAnimation'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    text: 'Global Networking'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    text: 'Mentorship'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    text: 'Hackathon Updates'
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
    text: 'Community Support'
  },
]

export default function Community() {
  const headerRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()

  return (
    <section className="section community section--alt" id="community">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">Community</span>
          <h2 className="section-title">
            Join the <span className="gradient-text">Movement</span>
          </h2>
          <p className="section-subtitle">
            Connect with thousands of innovators, find teammates, get mentorship, and stay updated.
          </p>
        </div>

        <div className="community__cta-area animate-scale" ref={ctaRef} id="community-cta">
          <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--space-md)' }}>
            Official <span className="highlight-emerald">WhatsApp Community</span>
          </h3>
          <p style={{ color: 'var(--text-secondary)', margin: '0 auto var(--space-2xl)', maxWidth: '500px' }}>
            Get <span className="highlight-cyan">real-time updates</span>, connect with <span className="highlight-blue">mentors</span>, find teammates, and be part of our <span className="highlight-purple">global network</span> of innovators.
          </p>
          <a href="https://chat.whatsapp.com/mock-hackverse-x" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large" id="community-join-btn" style={{ marginBottom: 'var(--space-xl)' }}>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.546 4.095 1.502 5.822L0 24l6.335-1.463C8.066 23.477 9.98 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.82 0-3.547-.47-5.053-1.302l-.36-.214-3.756.868.896-3.626-.236-.374C2.478 15.82 2 13.96 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Join WhatsApp Community
          </a>

          <div className="community__features">
            {features.map((f, i) => (
              <div className="community__feature" key={i}>
                <span className="community__feature-icon">{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
