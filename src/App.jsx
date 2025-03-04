import React from 'react'
import Hero from './components/Hero.jsx'
import Subhero from './components/Subhero.jsx'
import Features from './components/Features.jsx'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hero/>
      <Subhero/>
      <Features/>
    </div>
  )
}

export default App