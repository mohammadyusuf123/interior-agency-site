"use client"

import Link from "next/link"
import { Home, InfoIcon, Phone, Settings } from "lucide-react"
import { motion } from "framer-motion"

export default function MobileNavbar() {
  const navItems = [
    { name: "Home", icon: <Home size={16} />, link: "/" },
    { name: "Services", icon: <Settings size={16}  /> ,link:"/services" },

    { name: "About Us", icon: <InfoIcon size={16} />, link: "/about" },
    { name: "Contact", icon: <Phone size={16} /> ,link:"/contact"},
    // { name: "Support", icon: <Users size={16} />  ,link:"/support"},
  ]

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
    >
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex flex-col items-center justify-center w-full h-full text-[#545454] hover:text-[#008080] transition-colors"
          >
            <motion.div className="flex flex-col items-center justify-center" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
              {item.icon}
              <span className="text-xs mt-1 text-center">{item.name}</span>
            </motion.div>
          </Link>
        ))}
      </div>
      {/* Safe area for iOS devices */}
      <div className="h-safe-area bg-white" />
    </motion.nav>
  )
}
