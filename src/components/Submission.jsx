import { useScrollAnimation } from '../hooks/useScrollAnimation'

const items = [
  'Project Description — Detailed write-up of your solution and approach',
  'Demo Video — A compelling walkthrough of your working project',
  'Source Code Repository — Public GitHub/GitLab repository with your code',
  'Presentation / PPT — Slide deck explaining your vision and technology',
  'Team Details — Names, roles, and contributions of each team member',
]

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function Submission() {
  const headerRef = useScrollAnimation()
  const listRef = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="section submission" id="submission">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">Submission</span>
          <h2 className="section-title">
            What to <span className="gradient-text">Submit</span>
          </h2>
          <p className="section-subtitle">
            Ensure your project submission includes all required materials for a complete evaluation.
          </p>
        </div>

        <div className="checklist stagger-children" ref={listRef} id="submission-checklist">
          {items.map((item, i) => {
            const parts = item.split(' — ')
            return (
              <div className="checklist__item" key={i}>
                <div className="checklist__check">
                  <CheckIcon />
                </div>
                <span className="checklist__text">
                  <strong className="highlight-cyan" style={{ marginRight: '6px' }}>{parts[0]}</strong>
                  {parts[1] && <span style={{ color: 'var(--text-secondary)' }}>— {parts[1]}</span>}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
