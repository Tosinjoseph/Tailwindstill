import React from 'react'
import Navbar from './Navbar.jsx'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div id='Home' className=' overflow-hidden mb-4 relative    bg-cover w-full min-h-screen justify-center items-center' style={{backgroundImage: "url('./home-bg.jpg')"}}>
      <div className="absolute inset-0 bg-black/50"></div>
      <Navbar/>

    <motion.div
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 1, ease: "easeOut" }}
    className='container mx-auto px-4 md:px-20 lg:px-32 relative justify-center items-center mt-50 '>
      <h1 className='text-2xl text-center  text-white font-bold md:text-4xl lg:text-5xl'>Software Landing Page</h1>
      <p className='text-center  mx-auto mt-10 text-white'>Boxer is a fully responsive , clean design, Modern, and Flexible Software Landing Page for startups, business and agencies.
        It is built with HTML5, TailwindCSS4.0, Font Outfit and much more. Designed by<span className='text-blue-700'> Tosin Joseph</span> .Images by Pixabay
      </p>
      <img src="./software-img.png" className='py-10 px-4 md:px-20 lg:px-20 mx-auto' alt="" />
     </motion.div>
     
    </div>
  )
}

export default Hero