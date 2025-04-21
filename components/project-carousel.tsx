"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    description: "A clean, minimalist approach with neutral tones and strategic accent pieces.",
    image: "/outdoor.jpg?height=400&width=600&text=Modern+Minimalist+Living+Room",
  },
  {
    id: 2,
    title: "Luxurious Master Bedroom",
    description: "Opulent textures and rich colors create a sanctuary of comfort and style.",
    image: "/interior.jpg?height=400&width=600&text=Luxurious+Master+Bedroom",
  },
  {
    id: 3,
    title: "Contemporary Kitchen Design",
    description: "Sleek cabinetry and state-of-the-art appliances for the modern chef.",
    image: "/lighting.jpg?height=400&width=600&text=Contemporary+Kitchen+Design",
  },
  {
    id: 4,
    title: "Elegant Office Space",
    description: "Productivity meets sophistication in this carefully curated workspace.",
    image: "/bedroom.jpg?height=400&width=600&text=Elegant+Office+Space",
  },
  {
    id: 5,
    title: "Outdoor Patio Oasis",
    description: "Bringing indoor comfort to outdoor living with durable, stylish elements.",
    image: "/kitchen.jpg?height=400&width=600&text=Outdoor+Patio+Oasis",
  },
]

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleProjects, setVisibleProjects] = useState<{ id: number; title: string; description: string; image: string }[]>([])
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
    // Determine how many projects to show based on screen width
    let itemsToShow = 1
    if (windowWidth >= 1024) {
      itemsToShow = 3
    } else if (windowWidth >= 768) {
      itemsToShow = 2
    }

    // Update visible projects
    const startIndex = activeIndex
    const endIndex = startIndex + itemsToShow

    // Handle wrapping around to the beginning
    const visibleItems = []
    for (let i = 0; i < itemsToShow; i++) {
      const index = (startIndex + i) % projects.length
      visibleItems.push(projects[index])
    }

    setVisibleProjects(visibleItems)
  }, [activeIndex, windowWidth])

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  return (
    <section className="container mx-auto px-4 py-16 bg-[#f9f9f9] rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333333]">Our Featured Projects</h2>
        <p className="text-[#545454] max-w-2xl mx-auto">
          Browse through our portfolio of completed projects to get inspired for your next interior transformation.
        </p>
      </motion.div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">{project.title}</h3>
                <p className="text-[#545454] text-sm">{project.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#008080] font-medium text-sm flex items-center mt-4"
                >
                  View Project
                  <ChevronRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, backgroundColor: "#f1f1f1" }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 border border-[#e5e5e5] rounded-full flex items-center justify-center transition-all duration-300 bg-white shadow-md"
          >
            <ChevronLeft size={20} className="text-[#008080]" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, backgroundColor: "#f1f1f1" }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 border border-[#e5e5e5] rounded-full flex items-center justify-center transition-all duration-300 bg-white shadow-md"
          >
            <ChevronRight size={20} className="text-[#008080]" />
          </motion.button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-4">
          {projects.map((_, index) => (
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
