"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useState, useRef, useEffect } from "react"

const Slider = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const scrollContainerRef = useRef(null)

  const items = [
    { id: 1, image: "/images/photo1.jpg", title: "5", subtitle: "DOKTORA\nRAFAL PACZES" },
    { id: 2, image: "/images/photo2.jpg", title: "6", subtitle: "IEDZMIN" },
    { id: 3, image: "/images/photo3.jpg", title: "7", subtitle: "TROLL2" },
    { id: 4, image: "/images/photo4.jpg", title: "8", subtitle: "Frankenstein" },
    { id: 5, image: "/images/photo5.jpg", title: "9", subtitle: "VI" },
  ]

  // Responsive item dimensions
  const getItemDimensions = () => {
    if (window.innerWidth < 640) { // sm
      return { itemWidth: 140, gap: 10, visibleItems: 1.8 }
    } else if (window.innerWidth < 768) { // md
      return { itemWidth: 170, gap: 12, visibleItems: 2.5 }
    } else if (window.innerWidth < 1024) { // lg
      return { itemWidth: 200, gap: 14, visibleItems: 3.5 }
    } else { // xl
      return { itemWidth: 240, gap: 16, visibleItems: 4.5 }
    }
  }

  const [dimensions, setDimensions] = useState(getItemDimensions())

  useEffect(() => {
    const handleResize = () => {
      const newDimensions = getItemDimensions()
      setDimensions(newDimensions)
      setIsMobile(window.innerWidth < 768)
      setScrollPosition(0)
    }

    window.addEventListener("resize", handleResize)
    setIsMobile(window.innerWidth < 768)
    
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { itemWidth, gap, visibleItems } = dimensions
  const itemWithGap = itemWidth + gap
  const maxScroll = Math.max((items.length - visibleItems) * itemWithGap, 0)

  const handleScrollLeft = () => {
    const newPosition = Math.max(scrollPosition - itemWithGap * 2, 0)
    setScrollPosition(newPosition)
  }

  const handleScrollRight = () => {
    const newPosition = Math.min(scrollPosition + itemWithGap * 2, maxScroll)
    setScrollPosition(newPosition)
  }

  const canScrollLeft = scrollPosition > 0
  const canScrollRight = scrollPosition < maxScroll

  const itemHeight = itemWidth * 1.33 // 4:3 aspect ratio

  return (
    <div className="w-full bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      {/* Title */}
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0">
        Popularne teraz
      </h2>

      {/* Slider Container */}
      <div className="relative w-full flex justify-center">
        {/* Left Button */}
        {canScrollLeft && !isMobile && (
          <button 
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 backdrop-blur-sm p-2 sm:p-3 z-20 transition-all duration-200 rounded-r-lg group"
            aria-label="Scroll left"
          >
            <ChevronLeft 
              size={isMobile ? 20 : 28} 
              className="text-white group-hover:scale-125 transition-transform duration-200" 
            />
          </button>
        )}

        {/* Scroll Container */}
        <div 
          className="overflow-hidden w-full max-w-7xl"
          ref={scrollContainerRef}
        >
          <div 
            className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out justify-center"
            style={{ 
              transform: `translateX(-${scrollPosition}px)`,
              willChange: 'transform'
            }}
          >
            {items.map((item, index) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 relative group cursor-pointer"
                style={{ width: itemWidth }}
              >
                {/* Card Container */}
                <div 
                  className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:z-10"
                  style={{ height: itemHeight }}
                >
                  {/* Image */}
                  <img 
                    src={item.image} 
                    alt={`Popular ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3">
                    <div className="text-white">
                      {/* Large Number */}
                      <span 
                        className="font-black block leading-none mb-1 sm:mb-2"
                        style={{
                          fontSize: isMobile ? "60px" : itemWidth > 200 ? "120px" : "80px",
                          color: "black",
                          WebkitTextStroke: "2px white",
                          textStroke: "2px white",
                          paintOrder: "stroke fill",
                          lineHeight: "0.8",
                          marginLeft: "-6px"
                        }}
                      >
                        {item.title}
                      </span>

                      {/* Subtitle */}
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-pre-line block leading-tight">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        {canScrollRight && !isMobile && (
          <button 
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 backdrop-blur-sm p-2 sm:p-3 z-20 transition-all duration-200 rounded-l-lg group"
            aria-label="Scroll right"
          >
            <ChevronRight 
              size={isMobile ? 20 : 28} 
              className="text-white group-hover:scale-125 transition-transform duration-200" 
            />
          </button>
        )}
      </div>

      {/* Mobile Scroll Indicator */}
      {isMobile && (
        <div className="mt-4 flex justify-center gap-1.5">
          {items.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === Math.round(scrollPosition / itemWithGap)
                  ? "bg-red-600 w-6"
                  : "bg-white/30 w-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Slider