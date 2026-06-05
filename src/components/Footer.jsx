export default function Footer() {
  const handleClick = (e, targetId) => {
    if (!targetId.startsWith('#')) return
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navHeight - 20,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__brand-name">HACKVERSE X</div>
            <p className="footer__brand-tagline">
              Global Tech Innovation 2026. Your Innovation. Global Impact.
            </p>
            <div className="footer__social">
              <a href="https://global-tech-innovation-2026.devpost.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Devpost" id="footer-devpost">🏆</a>
              <a href="https://chat.whatsapp.com/mock-hackverse-x" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp" id="footer-whatsapp">💬</a>
              <a href="mailto:hello@hackverse-x.io" className="footer__social-link" aria-label="Email" id="footer-email">✉️</a>
            </div>

            <div className="footer__organizer">
              <div className="footer__organizer-title">Hackathon Organizer</div>
              <div className="footer__organizer-details">
                <div className="footer__organizer-item">
                  <span className="item-icon">🌐</span>
                  <a href="https://aravinthtech.in" target="_blank" rel="noopener noreferrer" className="item-link">aravinthtech.in</a>
                </div>
                <div className="footer__organizer-item">
                  <span className="item-icon">✉️</span>
                  <a href="mailto:aravinth.saravinth2007@gmail.com" className="item-link">aravinth.saravinth2007@gmail.com</a>
                </div>
                <div className="footer__organizer-item">
                  <span className="item-icon">💬</span>
                  <a href="https://wa.me/916374995585" target="_blank" rel="noopener noreferrer" className="item-link">+91 63749 95585</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Event</h4>
            <div className="footer__links">
              <a href="#about" className="footer__link" onClick={(e) => handleClick(e, '#about')}>About</a>
              <a href="#tracks" className="footer__link" onClick={(e) => handleClick(e, '#tracks')}>Tracks</a>
              <a href="#how-it-works" className="footer__link" onClick={(e) => handleClick(e, '#how-it-works')}>How It Works</a>
              <a href="#prizes" className="footer__link" onClick={(e) => handleClick(e, '#prizes')}>Prizes</a>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Resources</h4>
            <div className="footer__links">
              <a href="#how-it-works" className="footer__link" onClick={(e) => handleClick(e, '#how-it-works')}>Rules</a>
              <a href="#submission" className="footer__link" onClick={(e) => handleClick(e, '#submission')}>Resources</a>
              <a href="#sponsor" className="footer__link" onClick={(e) => handleClick(e, '#sponsor')}>Sponsors</a>
              <a href="#judges" className="footer__link" onClick={(e) => handleClick(e, '#judges')}>Judges</a>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Connect</h4>
            <div className="footer__links">
              <a href="https://global-tech-innovation-2026.devpost.com/" target="_blank" rel="noopener noreferrer" className="footer__link">Devpost</a>
              <a href="https://chat.whatsapp.com/mock-hackverse-x" target="_blank" rel="noopener noreferrer" className="footer__link">WhatsApp</a>
              <a href="mailto:hello@hackverse-x.io" className="footer__link">Email Us</a>
              <a href="#contact" className="footer__link" onClick={(e) => handleClick(e, '#contact')}>Contact Form</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 HACKVERSE X. All rights reserved. Built with ❤️ for innovators worldwide.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
