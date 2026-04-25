import './Projects.css'

const projects = [
  {
    title: 'Shrtner',
    description:
      'A URL shortening service built with Node.js, Express, and PostgreSQL, hosted on Render with NeonDB. Users can shorten long URLs and get clean, shareable links — deployed and live.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'NeonDB', 'Render'],
    link: 'https://files-vkom.onrender.com',
  },
  {
    title: 'FOP2 — University Info System',
    description:
      'A university information portal built for the Fundamentals of Programming 2 course. Features a REST API backend, dynamic front-end with Bootstrap, and clean Express routing.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'Express', 'REST API'],
    link: 'https://files-vkom.onrender.com/FOP2',
  },
  {
    title: 'Bedrock - Nova Lite 2 Chatbot',
    
    description: 'A chatbot built with Amazon Bedrock - Nova Lite 2 project, showcasing natural language processing capabilities.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'AWS Lambda','Amazon Bedrock','Vercel','Nova Lite 2 API'],
    link: 'https://bedrock-nova-lite-2-sjon.vercel.app/',
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section proj-section">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.title} className="proj-card card">
              <div className="proj-top">
                <span className="proj-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="proj-type">{p.type}</span>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.description}</p>
              <div className="proj-footer">
                <div className="proj-tech">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
