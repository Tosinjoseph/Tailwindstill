import React from 'react'

const Features = () => {
  return (
    <div id='Feature'>
    <div className='overflow-hidden items-center mx-auto flex-col md:flex lg:flex-row py-14 w-full gap-12   px-4 md:px-20 lg:px-32 bg-gray-100'>
     <div>
      <h2 className='text-xl lg:text-3xl font-bold text-black mb-6'>OUR SOFTWARE FEATURES</h2>
      <p className='mb-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className='flex gap-2'>
        <span className='w-11 h-6 bg-blue-700 rounded-full' />
        <p className='text-gray-500 mb-4'>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit, sed do eiusmod 
             tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='flex gap-2'>
        <span  className='w-6 h-6 bg-blue-700 rounded-full'/>
     <p className='text-gray-500 mb-4'>Quis autem velis reprehenderit et quis voluptate velit esse quam.</p>
      </div>
     </div>
     <div>
        <img src="./software-img.png" alt="" />
     </div>
    </div>

    {/*second software component */}

    <div className='overflow-hidden items-center  flex-col md:flex lg:flex-row py-14 w-full gap-12   px-4 md:px-20 lg:px-32 bg-white'>
    
     <div className='order-1 md:order-2'>
      <h2 className='text-xl lg:text-3xl font-bold text-black mb-6'>MORE OF YOUR SOFTWARE </h2>
      <p className='mb-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className='flex gap-2'>
        <span className='w-11 h-6 bg-blue-700 rounded-full' />
        <p className='text-gray-500 mb-4'>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit, sed do eiusmod 
             tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='flex gap-2'>
        <span  className='w-6 h-6 bg-blue-700 rounded-full'/>
     <p className='text-gray-500 mb-4'>Quis autem velis reprehenderit et quis voluptate velit esse quam.</p>
      </div>
     </div>
     <div className='mb-6 '>
        <img src="./software-img.png" alt="" />
     </div>
    </div>
    </div>
  )
}

export default Features