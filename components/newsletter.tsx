"use client"

import { Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function Newsletter() {
  return (
    <section className="container mx-auto px-4 py-12 bg-gradient-to-r from-[#F0F8F8] to-[#E6F2F2] rounded-xl my-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#333333]">Subscribe to Our Newsletter</h2>
        <h3 className="text-lg font-medium mb-4 text-[#008080]">for Design Insights</h3>
        <p className="text-[#545454] mb-6">
          Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to
          your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <motion.input
            whileFocus={{ boxShadow: "0 0 0 2px rgba(0,128,128,0.3)" }}
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-4 py-3 border border-[#e5e5e5] rounded-lg transition-all duration-300 shadow-sm"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 128, 128, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#008080] to-[#006666] text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          >
            <Zap size={18} />
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}
