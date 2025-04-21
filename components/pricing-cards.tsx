"use client"

import { Check, Sparkles, Zap } from "lucide-react"
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

export default function PricingCards() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333333]">Choose Your Design Package</h2>
        <p className="text-[#545454] max-w-2xl mx-auto">
          Select the perfect package that suits your needs and budget. Our design packages are tailored to provide
          exceptional value at every price point.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {/* Basic Package */}
        <motion.div
          variants={fadeIn}
          whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-[#e5e5e5]"
        >
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-2 text-[#333333]">Basic Package</h3>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold text-[#008080]">$499</span>
              <span className="text-[#545454] mb-1">/ room</span>
            </div>
            <p className="text-[#545454] text-sm mb-6">Perfect for single room redesigns and simple makeovers.</p>
            <ul className="space-y-3 mb-8">
              {[
                "Initial consultation (1 hour)",
                "2 design concepts",
                "1 revision round",
                "Color scheme selection",
                "Basic furniture layout",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#008080] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 border-2 border-[#008080] text-[#008080] font-medium rounded-lg transition-all duration-300 hover:bg-[#F0F8F8]"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Standard Package */}
        <motion.div
          variants={fadeIn}
          whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          className="bg-gradient-to-b from-[#F0F8F8] to-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 border-2 border-[#008080] relative"
        >
          <div className="absolute top-0 right-0 bg-[#008080] text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
            Popular
          </div>
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-2 text-[#333333]">Standard Package</h3>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold text-[#008080]">$999</span>
              <span className="text-[#545454] mb-1">/ room</span>
            </div>
            <p className="text-[#545454] text-sm mb-6">
              Comprehensive design solution for complete room transformations.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Extended consultation (2 hours)",
                "3 design concepts",
                "2 revision rounds",
                "Complete color & material palette",
                "Detailed furniture layout",
                "Lighting plan",
                "Shopping list with budget options",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#008080] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 128, 128, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-[#008080] to-[#006666] text-white font-medium rounded-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles size={18} />
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Premium Package */}
        <motion.div
          variants={fadeIn}
          whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-[#e5e5e5]"
        >
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-2 text-[#333333]">Premium Package</h3>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold text-[#008080]">$1,999</span>
              <span className="text-[#545454] mb-1">/ room</span>
            </div>
            <p className="text-[#545454] text-sm mb-6">
              Luxury design experience with white-glove service and premium finishes.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "VIP consultation (unlimited)",
                "5 design concepts",
                "Unlimited revisions",
                "Premium material & finish selection",
                "3D visualization",
                "Custom furniture design",
                "Project management",
                "Contractor coordination",
                "Post-installation styling",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#008080] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-[#333333] text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Zap size={18} />
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
