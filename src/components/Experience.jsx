import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <p className="section-label">Work History</p>
        <h2 className="section-title">Experience</h2>
        <div className="section-divider" />

        <div className="exp-card card">
          <div className="exp-left">
            <span className="exp-dot" />
            <div className="exp-line" />
          </div>
          <div className="exp-body">
            <div className="exp-meta">
              <div>
                <h3 className="exp-role">RPA Developer</h3>
                <p className="exp-company">PSA Corporation Ltd</p>
              </div>
              <span className="exp-period">Apr 2025 – Feb 2026</span>
            </div>
            <ul className="exp-points">
              <li>Developed and maintained RPA solutions using <strong>UiPath</strong> and <strong>Power Automate</strong>, automating repetitive enterprise workflows</li>
              <li>Provided first-line technical support and engaged stakeholders to diagnose and resolve process issues</li>
              <li>Participated in strategic product discussions and contributed to workflow enhancement planning</li>
              <li>Executed end-to-end testing and technical validation across multiple automation projects</li>
              <li>Collaborated cross-departmentally to ensure timely project delivery</li>
            </ul>
            <div className="exp-tags">
              <span>UiPath</span>
              <span>Power Automate</span>
              <span>RPA</span>
              <span>Stakeholder Management</span>
              <span>Enterprise Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
