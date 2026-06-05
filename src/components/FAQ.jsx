import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqData = [
  {
    id: 'faq-1',
    question: 'Who can participate in HACKVERSE X?',
    answer: 'HACKVERSE X is open to students, developers, designers, engineers, and innovators from around the world. Whether you\'re a beginner or an experienced professional, everyone is welcome to participate and build something amazing.',
  },
  {
    id: 'faq-2',
    question: 'How many members can be in a team?',
    answer: 'Teams can have 1 to 4 members. You can participate solo or form a team. You can find teammates through our official WhatsApp community or network with other participants on Devpost.',
  },
  {
    id: 'faq-3',
    question: 'Can beginners join?',
    answer: 'Absolutely! HACKVERSE X welcomes participants of all skill levels. We provide resources, mentorship, and community support to help beginners learn and build alongside experienced developers. This is a perfect opportunity to level up your skills.',
  },
  {
    id: 'faq-4',
    question: 'What technologies can be used?',
    answer: 'You\'re free to use any programming language, framework, or technology stack. The only requirement is that your project aligns with one of the four tracks: AI & Automation, Web3 & Blockchain, Cybersecurity & Privacy, or LLM with MCP. We encourage using the YouCam API sponsor tools.',
  },
  {
    id: 'faq-5',
    question: 'How are projects judged?',
    answer: 'Projects are evaluated by an expert judging panel from leading organizations including ServiceNow, Intuit, FedEx, Cloudera, Forbes, Ground Truth, Apple, J.P. Morgan Chase, Deloitte, TikTok, Netflix, Visa, Propensity Labs, and more, across Innovation, Technical Complexity, UI/UX Design, Impact, and Presentation Quality.',
  },
  {
    id: 'faq-6',
    question: 'How do submissions work?',
    answer: 'All submissions are made through Devpost. You\'ll need to provide a project description, demo video, source code repository, presentation/PPT, and team details. Make sure to submit before the June 30, 2026 deadline. Late submissions will not be accepted.',
  },
]

const ChevronIcon = () => (
  <svg className="accordion__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function FAQ() {
  const [activeId, setActiveId] = useState('faq-1')
  const headerRef = useScrollAnimation()
  const accordionRef = useScrollAnimation()

  const toggle = (id) => {
    setActiveId(prev => prev === id ? null : id)
  }

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="accordion animate-on-scroll" ref={accordionRef} id="faq-accordion">
          {faqData.map(faq => (
            <div className={`accordion__item${activeId === faq.id ? ' active' : ''}`} key={faq.id}>
              <button
                className="accordion__trigger"
                id={`${faq.id}-trigger`}
                onClick={() => toggle(faq.id)}
                aria-expanded={activeId === faq.id}
              >
                <span>{faq.question}</span>
                <ChevronIcon />
              </button>
              <div className="accordion__content">
                <div className="accordion__body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
