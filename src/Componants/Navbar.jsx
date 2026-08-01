import React from 'react'

const Navbar = () => {
  return (
    // start the header
    <header className='fixed top-0 right-0 left-0 backdrop-blur-sm border-b z-50'>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* container */}

        <div className='flex  justify-between items-center h-20 '>

            {/* logo */}
            <div className='text-xl font-bold text-white'>
              workflow
            </div>
            {/* logo */}
            
            {/* Navigation links */}
            <nav className='flex flex-col'>
              <a href="#Features" className='text-slate-300 hover:text-white'>Features</a>
              <a href="#Pricing" className='text-slate-300 hover:text-white'>Pricing</a>
              <a href="#Testimonials" className='text-slate-300 hover:text-white'>Testimonials</a>
            </nav>
            {/* Navigation links */}

        </div>
        
      </div>

    </header>
    
  
  )
}

export default Navbar