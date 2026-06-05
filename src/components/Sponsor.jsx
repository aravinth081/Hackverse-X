import { useScrollAnimation } from '../hooks/useScrollAnimation'

const features = [
  { icon: '🎨', text: 'Text-to-Image Generation' },
  { icon: '🎬', text: 'Image-to-Video Conversion' },
  { icon: '✂️', text: 'Background Removal' },
  { icon: '👗', text: 'Virtual Try-On' },
  { icon: '✨', text: 'AI Enhancement' },
  { icon: '🔮', text: '50+ AI APIs' },
]

export default function Sponsor() {
  const headerRef = useScrollAnimation()
  const showcaseRef = useScrollAnimation()

  return (
    <section className="section sponsor section--alt" id="sponsor">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">Official Sponsor</span>
          <h2 className="section-title">
            Powered by <span className="gradient-text">Innovation</span>
          </h2>
          <p className="section-subtitle">
            Our sponsors empower builders with world-class APIs and tools to bring their ideas to life.
          </p>
        </div>

        <div className="sponsor__showcase animate-on-scroll" ref={showcaseRef} id="sponsor-showcase">
          <div className="sponsor__logo-area">
            <div className="sponsor__label">Official Sponsor</div>
            <div className="sponsor__logo-text">YouCam API</div>
            <p className="sponsor__logo-subtitle">50+ AI-Powered APIs for the next generation of creators</p>
          </div>

          <div>
            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-xl)', fontWeight: 'var(--weight-semibold)' }}>
              API Features
            </h3>
            <div className="sponsor__features" id="sponsor-features">
              {features.map((f, i) => (
                <div className="sponsor-feature" key={i}>
                  <div className="sponsor-feature__icon">{f.icon}</div>
                  <div className="sponsor-feature__text">{f.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
