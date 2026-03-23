import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import About from './Components/About'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </BrowserRouter>
  )
}

export default App