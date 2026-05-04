import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section edu-section">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />

        <div className="edu-timeline">
          <div className="edu-card card">
            <div className="edu-header">
              <div className="edu-icon">◆</div>
              <div>
                <h3 className="edu-school">Singapore Polytechnic</h3>
                <p className="edu-degree">Diploma in Information Technology</p>
                <p className="edu-degree">Specialized in Software Development</p>
              </div>
              <span className="edu-badge">Graduated</span>
            </div>
            <div className="edu-body">
              <p>
                Developed a solid foundation in software engineering, database management,
                web development, and data analysis. Gained hands-on experience through
                coursework projects spanning full-stack development and mobile applications.
              </p>
              <div className="edu-highlights">
                <span>Full-Stack Development</span>
                <span>Database Design</span>
                <span>Mobile Development</span>
                <span>Data Analysis</span>
                <span>REST APIs</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
