"use client"
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Footer = () => {
  const [languageOpen, setLanguageOpen] = useState(false)

  const links = [
    {
      title: 'Kolumna 1',
      items: [
        'Często zadawane pytania',
        'Relacje z inwestorami',
        'Jak oglądać?',
        'Informacje o firmie',
        'Informacje prawne'
      ]
    },
    {
      title: 'Kolumna 2',
      items: [
        'Centrum pomocy',
        'Praca',
        'Warunki korzystania',
        'Skontaktuj się z nami',
        'Tylko w Netflixie'
      ]
    },
    {
      title: 'Kolumna 3',
      items: [
        'Konto',
        'Zrealizuj karty podarunkowe',
        'Prywatność',
        'Test prędkości połączenia',
        'Ustawienia reklam'
      ]
    },
    {
      title: 'Kolumna 4',
      items: [
        'Media Center',
        'Kup karty podarunkwe',
        'Ustawienia plików cookie',
        'Gwarancja prawna'
      ]
    }
  ]

  return (
    <footer className="w-full bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto w-full text-gray-400">
        
        {/* Phone Number */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <p className='text-xs sm:text-sm lg:text-base leading-relaxed'>
            Pytania? Zadzwoń pod numer{" "}
            <a 
              href="tel:008001124392" 
              className='text-white hover:text-gray-300 underline transition-colors duration-200'
            >
              00 800 112 4392
            </a>
          </p>
        </div>

        {/* Links Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12'>
          {links.map((column, idx) => (
            <div key={idx} className="w-full">
              <ul className='flex flex-col space-y-1.5 sm:space-y-2 lg:space-y-3'>
                {column.items.map((item, itemIdx) => (
                  <li 
                    key={itemIdx}
                    className='text-xs sm:text-sm lg:text-base text-gray-400 hover:text-white underline cursor-pointer transition-colors duration-200'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Language Button */}
        <div className="mb-8 sm:mb-10 lg:mb-12 relative">
          <button 
            onClick={() => setLanguageOpen(!languageOpen)}
            className='flex items-center gap-2 sm:gap-3 bg-black/60 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-md border border-white/30 text-xs sm:text-sm lg:text-base font-semibold hover:bg-black/80 hover:border-white/50 transition-all duration-200 backdrop-blur-sm group'
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <path d="m5 8 6 6"/>
              <path d="m4 14 6-6 2-3"/>
              <path d="M2 5h12"/>
              <path d="M7 2h1"/>
              <path d="m22 22-5-10-5 10"/>
              <path d="M14 18h6"/>
            </svg>  
            <span className="hidden sm:inline">Polski</span>
            <ChevronDown 
              size={18} 
              className={`flex-shrink-0 transition-transform duration-300 ${languageOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown Menu */}
          {languageOpen && (
            <div className="absolute top-full left-0 mt-2 bg-black/95 border border-white/20 rounded-md shadow-lg backdrop-blur-sm z-10 animate-in fade-in slide-in-from-top-2 duration-200">
              <button className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-gray-800/40 transition-colors duration-200">English</button>
              <button className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-gray-800/40 transition-colors duration-200">Français</button>
              <button className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-gray-800/40 transition-colors duration-200">Deutsch</button>
              <button className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-gray-800/40 transition-colors duration-200">Español</button>
            </div>
          )}
        </div>

        {/* Company Name */}
        <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-800/50">
          <p className='text-xs sm:text-sm text-gray-400 font-semibold'>Netflix Polska</p>
        </div>

        {/* Footer Info */}
        <div className="space-y-4 sm:space-y-6">
          <p className='text-xs sm:text-sm text-gray-500 leading-relaxed'>
            Ta strona korzysta z zabezpieczenia Google reCAPTCHA, by upewnić się, że nie jesteś botem.{" "}
            <button className='text-blue-500 hover:text-blue-400 underline transition-colors duration-200'>
              Dowiedz się więcej.
            </button>
          </p>

          {/* Additional Footer Info */}
          <p className='text-xs text-gray-600'>
            © 2024 Netflix Polska. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer