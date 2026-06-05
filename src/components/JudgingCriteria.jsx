import { useScrollAnimation, useCriteriaRing } from '../hooks/useScrollAnimation'

const criteria = [
  { title: 'Innovation & Creativity', percent: 95, themeClass: 'card--cyan' },
  { title: 'Technical Complexity', percent: 90, themeClass: 'card--purple' },
  { title: 'UI/UX Design', percent: 85, themeClass: 'card--pink' },
  { title: 'Impact & Practicality', percent: 88, themeClass: 'card--emerald' },
  { title: 'Presentation Quality', percent: 82, themeClass: 'card--gold' },
]

function CriteriaCard({ title, percent, themeClass }) {
  const ringRef = useCriteriaRing()

  return (
    <div className={`criteria-card ${themeClass}`}>
      <div className="criteria-card__ring">
        <svg viewBox="0 0 100 100">
          <circle className="ring-bg" cx="50" cy="50" r="45" />
          <circle
            className="ring-fill"
            cx="50"
            cy="50"
            r="45"
            ref={ringRef}
            data-percent={percent}
          />
        </svg>
        <div className="criteria-card__percent">{percent}%</div>
      </div>
      <h4 className="criteria-card__title">{title}</h4>
    </div>
  )
}

export default function JudgingCriteria() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="section criteria section--alt" id="criteria">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">Judging Criteria</span>
          <h2 className="section-title">
            How Projects Are <span className="gradient-text">Evaluated</span>
          </h2>
          <p className="section-subtitle">
            Our expert panel evaluates every submission across five key dimensions of excellence.
          </p>
        </div>

        <div className="grid grid--5 stagger-children" ref={gridRef} id="criteria-grid">
          {criteria.map((c, i) => (
            <CriteriaCard key={i} title={c.title} percent={c.percent} themeClass={c.themeClass} />
          ))}
        </div>
      </div>
    </section>
  )
}
