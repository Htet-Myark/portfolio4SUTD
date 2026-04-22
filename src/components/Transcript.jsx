import { useState } from 'react'
import './Transcript.css'

const semesters = [
  {
    id: 'y1s1',
    label: 'Year 1 · Sem 1',
    period: 'AY 2023/2024 Sem 1',
    modules: [
      { code: 'ST0501',  name: 'Front-End Web Development',                          grade: 'A',  units: '5.00' },
      { code: 'ST0523',  name: 'Fundamentals of Programming',                        grade: 'B+', units: '5.00' },
      { code: 'ST2413',  name: 'Fundamentals of Computing',                          grade: 'B+', units: '4.00' },
      { code: 'MS0105',  name: 'Mathematics',                                        grade: 'B+', units: '4.00' },
      { code: 'CC3005',  name: 'Problem Solving with Creative & Computational Thinking', grade: 'B+', units: '1.00' },
      { code: 'CC2003',  name: 'Artificial Intelligence & Its Impact',               grade: 'B',  units: '1.00' },
      { code: 'CC1001',  name: 'Thinking Critically About the UN SDGs',              grade: 'C+', units: '2.00' },
      { code: 'CC1007',  name: 'Collaboration in the Digital Age',                   grade: 'C+', units: '1.00' },
      { code: 'SP3001*', name: 'Financial Education 1',                              grade: 'P',  units: '0.30' },
    ],
    extras: ['Wellness for Life Year 1: Street Soccer — Completed', 'Education and Career Guidance — Completed'],
    gpa: { semester: '3.46', cumulative: '3.46' },
  },
  {
    id: 'y1s2',
    label: 'Year 1 · Sem 2',
    period: 'AY 2023/2024 Sem 2',
    modules: [
      { code: 'ST0503',  name: 'Back-End Web Development',                           grade: 'B',  units: '6.00' },
      { code: 'ST0277',  name: 'Design for User Interaction',                        grade: 'B+', units: '5.00' },
      { code: 'ST0524',  name: 'Fundamentals of Programming 2',                      grade: 'B+', units: '5.00' },
      { code: 'EP0302',  name: 'Programming for Data Science',                       grade: 'B+', units: '4.00' },
      { code: 'CC3004',  name: 'Persuasive Communication with Data Storytelling',    grade: 'B',  units: '2.00' },
      { code: 'CC2002',  name: 'Data Fluency',                                       grade: 'A',  units: '1.00' },
    ],
    gpa: { semester: '3.35', cumulative: '3.40' },
  },
  {
    id: 'y2s1',
    label: 'Year 2 · Sem 1',
    period: 'AY 2024/2025 Sem 1',
    modules: [
      { code: 'ST0525',  name: 'Database Systems',                                   grade: 'A',  units: '6.00' },
      { code: 'ST0506',  name: 'Software Engineering Practice',                      grade: 'A',  units: '5.00' },
      { code: 'ST0509',  name: 'Java Programming',                                   grade: 'A',  units: '4.00' },
      { code: 'EP0612',  name: 'Fundamentals and Automation of Data Analysis (Excel)', grade: 'B', units: '4.00' },
      { code: 'CC1009',  name: 'Personal Branding and Career Agility',               grade: 'B',  units: '2.00' },
      { code: 'CC1006',  name: 'Digital Communication for Impact',                   grade: 'B+', units: '1.00' },
      { code: 'CC1008',  name: 'Effective Writing for the Workplace',                grade: 'B+', units: '1.00' },
      { code: 'SP3002*', name: 'Financial Education 2',                              grade: 'P',  units: '0.20' },
      { code: 'SP3003*', name: 'Financial Education 3',                              grade: 'P',  units: '0.20' },
    ],
    gpa: { semester: '3.70', cumulative: '3.50' },
  },
  {
    id: 'y2s2',
    label: 'Year 2 · Sem 2',
    period: 'AY 2024/2025 Sem 2',
    modules: [
      { code: 'ST0526',  name: 'Continuous Integration and Continuous Delivery',     grade: 'B',  units: '6.00' },
      { code: 'EP0611',  name: 'Thinking with Data for Decision Making',             grade: 'B',  units: '4.00' },
      { code: 'ST0510',  name: 'J2EE Application Development',                       grade: 'C+', units: '4.00' },
      { code: 'ST2515',  name: 'Secure Coding',                                      grade: 'B',  units: '4.00' },
      { code: 'CC1S10',  name: 'Sustainable Innovation Project',                     grade: 'A',  units: '3.00' },
    ],
    extras: ['Certificate in Data & Analytics awarded — based on completion of EP0302, EP0612 and EP0611'],
    gpa: { semester: '3.05', cumulative: '3.39' },
  },
  {
    id: 'y3',
    label: 'Year 3 · Internship',
    period: 'AY 2025/2026 Sem 2',
    modules: [
      { code: 'IH301Z', name: 'Internship Programme', grade: 'A', units: '34.00' },
    ],
    extras: ['Diploma Awarded'],
    gpa: { semester: '4.00', cumulative: '3.60' },
  },
]

const gradeColour = {
  'A': 'grade-a', 'DIST': 'grade-a',
  'B+': 'grade-bp',
  'B': 'grade-b',
  'C+': 'grade-cp',
  'C': 'grade-c',
  'P': 'grade-p',
}

export default function Transcript() {
  const [active, setActive] = useState('y1s1')
  const current = semesters.find(s => s.id === active)

  return (
    <section id="transcript" className="section transcript-section">
      <div className="container">
        <p className="section-label">Academic Record</p>
        <h2 className="section-title">Transcript</h2>
        <div className="section-divider" />

        <div className="transcript-action">
          <a
            href="https://drive.google.com/file/d/1V21fpbQwAOaNNQpVu7RBj2RNx9ZJ1dTF/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            View Full Transcript ↗
          </a>
        </div>

        <div className="transcript-layout">
          <div className="semester-tabs">
            {semesters.map(s => (
              <button
                key={s.id}
                className={`tab-btn ${active === s.id ? 'active' : ''}`}
                onClick={() => setActive(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="semester-panel card">
            <div className="panel-header">
              <h3>{current.label}</h3>
              {current.period && <span className="panel-period">{current.period}</span>}
            </div>

            <table className="module-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Module</th>
                  <th>Units</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {current.modules.map((m, i) => (
                  <tr key={i}>
                    <td className="mono muted">{m.code}</td>
                    <td>{m.name}</td>
                    <td className="mono muted">{m.units}</td>
                    <td><span className={`grade-badge ${gradeColour[m.grade] || ''}`}>{m.grade}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>

            {current.extras && (
              <div className="panel-extras">
                {current.extras.map((e, i) => (
                  <p key={i} className="panel-note">{e}</p>
                ))}
              </div>
            )}

            {current.gpa && (
              <div className="gpa-row">
                <div className="gpa-item">
                  <span className="gpa-label">Semester GPA</span>
                  <span className="gpa-value">{current.gpa.semester}</span>
                </div>
                <div className="gpa-item">
                  <span className="gpa-label">Cumulative GPA</span>
                  <span className="gpa-value highlight">{current.gpa.cumulative}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
