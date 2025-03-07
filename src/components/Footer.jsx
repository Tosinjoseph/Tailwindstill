import React from 'react'
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }} 
     whileInView={{ opacity: 1, y: 0 }} 
     viewport={{ once: true }} 
     transition={{ duration: 1, ease: "easeOut" }}
    className='overflow-hidden py-6 px-4 w-full md:px-20 lg:px-32 mx-auto justify-center items-center'>
      <p className='text-center'>Copyright 2025 Dee Answer International</p>
      <p className='text-center'>Coded by <span className='text-blue-700'><a href=""  >Tosin Joseph</a></span></p>
    </motion.div>
  )
}

export default Footer