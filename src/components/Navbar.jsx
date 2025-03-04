import React from 'react'

const Navbar = () => {
  return (
    <div className='top-0 left-0  right-0 absolute z-10 w-full '>
    <div className=' right-0 w-full px-6 md:px-20 lg:px-28 py-4
     flex justify-between items-center mx-auto bg-white fixed'>
        <span className='text-blue-700 font-bold text-2xl'>D-Answer</span>
        <ul className='md:flex  gap-4 hidden  text-sm'>
          <a className="hover:text-blue-700  text-sm" href='#Home' >HOME</a>
          <a className="hover:text-blue-700  text-sm" href='#Feature' >FEATURES</a>
          <a className="hover:text-blue-700  text-sm" href='#Pricing' >PRICING</a>
          <a className="hover:text-blue-700  text-sm" href='#Download' >DOWNLOAD</a>
          <a className="hover:text-blue-700  text-sm" href='#Contact'>CONTACT</a>
        </ul>
    </div>
    </div>
  )
}

export default Navbar