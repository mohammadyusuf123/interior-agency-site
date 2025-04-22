"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Brush,
  Home,
  Lightbulb,
  Palette,
  Ruler,
  Sofa,
  CheckCircle2,
  ArrowRight,
  Users,
  Building,
  Sparkles,
  Star,
} from "lucide-react"
import { motion } from "framer-motion"
import Services from "@/components/services"
import PricingCards from "@/components/pricing-cards"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <main className="flex-1">
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#008080]/10 to-[#006666]/10">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2">
                <Badge
                  className="px-3 py-1 text-sm bg-[#008080]/20 text-[#006666] hover:bg-[#008080]/30"
                  variant="outline"
                >
                  Our Expertise
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#008080] to-[#006666]">
                  Transforming Spaces, Creating Experiences
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our comprehensive range of interior design services tailored to your unique style and needs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Services />

        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#008080]/10 to-[#006666]/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter mb-4 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#008080] to-[#006666]">
                  Specialized Services
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our team of expert designers offers a wide range of specialized services to meet your specific needs
                  and preferences.
                </p>
                <div className="grid gap-6">
                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/80 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#008080]/20 flex items-center justify-center flex-shrink-0">
                      <Palette className="h-5 w-5 text-[#008080]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Color Consultation</h3>
                      <p className="text-sm text-muted-foreground">
                        Expert guidance on selecting the perfect color palette to create the desired mood and atmosphere
                        in your space.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/80 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#008080]/20 flex items-center justify-center flex-shrink-0">
                      <Sofa className="h-5 w-5 text-[#008080]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Furniture Selection & Arrangement</h3>
                      <p className="text-sm text-muted-foreground">
                        Curated furniture recommendations and optimal arrangement plans to maximize both functionality
                        and aesthetic appeal.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/80 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#008080]/20 flex items-center justify-center flex-shrink-0">
                      <Ruler className="h-5 w-5 text-[#008080]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Space Planning</h3>
                      <p className="text-sm text-muted-foreground">
                        Strategic layout design to optimize flow, functionality, and spatial harmony in any room or
                        building.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/80 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#008080]/20 flex items-center justify-center flex-shrink-0">
                      <Brush className="h-5 w-5 text-[#008080]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Custom Artwork & Accessories</h3>
                      <p className="text-sm text-muted-foreground">
                        Bespoke art pieces and decorative elements that add personality and the perfect finishing
                        touches to your space.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <div className="relative">
                <Image
                  src="/interior.jpg?height=600&width=500"
                  width={500}
                  height={600}
                  alt="Interior design workspace"
                  className="rounded-lg shadow-xl object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg max-w-xs text-white">
                  <p className="text-sm italic text-muted-foreground">
                    "Their attention to detail and ability to understand our vision transformed our space beyond our
                    expectations."
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted"></div>
                    <div>
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Residential Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <PricingCards />

        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#008080]/10 to-[#006666]/10">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#008080] to-[#006666]">
                  Our Design Process
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A streamlined approach to bringing your vision to life.
                </p>
              </div>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-4">
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#008080]/20 to-[#008080]/40 mb-4">
                  <Users className="h-8 w-8 text-[#008080]" />
                  <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#008080] text-xs font-bold text-white">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  We begin with an in-depth discussion to understand your vision, needs, and budget.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#008080]/20 to-[#008080]/40 mb-4">
                  <Lightbulb className="h-8 w-8 text-[#008080]" />
                  <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#008080] text-xs font-bold text-white">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Concept Development</h3>
                <p className="text-sm text-muted-foreground">
                  Our designers create detailed concepts and mood boards based on your preferences.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#008080]/20 to-[#008080]/40 mb-4">
                  <Palette className="h-8 w-8 text-[#008080]" />
                  <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#008080] text-xs font-bold text-white">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Design & Refinement</h3>
                <p className="text-sm text-muted-foreground">
                  We create detailed plans and 3D visualizations, refining until you're completely satisfied.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#008080]/20 to-[#008080]/40 mb-4">
                  <Sparkles className="h-8 w-8 text-[#008080]" />
                  <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#008080] text-xs font-bold text-white">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  We oversee the execution of the design, ensuring every detail is perfectly implemented.
                </p>
              </motion.div>
            </div>
            <div className="flex justify-center mt-12">
              <Button size="lg" className="gap-2">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      
  
            <div className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#008080]/20 via-[#008080]/10 to-[#006666]/20">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#008080] to-[#006666]">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-muted-foreground">
                  Book a consultation with our expert designers and take the first step toward creating the space of
                  your dreams.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-[#008080] to-[#006666] hover:from-[#008080]/90 hover:to-[#006666]/90 transition-all duration-300"
                  >
                    Book a Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#008080]/30 hover:bg-[#008080]/10 transition-all duration-300"
                  >
                    View Our Portfolio
                  </Button>
                </div>
              </motion.div>
             
            </div>
      
      </main>
    </div>
  )
}
