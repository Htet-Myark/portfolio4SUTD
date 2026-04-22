import './Activities.css'

const activities = [
  {
    title: 'Dell InnovateDash Competition',
    type: 'Competition',
    desc: 'Competed in Dell\'s innovation challenge, applying technology and creative problem-solving under time constraints.',
  },
  {
    title: 'Academic School Gryphons Mini CTF',
    type: 'Competition',
    desc: 'Participated in a Capture-the-Flag cybersecurity competition, developing hands-on skills in security challenges.',
  },
  {
    title: 'Overseas Study Trip — Malaysia',
    type: 'Global Exposure',
    desc: 'Gained cross-cultural exposure and expanded academic and industry perspectives through an overseas learning journey.',
  },
  {
    title: 'Leadership Development Programme (LEAP)',
    type: 'Workshop',
    desc: 'Completed the 7 Habits Training under LEAP, building self-leadership, time management, and interpersonal effectiveness.',
  },
  {
    title: 'Peer Mentoring Scheme',
    type: 'Community',
    desc: 'Actively engaged as a peer mentor, supporting junior students in their academic and personal development.',
  },
]

export default function Activities() {
  return (
    <section id="activities" className="section">
      <div className="container">
        <p className="section-label">Beyond the Classroom</p>
        <h2 className="section-title">Activities</h2>
        <div className="section-divider" />

        <div className="activities-grid">
          {activities.map(a => (
            <div key={a.title} className="activity-card card">
              <span className="activity-type">{a.type}</span>
              <h3 className="activity-title">{a.title}</h3>
              <p className="activity-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
