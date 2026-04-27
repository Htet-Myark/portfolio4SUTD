import './Certificates.css'

const certs = [
  {
    title: 'Certificate in Data & Analytics',
    issuer: 'Singapore Polytechnic',
    date: '21 March 2025',
    link: 'https://letters.gov.sg/i57jf-w3309-kq16n-rllq7',
  },
  {
    title: 'AI Ethics & Governance',
    issuer: 'Singapore Computer Society',
    date: 'Associate Level',
    link: 'https://drive.google.com/file/d/1inXzRCqpfs7bdNB-Jw24XkywWyfnKFo5/view?usp=sharing',
  },
  {
    title: 'Certificate of Achievement in Teamwork',
    issuer: 'Singapore Polytechnic',
    date: 'Good · AY 2025/2026',
    link: 'https://letters.gov.sg/ypvu4-dbfj8-e3ycy-g7muh',
  },
  {
    title: 'Google AI Professional Certificate',
    issuer: 'Google, Coursera',
    date: 'Completed',
    link: 'https://coursera.org/share/4f3bed4a977b1990eeb7abdb824202bd',
  }
]

export default function Certificates() {
  return (
    <section id="certificates" className="section cert-section">
      <div className="container">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Certificates</h2>
        <div className="section-divider" />

        <div className="cert-grid">
          {certs.map(c => (
            <div key={c.title} className="cert-card card">
              <span className="cert-marker">◆</span>
              <div className="cert-body">
                <h3 className="cert-title">{c.title}</h3>
                <p className="cert-issuer">{c.issuer}</p>
                {c.date && <p className="cert-date">{c.date}</p>}
              </div>
              {c.link && (
                <a href={c.link} target="_blank" rel="noreferrer" className="cert-link">
                  View ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
