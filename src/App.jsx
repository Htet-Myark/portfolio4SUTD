import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CCA from './components/CCA'
import Certificates from './components/Certificates'
import Testimonial from './components/Testimonial'
import Transcript from './components/Transcript'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <CCA />
        <Certificates />
        <Testimonial />
        <Transcript />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
