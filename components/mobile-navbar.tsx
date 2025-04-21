"use client"

import Link from "next/link"
import { Home, Search, Grid, ShoppingBag, User } from "lucide-react"
import { motion } from "framer-motion"

export default function MobileNavbar() {
  const navItems = [
    { icon: <Home size={20} />, label: "Home", href: "#" },
    { icon: <Search size={20} />, label: "Search", href: "#" },
    { icon: <Grid size={20} />, label: "Categories", href: "#" },
    { icon: <ShoppingBag size={20} />, label: "Shop", href: "#" },
    { icon: <User size={20} />, label: "Account", href: "#" },
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
            href={item.href}
            className="flex flex-col items-center justify-center w-full h-full text-[#545454] hover:text-[#008080] transition-colors"
          >
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </motion.div>
          </Link>
        ))}
      </div>
      {/* Safe area for iOS devices */}
      <div className="h-safe-area bg-white" />
    </motion.nav>
  )
}
