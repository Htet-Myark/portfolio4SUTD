import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong>Htet Myark Aung</strong>, a fresh graduate from{' '}
              <strong>Singapore Polytechnic</strong> with a Diploma in Information Technology
              (Software Development). I speak Burmese and English, and I'm based in Singapore.
            </p>
            <p>
              My foundation spans both front-end and back-end development — from building
              responsive web UIs and REST APIs to containerised deployments and enterprise
              RPA automation. I enjoy mathematics and logic problems, which naturally draws
              me toward systems thinking and elegant code.
            </p>
            <p>
              During my internship at <strong>PSA Corporation Ltd</strong>, I built and
              maintained RPA workflows using UiPath and Power Automate, collaborated with
              stakeholders across departments, and participated in product roadmap discussions
              — giving me a real taste of how technology operates at scale.
            </p>
            <p>
              I'm applying to <strong>SUTD's Computer Science and Design (CSD)</strong>{' '}
              programme because I believe the most impactful technology sits at the intersection
              of rigorous engineering and thoughtful design — exactly what CSD is built around.
            </p>
          </div>

          <div className="about-stats">
<div className="stat-card card">
              <span className="stat-number">3.60</span>
              <span className="stat-label">Cumulative GPA</span>
            </div>
            <div className="stat-card card">
              <span className="stat-number">PSA</span>
              <span className="stat-label">Internship</span>
            </div>
            <div className="stat-card card">
              <span className="stat-number">28</span>
              <span className="stat-label">CCA Points</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
