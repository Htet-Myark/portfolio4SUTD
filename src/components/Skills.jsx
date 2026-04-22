import './Skills.css'

const categories = [
  {
    title: 'Frontend',
    icon: '◻',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Vite', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: '◼',
    skills: ['Node.js', 'Express', 'REST API', 'Python', 'Java'],
  },
  {
    title: 'Database',
    icon: '⬡',
    skills: ['MySQL', 'PostgreSQL', 'SQL', 'NeonDB'],
  },
  {
    title: 'DevOps & Cloud',
    icon: '▣',
    skills: ['AWS Basics', 'CI/CD', 'Git', 'Render'],
  },
  {
    title: 'Automation & AI',
    icon: '◈',
    skills: ['UiPath', 'Power Automate', 'RPA', 'AI Ethics', 'AWS Bedrock'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Skills</h2>
        <div className="section-divider" />

        <div className="skills-grid">
          {categories.map(cat => (
            <div key={cat.title} className="skill-card card">
              <div className="skill-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
