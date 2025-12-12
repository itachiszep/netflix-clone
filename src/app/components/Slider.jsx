"use client";

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

  const getItemDimensions = () => {
    if (window.innerWidth < 640) {
      return { itemWidth: 140, gap: 10, visibleItems: 1.8 }
    } else if (window.innerWidth < 768) {
      return { itemWidth: 170, gap: 12, visibleItems: 2.5 }
    } else if (window.innerWidth < 1024) {
      return { itemWidth: 200, gap: 14, visibleItems: 3.5 }
    } else {
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

  const itemHeight = itemWidth * 1.33

  return (
    <div className="w-full bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      {/* Title */}
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0">
        Popularne teraz
      </h2>

      …
      {/* (Twój kod niezmieniony dalej) */}
      …
    </div>
  )
}

export default Slider
