"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const testimonials = [
  {
    id: 1,
    text: "Working with your design team was an absolute pleasure. The attention to detail and quality surpassed my expectations. I would highly recommend your services to anyone.",
    name: "Sophie Carter",
    role: "Interior Design Client",
    color: "from-[#008080] to-[#006060]",
  },
  {
    id: 2,
    text: "Exceptional service. I love the detail orientation in the final result, your team's organizational implementation and a keen eye for aesthetics made all the difference.",
    name: "James Barrett",
    role: "Commercial Client",
    color: "from-[#333333] to-[#1a1a1a]",
  },
  {
    id: 3,
    text: "The team at InDecor transformed our space beyond our wildest dreams. Their ability to understand our vision and bring it to life was remarkable. We couldn't be happier with the results.",
    name: "Emily Johnson",
    role: "Residential Client",
    color: "from-[#E07A5F] to-[#C05A3F]",
  },
  {
    id: 4,
    text: "Professional, creative, and attentive to every detail. The design process was smooth and the end result exceeded our expectations. Our office space now perfectly reflects our brand.",
    name: "Michael Chen",
    role: "Corporate Client",
    color: "from-[#D4AF37] to-[#B49017]",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Handle window resize for responsive design
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  useEffect(() => {
    // Determine how many testimonials to show based on screen width
    const itemsToShow = windowWidth < 768 ? 1 : 2

    // Update visible testimonials
    const startIndex = activeIndex
    let endIndex = startIndex + itemsToShow

    // Handle wrapping around to the beginning
    if (endIndex > testimonials.length) {
      endIndex = testimonials.length
    }

    setVisibleTestimonials(testimonials.slice(startIndex, endIndex))
  }, [activeIndex, windowWidth])

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold mb-8 text-[#333333] relative inline-block"
      >
        What Our Customers Say About Us
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#D4AF37]"></span>
      </motion.h2>

      <div className="relative">
        <div className="grid md:grid-cols-2 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${testimonial.color} text-white p-8 rounded-xl shadow-lg transition-all duration-300`}
            >
              <div className="text-5xl text-[#D4AF37] mb-4">"</div>
              <p className="mb-8 text-white/90">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20"></div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, backgroundColor: "#f1f1f1" }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 border border-[#e5e5e5] rounded-full flex items-center justify-center transition-all duration-300 bg-white shadow-md"
          >
            <ChevronLeft size={18} className="text-[#008080]" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, backgroundColor: "#f1f1f1" }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 border border-[#e5e5e5] rounded-full flex items-center justify-center transition-all duration-300 bg-white shadow-md"
          >
            <ChevronRight size={18} className="text-[#008080]" />
          </motion.button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#008080] w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
