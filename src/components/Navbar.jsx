import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const[showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(()=>{
    
  },[])
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
       
        <img onClick={()=>setShowMobileMenu(true)} src="./menu_icon.svg" className='z-25 cursor-pointer w-8  md:hidden filter invert' alt="" />  
    </div>
    <div className={`fixed ${showMobileMenu? ' w-full' : 'hidden '} md:hidden top-0 bottom-0 left-0 bg-white  `}>
    <div className='flex justify-end p-4'>
    <img onClick={()=>setShowMobileMenu(false)} src="./cross_icon.svg" className='z-27 hover:scale-110 cursor-pointer w-8 md:hidden ' alt="" />
    </div>
      <ul className='z-25 flex flex-col w-full text-center  '>
      <a className="hover:text-blue-700 mb-2 hover:font-bold text-sm" href='#Home' >HOME</a>
          <a className="hover:text-blue-700 mb-2 hover:font-bold  text-sm" href='#Feature' >FEATURES</a>
          <a className="hover:text-blue-700 mb-2 hover:font-bold  text-sm" href='#Pricing' >PRICING</a>
          <a className="hover:text-blue-700 mb-2 hover:font-bold text-sm" href='#Download' >DOWNLOAD</a>
          <a className="hover:text-blue-700 mb-2 hover:font-bold text-sm" href='#Contact'>CONTACT</a> 
      </ul>
    
      </div>
    </div>
  )
}

export default Navbar