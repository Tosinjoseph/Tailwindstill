import React from 'react'
import {motion} from 'framer-motion'

const Pricing = () => {
  return (
    <div className='justify-center bg-gray-100 items-center py-4 mx-auto px-4 md:px-14 lg:px-25' id='Pricing'>
        <motion.h1
        initial={{ opacity: 0, y: -100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className='text-xl lg:text-3xl font-bold w-full mx-auto text-center'>OUR PRICING</motion.h1>
        <div className='flex-col gap-8 md:flex-row lg:flex '>
       
        <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className='mt-20 mb-10 py-4 shadow-2xl  w-1/2 md:w-1/3 lg:w-1/3  mx-auto justify-center items-center'>
            <div className='flex-col text-center py-8 h-40 bg-blue-700 text-white w-full'>
                <h3 className='font-bold text-lg mb-2'>BASIC PLAN</h3>
                <span className='font-bold text-lg block mb-2'>&11</span>
                <p className='font-bold mb-2'>Monthly</p>
            </div>
            <div className='flex-col text-center bg-white w-full '>
                <h3 className='mb-6 pt-6'>6GB SPACE</h3>
                <span className='mb-6 block'>600GB BANDWIDTH</span>
                <h3 className='mb-6'>60 MORE THEMES</h3>
                <span className='mb-6 block'>LIFETIME SUPPORT</span>
                <button className="border hover:text-white hover:bg-blue-700
                 cursor-pointer ease-in-out duration-1000 justify-center items-center mx-auto text-blue-700 border-blue-700 rounded bg-white px-8 py-1" type='submit'>SIGN UP</button>
            </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: -100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className='mt-15 mb-15 py-4 shadow-2xl  w-1/2 md:w-1/3 lg:w-1/3  mx-auto justify-center items-center'>
            <div className='flex-col text-center py-8 h-40 bg-blue-700 text-white w-full'>
                <h3 className='font-bold text-lg mb-2'>BUSINESS PLAN</h3>
                <span className='font-bold text-lg block mb-2'>&22</span>
                <p className='font-bold mb-2'>Monthly</p>
            </div>
            <div className='flex-col text-center bg-white w-full'>
                <h3 className='mb-6 pt-6'>15GB SPACE</h3>
                <span className='mb-6 block'>600GB BANDWIDTH</span>
                <h3 className='mb-6'>60 MORE THEMES</h3>
                <span className='mb-6 block'>LIFETIME SUPPORT</span>
                <button className="border hover:text-white hover:bg-blue-700
                 cursor-pointer ease-in-out duration-1000 text-blue-700 border-blue-700 rounded bg-white px-8 py-1" type='submit'>SIGN UP</button>
            </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className='mt-20 mb-10 py-4 shadow-2xl w-1/2 md:w-1/3 lg:w-1/3 mx-auto justify-center items-center'>
            <div className='flex-col text-center py-8 h-40 bg-blue-700 text-white w-full'>
                <h3 className='font-bold text-lg mb-2'>PRO PLAN</h3>
                <span className='font-bold text-lg block mb-2'>&11</span>
                <p className='font-bold mb-2'>Monthly</p>
            </div>
            <div className='flex-col text-center bg-white w-full'>
                <h3 className='mb-6 pt-6'>35GB SPACE</h3>
                <span className='mb-6 block'>600GB BANDWIDTH</span>
                <h3 className='mb-6'>60 MORE THEMES</h3>
                <span className='mb-6 block'>LIFETIME SUPPORT</span>
                <button className="border hover:text-white hover:bg-blue-700
                 cursor-pointer ease-in-out duration-1000 text-blue-700 border-blue-700 rounded bg-white px-8 py-1" type='submit'>SIGN UP</button>
            </div>
        </motion.div>

        </div>
    </div>
  )
}

export default Pricing