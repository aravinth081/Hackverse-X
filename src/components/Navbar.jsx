import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['hero', 'about', 'tracks', 'prizes', 'judges', 'sponsor', 'faq', 'community', 'contact']
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setActiveSection(targetId)
    setMobileOpen(false)
    document.body.style.overflow = ''
    const target = document.querySelector(targetId)
    if (target) {
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navHeight - 20,
        behavior: 'smooth',
      })
    }
  }

  const toggleMobile = () => {
    setMobileOpen(prev => !prev)
    document.body.style.overflow = !mobileOpen ? 'hidden' : ''
  }

  const links = [
    { href: '#about', label: 'About' },
    { href: '#tracks', label: 'Tracks' },
    { href: '#prizes', label: 'Prizes' },
    { href: '#judges', label: 'Judges' },
    { href: '#sponsor', label: 'Sponsors' },
    { href: '#faq', label: 'FAQ' },
    { href: '#community', label: 'Community' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="container">
        <nav className="nav__inner" aria-label="Main navigation">
          <a href="#hero" className="nav__logo gradient-text" onClick={(e) => handleNavClick(e, '#hero')}>
            HACKVERSE X
          </a>

          <div className={`nav__links${mobileOpen ? ' open' : ''}`} id="nav-links">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`nav__link${activeSection === link.href ? ' active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav__actions">
            <button
              className="nav__theme-toggle"
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a href="https://global-tech-innovation-2026.devpost.com/" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--small hide-mobile" id="nav-register-btn">
              Register Now
            </a>
            <div
              className={`nav__hamburger${mobileOpen ? ' active' : ''}`}
              id="nav-hamburger"
              role="button"
              tabIndex={0}
              aria-label="Menu"
              onClick={toggleMobile}
              onKeyDown={(e) => e.key === 'Enter' && toggleMobile()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
