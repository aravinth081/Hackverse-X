import { useScrollAnimation } from '../hooks/useScrollAnimation'

const companies = [
  {
    name: 'ServiceNow',
    bgColor: '#293E40',
    logo: (
      <svg viewBox="0 0 100 100" style={{ width: '52px', height: '52px' }}>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#81B5A3" strokeWidth="5" />
        <circle cx="50" cy="50" r="26" fill="none" stroke="#81B5A3" strokeWidth="4" />
        <circle cx="50" cy="50" r="14" fill="#81B5A3" />
      </svg>
    )
  },
  {
    name: 'Intuit',
    bgColor: '#0077C5',
    logo: (
      <svg viewBox="0 0 120 60" style={{ width: '70px', height: '35px' }}>
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif" fill="#FFFFFF" letterSpacing="-0.5">Intuit</text>
      </svg>
    )
  },
  {
    name: 'FedEx',
    bgColor: '#FFFFFF',
    logo: (
      <svg viewBox="0 0 120 50" style={{ width: '72px', height: '30px' }}>
        <text x="0" y="38" fontSize="34" fontWeight="900" fontFamily="'Arial Black', 'Futura', sans-serif" fill="#4D148C" letterSpacing="-2">Fed</text>
        <text x="62" y="38" fontSize="34" fontWeight="900" fontFamily="'Arial Black', 'Futura', sans-serif" fill="#FF6200" letterSpacing="-2">Ex</text>
      </svg>
    )
  },
  {
    name: 'Cloudera',
    bgColor: '#FFFFFF',
    logo: (
      <svg viewBox="0 0 160 40" style={{ width: '80px', height: '20px' }}>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="800" fontFamily="'Nunito Sans', 'Segoe UI', system-ui, sans-serif" fill="#F96702" letterSpacing="1.5">cloudera</text>
      </svg>
    )
  },
  {
    name: 'Forbes',
    bgColor: '#000000',
    logo: (
      <svg viewBox="0 0 130 50" style={{ width: '76px', height: '30px' }}>
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="36" fontWeight="bold" fontFamily="Georgia, 'Times New Roman', serif" fill="#FFFFFF" letterSpacing="-0.5">Forbes</text>
      </svg>
    )
  },
  {
    name: 'Ground Truth',
    bgColor: '#1B365D',
    logo: (
      <svg viewBox="0 0 100 100" style={{ width: '48px', height: '48px' }}>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#00B4D8" strokeWidth="3" strokeDasharray="6 4" />
        <circle cx="50" cy="50" r="26" fill="none" stroke="#48CAE4" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="8" fill="#00B4D8" />
        <line x1="50" y1="12" x2="50" y2="24" stroke="#48CAE4" strokeWidth="2" />
        <line x1="50" y1="76" x2="50" y2="88" stroke="#48CAE4" strokeWidth="2" />
        <line x1="12" y1="50" x2="24" y2="50" stroke="#48CAE4" strokeWidth="2" />
        <line x1="76" y1="50" x2="88" y2="50" stroke="#48CAE4" strokeWidth="2" />
      </svg>
    )
  },
  {
    name: 'Apple',
    bgColor: '#111111',
    logo: (
      <svg viewBox="0 0 24 24" style={{ width: '48px', height: '48px' }} fill="#FFFFFF">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
      </svg>
    )
  },
  {
    name: 'J.P. Morgan Chase',
    bgColor: '#002A54',
    logo: (
      <svg viewBox="0 0 24 24" style={{ width: '48px', height: '48px' }} fill="#FFFFFF">
        <path d="M0 15.415c0 .468.38.85.848.85h5.937V.575L0 7.72v7.695m15.416 8.582c.467 0 .846-.38.846-.849v-5.937H.573l7.146 6.785h7.697M24 8.587a.844.844 0 0 0-.847-.846h-5.938V23.43l6.782-7.148L24 8.586M8.585.003a.847.847 0 0 0-.847.847v5.94h15.688L16.282.003H8.585Z" />
      </svg>
    )
  },
  {
    name: 'Deloitte',
    bgColor: '#000000',
    logo: (
      <svg viewBox="0 0 120 30" style={{ width: '82px', height: '22px' }}>
        <text x="0" y="22" fontSize="21" fontWeight="bold" fontFamily="'Inter', 'Segoe UI', Arial, sans-serif" fill="#FFFFFF" letterSpacing="-0.6">Deloitte</text>
        <circle cx="86" cy="19" r="3.2" fill="#86BC25" />
      </svg>
    )
  },
  {
    name: 'TikTok',
    bgColor: '#000000',
    logo: (
      <svg viewBox="0 0 16 16" style={{ width: '48px', height: '48px' }}>
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" fill="#FE2C55" transform="translate(0.8, 0.8)" />
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" fill="#25F4EE" transform="translate(-0.8, -0.8)" />
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: 'Netflix',
    bgColor: '#000000',
    logo: (
      <svg viewBox="0 0 100 100" style={{ width: '46px', height: '46px' }}>
        <defs>
          <linearGradient id="netRedDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B81D24" />
            <stop offset="100%" stopColor="#760C11" />
          </linearGradient>
          <linearGradient id="netRedLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E50914" />
            <stop offset="100%" stopColor="#B81D24" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="-2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>
        <path d="M 22,0 L 40,0 L 40,92 C 40,96 32,98 22,100 Z" fill="url(#netRedDark)" />
        <path d="M 60,0 L 78,0 L 78,100 C 68,98 60,96 60,92 Z" fill="url(#netRedDark)" />
        <path d="M 22,0 L 40,0 L 78,100 L 60,100 Z" fill="url(#netRedLight)" filter="url(#shadow)" />
      </svg>
    )
  },
  {
    name: 'Visa',
    bgColor: '#FFFFFF',
    logo: (
      <svg viewBox="0 0 24 24" style={{ width: '72px', height: '24px' }}>
        <path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z" fill="#1A1F2C" />
      </svg>
    )
  }
]

function CompanyCard({ company }) {
  return (
    <div className="judge-card">
      <div className="judge-card__logo-container" style={{ backgroundColor: company.bgColor }}>
        {company.logo}
      </div>
      <div className="judge-card__company-name">{company.name}</div>
    </div>
  )
}

export default function Judges() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="section judges" id="judges">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">Judges</span>
          <h2 className="section-title">
            Expert <span className="gradient-text">Judging Panel</span>
          </h2>
          <p className="section-subtitle">
            Innovations are evaluated by industry leaders and experts from world-class global organizations.
          </p>
        </div>

        <div className="grid grid--4 stagger-children" ref={gridRef} id="judges-grid">
          {companies.map((company, i) => (
            <CompanyCard key={i} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}
