"use client"

import Image from "next/image"
import { Palette, Sparkles, Zap } from "lucide-react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function ThreeSteps() {
  return (
    <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center bg-[#F0F8F8] rounded-xl my-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#333333] relative inline-block">
          Designing Your Dream in Three Simple Steps
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#D4AF37]"></span>
        </h2>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex gap-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#008080] to-[#006666] text-white flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md"
            >
              1
            </motion.div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2 text-[#333333] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E07A5F]" />
                Start Project
              </h3>
              <p className="text-[#545454] text-sm">
                Embark on your design adventure by finalizing your project. Share your vision and set the stage for a
                transformative experience.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex gap-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#008080] to-[#006666] text-white flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md"
            >
              2
            </motion.div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2 text-[#333333] flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#E07A5F]" />
                Craft
              </h3>
              <p className="text-[#545454] text-sm">
                Our design team works to achieve design excellence, refining your vision and crafting brilliance into
                every aspect of your space.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex gap-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#008080] to-[#006666] text-white flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md"
            >
              3
            </motion.div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2 text-[#333333] flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#E07A5F]" />
                Execute
              </h3>
              <p className="text-[#545454] text-sm">
                Witness your vision becoming a reality as we implement your design with precision, marking the joy of
                your newly transformed space.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/placeholder.svg?height=450&width=500&text=Modern+Interior+Design"
            alt="Modern interior design process"
            width={500}
            height={450}
            className="rounded-xl object-cover h-[450px] w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
