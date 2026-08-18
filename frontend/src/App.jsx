import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Articles from './sections/Articles'
import Contact from './sections/Contact'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <Portfolio />
        <Skills />
        <Experience />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
