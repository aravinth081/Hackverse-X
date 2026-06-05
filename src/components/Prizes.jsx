import { useScrollAnimation } from '../hooks/useScrollAnimation'

const prizes = [
  {
    id: 'prize-first',
    variant: 'gold',
    trophy: '1st Prize',
    rank: 'First Place',
    title: 'Grand Champion',
    items: ['.in Domain Name', 'Premium Certificate', 'Devpost Verified Badge', '1000 API Credits', 'Global Recognition'],
  },
  {
    id: 'prize-second',
    variant: 'silver',
    trophy: '2nd Prize',
    rank: 'Second Place',
    title: 'Runner Up',
    items: ['Premium Certificate', 'Devpost Verified Badge', '500 API Credits', 'Global Recognition'],
  },
  {
    id: 'prize-third',
    variant: 'bronze',
    trophy: '3rd Prize',
    rank: 'Third Place',
    title: 'Second Runner Up',
    items: ['Premium Certificate', 'Devpost Verified Badge', '200 API Credits', 'Global Recognition'],
  },
]

function PrizeCard({ prize }) {
  return (
    <div
      className={`prize-card prize-card--${prize.variant} animate-scale`}
      id={prize.id}
    >

      <div className="prize-card__trophy">{prize.trophy}</div>
      <div className="prize-card__rank">{prize.rank}</div>
      <h3 className="prize-card__title">{prize.title}</h3>
      <div className="prize-card__list">
        {prize.items.map((item, i) => (
          <div className="prize-card__item" key={i}>{item}</div>
        ))}
      </div>
    </div>
  )
}

export default function Prizes() {
  const headerRef = useScrollAnimation()
  const cardsRef = useScrollAnimation({ threshold: 0.05 })
  const participationRef = useScrollAnimation()

  return (
    <section className="section prizes" id="prizes">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">Prizes</span>
          <h2 className="section-title">
            Rewards for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="section-subtitle">
            Outstanding projects earn premium prizes, recognition, and opportunities to accelerate your career.
          </p>
        </div>

        <div className="prizes__cards stagger-children" ref={cardsRef} id="prizes-cards">
          {prizes.map(prize => (
            <PrizeCard key={prize.id} prize={prize} />
          ))}
        </div>

        <div className="prizes__participation animate-on-scroll" ref={participationRef} id="participation-prize">
          <div className="prizes__participation-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-sm)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px', color: 'var(--accent)' }}>
              <circle cx="12" cy="8" r="7" />
              <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
            </svg>
            Participation Certificates For All
          </div>
          <p className="prizes__participation-text">
            Every participant who submits a valid project receives a verified participation certificate
            to showcase their achievement.
          </p>
        </div>
      </div>
    </section>
  )
}
