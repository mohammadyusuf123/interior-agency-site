"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "/living-space.jpg?height=800&width=1600&text=Luxurious+Bedrooms",
    title: "Elegant Living Spaces",
    subtitle: "Transform your home with our award-winning designs",
  },
  {
    id: 2,
    image: '/kitchen.jpg?height=600&width=1600&text=Modern+Kitchen+Designs',
    title: "Modern Kitchen Designs",
    subtitle: "Functional and beautiful kitchens for the modern home",
  },
  {
    id: 3,
    image: "/bedroom.jpg?height=600&width=1600&text=Luxurious+Bedrooms",
    title: "Luxurious Bedrooms",
    subtitle: "Create your perfect sanctuary for rest and relaxation",
  },
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }, [])

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play when user interacts with slider
  const handleInteraction = () => {
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
              src={slides[currentIndex].image || "https://via.placeholder.com/1600x600?text=Image+Unavailable"}
            alt={slides[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Text overlay */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-2">{slides[currentIndex].title}</h2>
            <p className="text-lg md:text-xl">{slides[currentIndex].subtitle}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={() => {
          prevSlide()
          handleInteraction()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => {
          nextSlide()
          handleInteraction()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              handleInteraction()
            }}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "w-6 bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
