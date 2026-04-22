import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-greeting">IT Graduate · Singapore Polytechnic</span>
        <h1 className="hero-name">Htet Myark Aung</h1>
        <h2 className="hero-title">
          Full-Stack Developer &amp; RPA Engineer
        </h2>
        <p className="hero-tagline">"Building at the intersection of code and craft"</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator" />
        </div>
      </div>
    </section>
  )
}
