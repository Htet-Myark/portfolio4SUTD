import './CCA.css'

const ccas = [
  {
    name: 'Dell InnovateDash Competition',
    org: 'School of Computing',
    role: 'Participant',
    date: '26 Jun 2024',
    category: 'Competition',
  },
  {
    name: 'Academic School Gryphons Mini CTF Competition',
    org: 'School of Computing',
    role: 'Participant',
    date: '04 May 2024',
    category: 'Competition',
  },
  {
    name: 'Overseas Study Trip (Malaysia)',
    org: 'School of Computing',
    role: 'Participant',
    date: 'Dec 2024',
    category: 'Global Exposure',
  },
  {
    name: 'SCS – SP AI Ethics and Governance Structured Programme',
    org: 'School of Computing',
    role: 'Participant',
    date: 'Oct 2025 – Feb 2026',
    category: 'Enrichment',
  },
  {
    name: 'Leadership Development Programme LEAP – 7 Habits Training',
    org: 'Student Development',
    role: 'Participant',
    date: '01 Dec 2023',
    category: 'Leadership',
  },
  {
    name: 'Peer Mentoring Scheme',
    org: 'School of Computing',
    role: 'Volunteer',
    date: '29 Nov 2023',
    category: 'Community Service',
  },
  {
    name: 'Regular CCA Sessions – Astronomers Club',
    org: 'Student Development',
    role: 'Participant',
    date: 'Apr – Aug 2024',
    category: 'Interest Group',
  },
  {
    name: 'UOB Webinar on Uncovering Emerging Scams',
    org: 'School of Business',
    role: 'Participant',
    date: '17 May 2024',
    category: 'Enrichment',
  },
  {
    name: 'Industry Insight Talk',
    org: 'Dept of Student Services',
    role: 'Participant',
    date: '15 May 2024',
    category: 'Enrichment',
  },
  {
    name: 'Student Sharing Session on How To FOCus',
    org: 'School of Computing',
    role: 'Participant',
    date: '08 May 2024',
    category: 'Enrichment',
  },
  {
    name: 'Webinar on Mental Wellness',
    org: 'Student Development',
    role: 'Participant',
    date: '24 Apr 2024',
    category: 'Enrichment',
  },
  {
    name: 'Workshop on Confident Results for Examination',
    org: 'Dept of Student Services',
    role: 'Participant',
    date: '12 Jul 2023',
    category: 'Enrichment',
  },
  {
    name: 'Annual Students Experience Survey',
    org: 'Student Development',
    role: 'Participant',
    date: 'Oct – Nov 2025',
    category: 'Enrichment',
  },
  {
    name: '4iCARE Deepavali Festival Celebration',
    org: 'Dept of Student Services',
    role: 'Participant',
    date: '08 Nov 2023',
    category: 'Community',
  },
  {
    name: 'Halloween Nite',
    org: 'School of EEE',
    role: 'Participant',
    date: '27 Oct 2023',
    category: 'Community',
  },
]

const categoryColour = {
  'Competition': 'cat-competition',
  'Global Exposure': 'cat-global',
  'Enrichment': 'cat-enrichment',
  'Leadership': 'cat-leadership',
  'Community Service': 'cat-service',
  'Interest Group': 'cat-interest',
  'Community': 'cat-community',
}

export default function CCA() {
  return (
    <section id="cca" className="section cca-section">
      <div className="container">
        <p className="section-label">Co-Curricular Activities</p>
        <h2 className="section-title">CCA Record</h2>
        <div className="section-divider" />

        <div className="cca-header-row">
          <div className="cca-meta">
          <span className="cca-total">15 activities</span>
          <span className="cca-dot" />
          <span className="cca-total">28 CCA points</span>
          <span className="cca-dot" />
          <span className="cca-total">As of 06 Mar 2026</span>
          </div>
          <a
            href="https://drive.google.com/file/d/1Y-KdbPU9TbbSe3g11RrUUINWnzcUfqAC/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            View Full CCA Record ↗
          </a>
        </div>

        <div className="cca-table card">
          {ccas.map((c, i) => (
            <div key={i} className="cca-row">
              <div className="cca-left">
                <span className={`cca-cat ${categoryColour[c.category] || ''}`}>{c.category}</span>
                <h3 className="cca-name">{c.name}</h3>
                <p className="cca-org">{c.org}</p>
              </div>
              <div className="cca-right">
                <span className="cca-role">{c.role}</span>
                <span className="cca-date">{c.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
