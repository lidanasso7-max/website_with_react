import React, { useState } from 'react'
import { Menu , X } from 'lucide-react'
const Navbar = () => {
  const [isopen ,setisopen]=useState(false)
  return (
    // start the header
    <header className='fixed top-0 right-0 left-0 bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50'>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* container */}

        <div className='flex  justify-between  items-center h-20 '>

            {/* logo */}
            <div className=' flex  items-center text-xl font-bold cursor-pointer'>
              <span className='text-blue-800'>work</span>
              <span className='text-yellow-800'>flow</span>
            </div>
            {/* logo */}
            
            {/* Navigation links */}
            <nav className='hidden sm:flex bg-white-100 items-center gap-3 '>
              
              <a href="#Features"     onClick={()=>setisopen(false)} className='text-slate-400 hover:text-black' >Features    </a>
              <a href="#Pricing"      onClick={()=>setisopen(false)} className='text-slate-400 hover:text-black' >Pricing     </a>
              <a href="#Testimonials" onClick={()=>setisopen(false)} className='text-slate-400 hover:text-black' >Testimonials</a>
            
            </nav>
            {/* Navigation links */}
           

            {/* the button of the menu */}
            <div className='sm:hidden  flex items-center '>
              <button  onClick={() => setisopen((prev) => !prev)}className='text-blue-700 cursor-pointer  p-3 focus:outline-none' >{isopen ? <X size={28}/> : <Menu size={28}/>}</button>
            </div>
        </div>
        
      </div>
{isopen && (
    <div className='flex flex-col bg-gray-300 items-end pr-5 pt-4 pb-4 sm:hidden animation animation-in slide-in-from-top duration-300'>
    <a href="#Features" className='text-slate-400 hover:text-black'>Features</a>
              <a href="#Pricing" className='text-slate-400 hover:text-black'>Pricing</a>
              <a href="#Testimonials" className='text-slate-400 hover:text-black'>Testimonials</a>
    </div>
)}
    </header>
    
  
  )
}

export default Navbar