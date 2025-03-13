"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle } from "lucide-react"

const reasons = [
  "Industry-experienced faculty with practical knowledge",
  "State-of-the-art labs with the latest software and hardware",
  "Hands-on training with real-world projects",
  "Small batch sizes for personalized attention",
  "Comprehensive curriculum updated with industry trends",
  "Portfolio development and job placement assistance",
  "Flexible timing options for working professionals",
  "Affordable fee structure with installment options",
  "Regular workshops and masterclasses by industry experts",
  "Post-course support and career guidance",
]

export default function WhyChooseUs() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section ref={containerRef} className="py-20 bg-gradient-primary text-white overflow-hidden">
      <div className="md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">WHY CHOOSE US?</h2>
              <div className="w-20 h-1 bg-accent"></div>
            </div>

            <p className="text-lg text-gray-200">
              At Harikrishna Multimedia Institute, we pride ourselves on providing top-quality education that prepares
              students for successful careers in the creative industry.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-accent mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-100">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 3D Model/Image */}
          <motion.div className="w-full lg:w-1/2 flex justify-end" style={{ y }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <Image
                src="/model/RoboAbout.webp"
                alt="3D Character"
                width={500}
                height={600}
                className="relative z-10 max-h-[600px] w-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

