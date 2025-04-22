"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formState)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#008080] to-[#006666] text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            We'd love to hear from you. Please fill out the form below or reach out using our contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl"
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6">
              Send Us a Message
            </motion.h2>
            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariants} className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white/20 border-none text-white placeholder:text-white/60 focus-visible:ring-white/30"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-white/20 border-none text-white placeholder:text-white/60 focus-visible:ring-white/30"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="bg-white/20 border-none text-white placeholder:text-white/60 focus-visible:ring-white/30"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="min-h-[150px] bg-white/20 border-none text-white placeholder:text-white/60 focus-visible:ring-white/30"
                  />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-white text-[#006666] hover:bg-white/90 transition-all">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-none shadow-xl overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-white/20 p-3 rounded-full">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Our Location</p>
                        <p className="opacity-80">123 Business Avenue, Suite 100</p>
                        <p className="opacity-80">San Francisco, CA 94107</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-white/20 p-3 rounded-full">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Phone Number</p>
                        <p className="opacity-80">+1 (555) 123-4567</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-white/20 p-3 rounded-full">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email Address</p>
                        <p className="opacity-80">contact@yourcompany.com</p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-none shadow-xl overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Facebook className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram className="h-5 w-5" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="relative h-[250px] rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143526147!2d-122.4026881!3d37.7909755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f18d8c6ea7%3A0x5d7f53fb70a3a903!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
