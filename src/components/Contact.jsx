import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const SERVICE_ID  = 'service_l7s0b3o'
const TEMPLATE_ID = 'template_4vm2kid'
const PUBLIC_KEY  = 'C04z0LDqS-0qR_RIY'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact</h2>

        <div className="contact-layout">
          <div className="contact-text">
            <p>
              I'm currently open to opportunities and conversations. Feel free to reach out.
            </p>
            <div className="contact-links">
              <a href="mailto:htetmyark@gmail.com" className="contact-item">
                <span className="contact-icon">✉</span>
                <span>htetmyark@gmail.com</span>
              </a>
              <a href="https://github.com/Htet-Myark" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-icon">◈</span>
                <span>github.com/Htet-Myark</span>
              </a>
              <div className="contact-item">
                <span className="contact-icon">◉</span>
                <span>Singapore</span>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="from_name">Name</label>
              <input id="from_name" name="from_name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input id="from_email" name="from_email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Hello Htet, I'd like to..." required />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="form-feedback success">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-feedback error">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
