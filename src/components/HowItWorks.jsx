import { useScrollAnimation } from '../hooks/useScrollAnimation'

const steps = [
  { num: 1, title: 'Create Your Team', desc: <>Assemble your dream team of <span className="tag-pill tag-pill--cyan">1–4 members</span>. Solo hackers welcome too! Find teammates in our community.</> },
  { num: 2, title: 'Choose Your Track', desc: <>Select from <span className="tag-pill tag-pill--cyan">AI & Automation</span>, <span className="tag-pill tag-pill--purple">Web3</span>, <span className="tag-pill tag-pill--emerald">Cybersecurity</span>, or <span className="tag-pill">LLM with MCP</span>. Pick the track that fuels your passion.</> },
  { num: 3, title: 'Build Your Project', desc: <><span className="tag-pill tag-pill--cyan">20 days</span> of focused building. Use any technology, any framework. Push the boundaries of innovation.</> },
  { num: 4, title: 'Submit on Devpost', desc: <>Upload your project with a <span className="highlight-cyan">demo video</span>, <span className="highlight-blue">source code</span>, and <span className="highlight-purple">presentation</span>. Make your submission shine.</> },
  { num: 5, title: 'Get Judged', desc: <>Projects are evaluated by industry experts and leaders from <span className="highlight-cyan">Apple</span>, <span className="highlight-blue">J.P. Morgan Chase</span>, <span className="highlight-purple">Deloitte</span>, <span className="highlight-emerald">TikTok</span>, <span className="highlight-cyan">Netflix</span>, <span className="highlight-blue">Visa</span>, <span className="highlight-purple">ServiceNow</span>, and other leading global organizations.</> },
  { num: 6, title: 'Win Recognition', desc: <>Top projects win <span className="highlight-cyan">premium prizes</span>, domains, <span className="highlight-blue">API credits</span>, and <span className="highlight-emerald">global recognition</span>. Every participant gets certified.</> },
]

export default function HowItWorks() {
  const headerRef = useScrollAnimation()
  const timelineRef = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="section how-it-works section--alt" id="how-it-works">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title">
            Your Journey to <span className="gradient-text">Innovation</span>
          </h2>
          <p className="section-subtitle">
            Six simple steps from registration to recognition. Here&apos;s how you become a HACKVERSE X champion.
          </p>
        </div>

        <div className="timeline stagger-children" ref={timelineRef} id="timeline">
          {steps.map(step => (
            <div className="timeline__step" key={step.num}>
              <div className="timeline__number">{step.num}</div>
              <div className="timeline__content">
                <h4 className="timeline__title">{step.title}</h4>
                <p className="timeline__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
