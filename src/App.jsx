import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Showreel from './components/Showreel.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Tools from './components/Tools.jsx'
import CoffeeCorner from './components/CoffeeCorner.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-espresso">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-caramel focus:text-espresso focus:px-4 focus:py-2 focus:rounded-full">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Showreel />
        <Portfolio />
        <Services />
        <Process />
        <Tools />
        <CoffeeCorner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}