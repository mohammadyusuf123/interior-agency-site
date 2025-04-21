"use client"

import Image from "next/image"
import { Home, Lamp, Settings, Sparkles, Zap } from "lucide-react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function DreamDesign() {
  return (
    <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/dreamDesign.jpg?height=450&width=500&text=Luxurious+Living+Room"
            alt="Luxurious living room design"
            width={500}
            height={450}
            className="rounded-xl object-cover h-[450px] w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-4 rounded-lg shadow-lg"
        >
          <Lamp className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#333333] relative inline-block">
          Designing Your Dream With Brilliance
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#D4AF37]"></span>
        </h2>
        <p className="text-[#545454] mb-6">
          Design your spaces with inspiring interior designs that reflect your unique style and aspirations, crafted
          with precision and arranged for an unforgettable living experience.
        </p>
        <motion.div
          whileHover={{ backgroundColor: "#f9f9f9" }}
          className="border-t border-[#e5e5e5] py-4 rounded-md transition-colors duration-300"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F0F8F8] flex items-center justify-center">
                <Home className="w-4 h-4 text-[#008080]" />
              </div>
              <h3 className="font-medium text-[#333333]">Living Room Interior Design</h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#f1f1f1" }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 flex items-center justify-center border border-[#e5e5e5] rounded-full transition-all duration-300"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2V10" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 6H10" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "#f9f9f9" }}
          className="border-t border-[#e5e5e5] py-4 rounded-md transition-colors duration-300"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F0F8F8] flex items-center justify-center">
                <Settings className="w-4 h-4 text-[#008080]" />
              </div>
              <h3 className="font-medium text-[#333333]">Commercial Office Room Interior Design</h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#f1f1f1" }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 flex items-center justify-center border border-[#e5e5e5] rounded-full transition-all duration-300"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2V10" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 6H10" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 128, 128, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-[#008080] to-[#006666] text-white font-medium rounded-md transition-all duration-300 shadow-md flex items-center gap-2"
        >
          <Zap size={18} />
          Learn More
        </motion.button>
      </motion.div>
    </section>
  )
}
