import React, { useState, useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Hero = () => {
  const [mouseposition, setmouseposition] = useState({ x: 0, y: 0 })
  const [activetap, setactivetap] = useState('app.jsx')

  useEffect(() => {
    function handlemouse(e) {
      setmouseposition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handlemouse)
    return () => window.removeEventListener("mousemove", handlemouse)
  }, [])

  return (
    <section className='relative min-h-screen flex justify-center items-center pt-16 bg-blue-800'>
      <div 
        className='absolute inset-0 opacity-30 pointer-events-none' 
        style={{ background: `radial-gradient(600px circle at ${mouseposition.x}px ${mouseposition.y}px, rgba(255, 255, 255, 0.25), transparent 80%)` }}
      />
      
      <div className='relative flex justify-center w-full order-2'>
        <div className='relative bg-white/5 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10 overflow-hidden'>
          <div className='bg-gradient-to-br rounded-2xl border border-white/5 p-1 from-gray-900/20 to-gray-800/20 backdrop-blur-xl h-[280px] w-[350px]'> 
            {/* Header */}
            <div className='flex items-center justify-between px-3 h-10 bg-white/5 border-b border-white/10'>
              {/* محتوى الهيدر هنا */}
              <div className='flex space-x-1 items-center justify-between'>
                <div className='bg-red-500 h-2 w-2 rounded-full'></div>
                <div className='bg-yellow-500 h-2 w-2 rounded-full'></div>
                <div className='bg-green-500 h-2 w-2 rounded-full'></div>
              </div>
              <span className='text-white font-bold'>
                CodeFlow Ai
              </span>
            </div>
            <div className='flex gap-2 items-center pt-2 pl-2'>
              <button onClick={()=>setactivetap('app.jsx')} className={`rounded-t-2xl ${activetap==='app.jsx' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white-10'} cursor-pointer border border-white p-3 backdrop-blur-sm`}>app.jsx</button>
              <button onClick={()=>setactivetap('navbar.jsx')} className={`rounded-t-2xl ${activetap === 'navbar.jsx' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'} cursor-pointer border p-3 backdrop-blur-sm`}>navbar.jsx</button>
              <button onClick={()=>setactivetap('header.jsx')} className={`rounded-t-2xl ${activetap==='header.jsx' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white-10'} cursor-pointer border border-white p-3 backdrop-blur-sm`}>header.jsx</button>
            </div>
            <SyntaxHighlighter language='javescript' style={nightOwl}>
              {codeExamples[activetap]}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero