"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUs() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#008080] to-[#006666] text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-4 max-w-3xl mb-8" variants={fadeIn}>
              
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                We're Building the Future Together
              </h1>
              <p className="text-white/80 md:text-xl">
                Founded in 2015, our company has been at the forefront of innovation, creating solutions that transform
                industries and improve lives.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center w-full"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/team.jpg?height=400&width=600"
                alt="Company team working together"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="w-full  py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#008080]/10 to-[#006666]/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-col justify-center items-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="space-y-2 ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#008080]">Our Core Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These principles guide everything we do and define who we are as a company.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                ),
                title: "Innovation",
                description:
                  "We constantly seek new ideas and approaches to solve complex problems and create better solutions.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnership to achieve extraordinary results.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                ),
                title: "Integrity",
                description:
                  "We uphold the highest standards of honesty, transparency, and ethical behavior in all our actions.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="flex flex-col items-center text-center h-full border-[#008080]/20 hover:border-[#008080] transition-colors duration-300">
                  <CardContent className="pt-6">
                    <div className="mb-4 rounded-full bg-[#008080]/10 p-3 text-[#008080]">{value.icon}</div>
                    <h3 className="text-xl font-bold text-[#008080]">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#008080]">
                Meet Our Leadership Team
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The talented individuals who drive our vision forward and lead our company to success.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                bio: "With over 15 years of industry experience, Sarah leads our company with vision and determination.",
                image: "/people1.jpg?height=300&width=300",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                bio: "Michael brings innovative thinking and technical expertise to drive our product development.",
                image: "/people2.jpg?height=300&width=300",
              },
              {
                name: "Jessica Williams",
                role: "Chief Operating Officer",
                bio: "Jessica ensures our operations run smoothly and efficiently to deliver exceptional results.",
                image: "/people3.jpg?height=300&width=300",
              },
              {
                name: "David Rodriguez",
                role: "Chief Marketing Officer",
                bio: "David crafts our brand strategy and leads our marketing initiatives with creativity and insight.",
                image: "/people4.jpg?height=300&width=300",
              },
              {
                name: "Emily Patel",
                role: "Chief Financial Officer",
                bio: "Emily manages our financial strategy with precision and foresight to ensure sustainable growth.",
                image: "/people5.jpg?height=300&width=300",
              },
              {
                name: "Robert Kim",
                role: "Head of Customer Success",
                bio: "Robert is dedicated to ensuring our customers achieve their goals and have an exceptional experience.",
                image: "/people6.jpg?height=300&width=300",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border-[#008080]/20 hover:border-[#008080] transition-colors duration-300">
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold text-[#008080]">{member.name}</h3>
                    <p className="text-sm text-[#008080]">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#008080]/10 to-[#006666]/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#008080]">Our Journey</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From humble beginnings to industry leadership, our story is one of passion, perseverance, and
                innovation.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto max-w-3xl space-y-8 py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                year: "2015",
                title: "Company Founded",
                description: "Our journey began with a small team and a big vision to transform the industry.",
              },
              {
                year: "2017",
                title: "First Major Product Launch",
                description: "We introduced our flagship product to the market, receiving widespread acclaim.",
              },
              {
                year: "2019",
                title: "International Expansion",
                description: "We expanded our operations globally, opening offices in Europe and Asia.",
              },
              {
                year: "2021",
                title: "Industry Recognition",
                description: "Our innovative solutions earned us multiple industry awards and recognition.",
              },
              {
                year: "2023",
                title: "Strategic Partnerships",
                description: "We formed key partnerships to enhance our offerings and reach new markets.",
              },
              {
                year: "Today",
                title: "Continued Growth",
                description: "We continue to innovate and grow, staying true to our mission and values.",
              },
            ].map((milestone, index) => (
              <motion.div key={index} className="flex flex-col items-center text-center" variants={fadeIn}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#008080] text-white mb-2">
                  {index + 1}
                </div>
                <div className="space-y-2 pb-8">
                  <div className="flex flex-col items-center gap-1">
                    <div className="font-bold text-[#008080]">{milestone.year}</div>
                    <div className="text-xl font-bold">{milestone.title}</div>
                  </div>
                  <p className="text-muted-foreground max-w-lg">{milestone.description}</p>
                </div>
                {index < 5 && <div className="h-8 w-0.5 bg-[#008080]/30"></div>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

   

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#008080] to-[#006666] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals to join our growing team. Explore career opportunities
                with us.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/careers">
                <Button
                  variant="secondary"
                  className="bg-white text-[#008080] hover:bg-white/90 transition-colors duration-300"
                >
                  View Open Positions
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
