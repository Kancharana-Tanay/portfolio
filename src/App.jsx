import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import About from './Components/About'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Certificates from './Components/Certificates'
import Education from './Components/Education'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
    </BrowserRouter>
  )
}

export default App