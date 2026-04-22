import './Testimonial.css'

export default function Testimonial() {
  return (
    <section id="testimonial" className="section testimonial-section">
      <div className="container">
        <p className="section-label">Reference</p>
        <h2 className="section-title">Testimonial</h2>
        <div className="section-divider" />

        <div className="testimonial-card card">
          <div className="quote-mark">"</div>
          <blockquote className="quote-body">
            <p>
              Htet Myark Aung consistently demonstrated dedication and perseverance throughout
              his internship. He has a strong work ethic, always striving to improve and
              actively incorporating feedback.
            </p>
            <p>
              He is an independent and soft-spoken individual committed to his studies and
              personal growth. He frequently ventures beyond his comfort zone, seeking
              opportunities to develop his skills and broaden his experience.
            </p>
            <p>
              His proactive attitude, resilience, and eagerness to learn make him an excellent
              candidate. I am confident that he will continue to grow academically and
              personally, contributing positively to the community.
            </p>
          </blockquote>
          <div className="quote-author">
            <div className="author-info">
              <span className="author-name">Tan Chee Seong</span>
              <span className="author-role">Course Chair, School of Computing · Singapore Polytechnic</span>
              <span className="author-date">09 March 2026</span>
            </div>
            <a
              href="https://drive.google.com/file/d/1K-BuJrTZ3b68zjx5M23UtvCt36OrnVm3/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              View Letter ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
