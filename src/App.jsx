import React from 'react'
import Navbar from "./Componants/Navbar";
import Hero from "./Componants/Hero";
import Pricing from "./Componants/Pricing";
import Footer from "./Componants/Footer";
import Features from "./Componants/Features";
import Testmonations from "./Componants/Testmonations";
import './App'; // أو اسم ملف الـ CSS الذي وضعت فيه Tailwind
const App = () => {
  return (
            <>
                <Navbar/>
                {/* <Hero/>
                <Pricing/>
                <Features/>
                <Testmonations/>
                <Footer/> */}
            </>
  )
}

export default App