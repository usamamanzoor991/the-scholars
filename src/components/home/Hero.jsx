import React from 'react'
import { CiMap } from "react-icons/ci";

const Hero = () => {
  return (
    <div id='hero' className='relative w-full flex items-center justify-center pt-24 pb-4 px-6 overflow-hidden'>
      <img
        src="/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ zIndex: 0, transform: 'translateZ(0)' }}
      // ↑ translateZ(0) promotes this specific img to its own compositor layer
      />
      <div className="absolute inset-0 bg-white/95 pointer-events-none" style={{ zIndex: 1 }} />
      <div className='relative z-20 container flex md:flex-row flex-col items-center justify-between gap-4'>
        <div className='md:w-[50%] flex flex-col items-baseline justify-center gap-4'>
          <h1 className='bg-secondary px-4 py-1 rounded-full text-[#3F1E8C] label-bold'>Admission Open</h1>
          <h1 className='display-xl'>Nurturing Independence and Natural Curiosity from <span className='text-primary'>Toddler to 8th Grade</span></h1>
          <h1 className='label-bold text-black'>A premium Montessori education focused on self-directed learning, collaborative play, and holistic academic excellence in a Scandi-inspired environment.</h1>
          <div className='w-full flex items-center justify-evenly gap-4'>
            <button
              className='body-lg lg:text-base md:text-xs sm:text-base text-xs bg-primary text-dark-primary lg:px-10 lg:py-4 md:px-4 sm:px-10 sm:py-4 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95'
              onClick={() => window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hello%20I%20want%20to%20know%20about%20your%20%20school`, "_blank")}
            >
              Inquire Today
            </button>
            <button
              className='gap-2 flex items-center justify-center body-lg lg:text-base md:text-xs sm:text-base text-xs border-2 border-primary text-black lg:px-10 lg:py-[15px] md:px-4 sm:px-10 sm:py-[15px] px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer'
              onClick={() => window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hello%20I%20want%20to%20take%20a%20tour%20of%20your%20school`, "_blank")}
            >
              <CiMap className='size-4' />
              <span>Book a Campus Tour</span>
            </button>
          </div>
        </div>
        <img src="/hero-left.png" alt="Hero-Right" loading="eager" className='md:w-[50%] h-[500px] object-contain' />
      </div>
    </div>
  )
}

export default Hero;