"use client"

import Image from "next/image"
import { ChevronRight, Home, Lamp, Palette } from "lucide-react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="border-t border-[#e5e5e5] pt-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-8 text-[#333333] relative inline-block"
        >
          Our Services
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#D4AF37]"></span>
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Lighting Design",
              description:
                "We create custom lighting solutions for modern, bold, and accent lighting for a functional atmosphere.",
              icon: <Lamp className="w-6 h-6 text-[#E07A5F]" />,
            },
            {
              title: "Interior Design",
              description:
                "We create beautiful and functional interior living space to bring your vision to life efficiently.",
              icon: <Home className="w-6 h-6 text-[#E07A5F]" />,
            },
            {
              title: "Outdoor Design",
              description: "We create beautiful outdoor spaces with awesome outdoor decor services.",
              icon: <Palette className="w-6 h-6 text-[#E07A5F]" />,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="flex flex-col bg-white p-6 rounded-xl shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 mb-6 overflow-hidden rounded-lg relative">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=${service.title}`}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">{service.icon}</div>
              </div>
              <h3 className="text-lg font-medium mb-2 text-[#333333]">{service.title}</h3>
              <p className="text-[#545454] text-sm mb-4">{service.description}</p>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-[#008080] font-medium text-sm flex items-center mt-auto"
              >
                Learn more
                <ChevronRight className="w-4 h-4 ml-1" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
