import React, { useState } from 'react'
import { Menu , X } from 'lucide-react'
const Navbar = () => {
  const [isopen ,setisopen]=useState(false)
  return (
    // start the header
    <header className='fixed top-0 right-0 left-0 backdrop-blur-sm border-b z-50'>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* container */}

        <div className='flex  justify-between  items-center h-20 '>

            {/* logo */}
            <div className=' flex justifey-btween items-center text-xl font-bold cursor-pointer'>
              <span className='text-blue-800'>work</span>
              <span className='text-yellow-800'>flow</span>
            </div>
            {/* logo */}
            
            {/* Navigation links */}
            <nav className='hidden sm:flex items-center gap-3 '>
              <a href="#Features" className='text-slate-400 hover:text-black'>Features</a>
              <a href="#Pricing" className='text-slate-400 hover:text-black'>Pricing</a>
              <a href="#Testimonials" className='text-slate-400 hover:text-black'>Testimonials</a>
            </nav>
            {/* Navigation links */}
           

            {/* the button of the menu */}
            <div className='sm:hidden  flex items-center '>
              <button  onClick={(prev)=>{setisopen(!prev)}} className='text-slate-3000 hover:text-red p-3 focus:outline-none'>{isopen ? <X size={28}/> : <Menu size={28}/>}</button>
              

            </div>
        </div>
        
      </div>

    </header>
    
  
  )
}

export default Navbar