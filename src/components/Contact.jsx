import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const headerRef = useScrollAnimation()
  const formRef = useScrollAnimation({ threshold: 0.05 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Query',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/aravinth.saravinth2007@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          'Inquiry Type': formData.subject,
          Message: formData.message,
          '_subject': `Hackverse X Inquiry: ${formData.subject} from ${formData.name}`
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: 'General Query', message: '' })
      } else {
        alert('Failed to send message. Please check your connection and try again.')
      }
    } catch (error) {
      console.error('Error sending contact form:', error)
      alert('An error occurred while sending your message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Have Questions? <span className="gradient-text">Contact Us</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to sponsor, judge, mentor, or ask a general question, our team is here to help.
          </p>
        </div>

        <div className="contact__container animate-on-scroll" ref={formRef} id="contact-container">
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">✉️</div>
              <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)' }}>Message Sent Successfully!</h3>
              <p style={{ color: 'var(--text-secondary)', maxW: '400px', margin: '0 auto' }}>
                Thank you for reaching out. A team member will get back to you at the email address provided within 24 hours.
              </p>
              <button className="btn btn--secondary btn--small" onClick={() => setSubmitted(false)} style={{ marginTop: 'var(--space-md)' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="contact__form-input"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </div>

              <div className="contact__form-group" style={{ marginTop: 'var(--space-md)' }}>
                <label className="contact__form-label" htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="contact__form-input"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </div>

              <div className="contact__form-group" style={{ marginTop: 'var(--space-md)' }}>
                <label className="contact__form-label" htmlFor="contact-subject">Inquiry Type</label>
                <select
                  id="contact-subject"
                  name="subject"
                  className="contact__form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={submitting}
                  style={{ appearance: 'none', backgroundPosition: 'right 16px center', backgroundRepeat: 'no-repeat' }}
                >
                  <option value="General Query">General Query</option>
                  <option value="Sponsorship Opportunity">Sponsorship Opportunity</option>
                  <option value="Mentor & Judge Application">Mentor & Judge Application</option>
                  <option value="Teammate Matching">Teammate Matching</option>
                </select>
              </div>

              <div className="contact__form-group" style={{ marginTop: 'var(--space-md)' }}>
                <label className="contact__form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__form-input contact__form-textarea"
                  placeholder="How can we help you?"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--large"
                id="contact-submit-btn"
                disabled={submitting}
                style={{ width: '100%', marginTop: 'var(--space-lg)' }}
              >
                {submitting ? (
                  <>
                    <span style={{ marginRight: '8px' }}>⚡</span> Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
