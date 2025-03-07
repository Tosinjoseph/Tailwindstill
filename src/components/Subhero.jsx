import React from 'react'
import {motion} from 'framer-motion'

const Subhero = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }} 
    whileInView={{ opacity: 1, x: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 1, ease: "easeOut" }}
    className='w-full  justify-center items-center'>
      <div className='flex-col md:flex lg:flex-row w-full px-4 md:px-20 lg:px-32 mx-auto py-10 gap-6 justify-center items-center'>
       <div className=' justify-center  items-center text-center'>
        <img className="w-16 h-16 mx-auto mb-4 fill-blue-500" src="./lap-blue.png"  alt="" />
        <h1 className='mb-2 text-[20px] font-bold'>RESPONSIVE LAYOUT</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
       </div>
       <div className=' justify-center items-center text-center '>
        <img className="w-16 h-16 mx-auto mb-4 fill-blue-500" src="./twitter-bird.png" alt="" />
        <h1 className='mb-2 text-[20px] font-bold' >BOOTSTRAP 3.3.4</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
       </div>
       <div className=' justify-center  items-center text-center '>
        <img className="w-16 h-16 mx-auto mb-4 fill-blue-500" src="./font-icon.png" alt="" />
        <h1 className='mb-2 text-[20px] font-bold'>GOOGLE FONT</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
       </div>
      </div>
    </motion.div>
  )
}

export default Subhero