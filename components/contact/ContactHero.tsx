"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function ContactHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section ref={ref} className="relative pt-32 pb-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-white/90 mb-8">
            We'd love to hear from you! Reach out to us for course inquiries, admissions, or to book a free demo class.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

