"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
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

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1f1f1f] to-[#2d2d2d] text-white py-12 mt-12 rounded-t-xl">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          <motion.div variants={fadeIn}>
            <div className="font-bold text-xl mb-4 text-[#D4AF37]">InDecor</div>
            <p className="text-sm text-gray-300 mb-4">
              Transform your interior environment for luxury and modern interior design.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, href: "#", color: "#4267B2" },
                { icon: <Twitter size={18} />, href: "#", color: "#1DA1F2" },
                { icon: <Instagram size={18} />, href: "#", color: "#E1306C" },
                { icon: <Linkedin size={18} />, href: "#", color: "#0077B5" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, color: social.color }}
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Our Services",
              links: ["Interior Design", "Outdoor", "Lighting design", "Office design"],
            },
            {
              title: "Resources",
              links: ["Bedroom", "Kitchen", "Pricing", "Photo Gallery"],
            },
            {
              title: "Contact Us",
              links: ["Design Consultation", "Space Planning", "+1 (123) 456-7890", "CA 90210, United States"],
            },
          ].map((column, colIndex) => (
            <motion.div key={colIndex} variants={fadeIn}>
              <h3 className="font-medium mb-4 text-[#D4AF37]">{column.title}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {column.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex} whileHover={{ x: 3 }} className="transition-all duration-300">
                    <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#D4AF37]"></div>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} InDecor. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
