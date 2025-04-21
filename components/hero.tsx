"use client"

import Image from "next/image"
import { Palette, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#333333] relative">
          Interior Design
          <span className="absolute -bottom-2 left-0 w-20 h-1 bg-[#D4AF37]"></span>
        </h1>
        <p className="text-[#545454] mb-8 max-w-md">
          Step into a world where the art of interior design is meticulously crafted to bring captivating aesthetic
          elegance and comfort to your living spaces. Our designs are created with the purpose of luxury and
          sophistication.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 128, 128, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#008080] to-[#006666] text-white px-6 py-3 font-medium rounded-md transition-all duration-300 shadow-md flex items-center gap-2"
        >
          <Sparkles size={18} />
          Start Project
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src="/interior.jpg?height=400&width=500&text=Elegant+Living+Room"
            alt="Elegant living room with modern furniture"
            width={500}
            height={400}
            className="rounded-lg object-cover h-[400px] w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg"
        >
          <Palette className="w-8 h-8 text-[#E07A5F]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
