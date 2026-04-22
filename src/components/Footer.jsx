import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          <span className="logo-bracket">&lt;</span>HMA<span className="logo-bracket">/&gt;</span>
        </span>
        <p className="footer-text">
          Htet Myark Aung &mdash; SP Graduate · PSA Intern · SUTD CSD Applicant
        </p>
        <p className="footer-copy">Built with React &amp; Vite</p>
      </div>
    </footer>
  )
}
