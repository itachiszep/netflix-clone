"use client"
import React, { useState } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="w-full">
      {/* Background with overlay */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/NL-nl-20251124-TRIFECTA-perspective_a877b0ac-5465-455a-b1f6-14e5c749c5cf_large.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        {/* Header/Navigation */}
        <div className='absolute z-50 top-0 left-0 right-0'>
          <div className='flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <img 
                src="/images/logo.png" 
                width={130}
                className="sm:w-[170px] w-[100px] h-auto"
                alt="Netflix Logo" 
              />
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-3'>
              <button className='flex items-center gap-2 bg-black/60 text-white px-3 sm:px-4 py-2 rounded-md border border-white/30 font-semibold text-sm hover:bg-black/80 hover:border-white/50 transition-all duration-200 backdrop-blur-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 8 6 6"/>
                  <path d="m4 14 6-6 2-3"/>
                  <path d="M2 5h12"/>
                  <path d="M7 2h1"/>
                  <path d="m22 22-5-10-5 10"/>
                  <path d="M14 18h6"/>
                </svg>  
                <span className="hidden sm:inline text-xs sm:text-sm">Polski</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <button className='text-white bg-red-600 font-bold rounded-md px-5 sm:px-6 py-2 text-sm hover:bg-red-700 active:bg-red-800 transition-all duration-200'>
                Zaloguj się
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='md:hidden text-white p-2 hover:bg-white/20 rounded-md transition-all duration-200'
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className='md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10'>
              <div className='flex flex-col gap-3 px-4 py-4'>
                <button className='flex items-center justify-center gap-2 bg-black/60 text-white px-3 py-2 rounded-md border border-white/30 font-semibold text-sm hover:bg-black/80 transition-all duration-200 w-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 8 6 6"/>
                    <path d="m4 14 6-6 2-3"/>
                    <path d="M2 5h12"/>
                    <path d="M7 2h1"/>
                    <path d="m22 22-5-10-5 10"/>
                    <path d="M14 18h6"/>
                  </svg>  
                  <span>Polski</span>
                </button>
                <button className='text-white bg-red-600 font-bold rounded-md px-4 py-2 text-sm hover:bg-red-700 transition-all duration-200 w-full'>
                  Zaloguj się
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className="relative h-full min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-8 sm:pb-12">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
            {/* Main Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg'>
              Filmy, seriale i wiele więcej bez ograniczeń
            </h1>

            {/* Subtitle */}
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 font-semibold drop-shadow-md'>
              Już od 33 zł. Anuluj w każdej chwili.
            </p>

            {/* Description */}
            <p className='text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 drop-shadow-md'>
              Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto
            </p>
            
            {/* Email Input & Button */}
            <div className="w-full max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input 
                  type="email"
                  placeholder="Adres e-mail"
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-800/80 text-white border border-white/20 placeholder-gray-400 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-700 focus:border-white/40 transition-all duration-200 backdrop-blur-sm min-h-[44px] sm:min-h-auto"
                />
                <button 
                  className="px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 font-bold text-base sm:text-lg lg:text-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-md transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px] sm:min-h-auto drop-shadow-lg hover:shadow-lg"
                >
                  <span>Rozpocznij</span>
                  <ChevronRight size={22} className="hidden sm:inline" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection