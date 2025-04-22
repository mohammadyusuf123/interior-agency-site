"use client"

import ImageSlider from "@/components/image-slider"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Services from "@/components/services"
import DreamDesign from "@/components/dream-design"
import ThreeSteps from "@/components/three-steps"
import TestimonialCarousel from "@/components/testimonial-carousel"
import Newsletter from "@/components/newsletter"
import PricingCards from "@/components/pricing-cards"
import ProjectCarousel from "@/components/project-carousel"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#FAFAFA] pb-16 md:pb-0">
      <ImageSlider />

      <main className="flex-grow w-full">
        <div className="container mx-auto px-4">
          <Hero />
          <Stats />
          <Services />
          <DreamDesign />
          <ThreeSteps />
          <ProjectCarousel />
          <TestimonialCarousel />
          <PricingCards />
          <Newsletter />
        </div>
      </main>

    </div>
  )
}
