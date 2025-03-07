import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='min-h-screen bg-cover overflow-hidden relative py-6 px-4 md:px-20 lg:px-30 mx-auto justify-center items-center' 
    id='Contact' style={{backgroundImage: 'url("./contact-bg.jpg")'}}>
        <div className='bg-black/50 absolute inset-0'></div>
     <div className='relative text-white items-center gap-4 flex-col md:flex-row lg:flex justify-center pt-40 mx-auto'>
       
        <motion.div
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className='items-center justify-center w-1/2'>
            <h2 className='text-lg md:text-3xl mb-8 font-bold md:text-left'>CONTACT US</h2>
            <p className='mb-10'>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit, sed do eiusmod 
             tempor incididunt ut labore et dolore magna aliqua.
             consectetur adipisicing elit</p>
             <p className='mb-5'>36 street name,Vienna, Austria</p>
             <p className='mb-5'>+234 907 021 7736</p>
             <p className='mb-5'>tosinjosephoffice2@gmail.com</p>
        </motion.div>
        
        <motion.div
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className=''>
            <div className='flex flex-wrap justify-center gap-6 items-center mx-auto'><input placeholder='Name'  className='bg-white px-2 rounded w-50 h-12  text-black ' type="text" /><span><input placeholder='Email' className='bg-white rounded px-2 text-black w-50 h-12' type="email" /></span></div>
            <input type="text" placeholder='Subject' className='bg-white rounded w-full justify-start px-2 text-black mt-6 h-12'/>
            <textarea placeholder='Message' className='bg-white px-2 rounded mt-6 w-full h-30 text-black' name="message" id=""></textarea>
            <button type='submit' className='justify-start border border-blue-700 rounded px-2
            ease-in-out duration-1000 hover:bg-white hover:text-black cursor-pointer bg-blue-700 py-2 px-10 mt-4'>SUBMIT</button>
        </motion.div>
        
     </div>

    </div>
  )
}

export default Contact