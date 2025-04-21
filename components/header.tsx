"use client"

import Link from "next/link"
import { Home, Phone, Settings, Users } from "lucide-react"
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

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full  mx-auto px-4 py-4 flex items-center justify-around bg-white shadow-sm rounded-b-lg"
    >
      <div className="flex items-center">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl text-[#008080]"
        >
          InDecor
        </motion.span>
      </div>

      {/* Mobile menu button - removing this since we'll use bottom navigation */}

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <motion.div className="flex space-x-8" variants={staggerContainer} initial="hidden" animate="visible">
          {[
            { name: "Home", icon: <Home size={16} /> },
            { name: "Services", icon: <Settings size={16} /> },
            { name: "Contact", icon: <Phone size={16} /> },
            { name: "Support", icon: <Users size={16} /> },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Link
                href="#"
                className="text-sm font-medium hover:text-[#008080] transition-colors duration-300 flex items-center gap-1"
              >
                {item.icon}
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>
    </motion.header>
  )
}
