import React from 'react'
import Hero from './components/Hero.jsx'
import Subhero from './components/Subhero.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import Download from './components/Download.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hero/>
      <Subhero/>
      <Features/>
      <Pricing/>
      <Download/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App