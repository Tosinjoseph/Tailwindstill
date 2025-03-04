import React from 'react'
import Hero from './components/Hero.jsx'
import Subhero from './components/Subhero.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hero/>
      <Subhero/>
      <Features/>
      <Pricing/>
    </div>
  )
}

export default App