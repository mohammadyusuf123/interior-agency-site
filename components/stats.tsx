"use client"

import { Award, Home, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    let startTime
    let animationFrame

    if (inView) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / (duration * 1000), 1)

        setCount(Math.floor(percentage * end))

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [inView, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white rounded-xl shadow-md p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#F0F8F8] flex items-center justify-center">
              <Users className="w-8 h-8 text-[#008080]" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#333333]">
            <CountUp end={400} />+
          </h3>
          <p className="text-[#545454] text-sm">Happy Clients</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#F0F8F8] flex items-center justify-center">
              <Home className="w-8 h-8 text-[#008080]" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#333333]">
            <CountUp end={600} />+
          </h3>
          <p className="text-[#545454] text-sm">Projects Completed</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#F0F8F8] flex items-center justify-center">
              <Award className="w-8 h-8 text-[#008080]" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#333333]">
            <CountUp end={100} />+
          </h3>
          <p className="text-[#545454] text-sm">Awards</p>
        </motion.div>
      </div>
    </section>
  )
}
