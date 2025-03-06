import React from 'react'

const Download = () => {
  return (
    <div className='overflow-hidden py-15 px-4 md:px-20 lg:px-32' id='Download' >
        
    <div className='container flex-col md:flex-row lg:flex'>
        <div className='mb-6'>
         <h2 className='text-lg font-bold md:text-3xl mb-6 text-start'>DOWNLOAD OUR SOFTWARE</h2>
         <p className='text-gray-500 mb-8'>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit, sed do eiusmod 
             tempor incididunt ut labore et dolore magna aliqua.</p>
         <button type='submit' className='border text-blue-700 hover:text-white hover:font-bold
         ease-in-out duration-1000 hover:bg-blue-700 border-blue-700 rounded px-8 py-1 '>DOWNLOAD</button>
         </div>
         <div>
            <img src='./software-img.png' className='px-4 md:px-20 lg:px-10' alt="" />
         </div>
    </div>
    </div>
  )
}

export default Download