"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function AboutHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-primary">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/images/about/about-pattern.jpg" alt="Background Pattern" fill className="object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Harikrishna Multimedia Institute</h1>
            <p className="text-lg text-white/90 mb-8">
              Founded with a vision to nurture creative talent, Harikrishna Multimedia Institute has been at the
              forefront of multimedia education in Surat since 2008. We are dedicated to providing industry-relevant
              training that transforms passionate individuals into skilled professionals.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <span className="text-3xl font-bold text-accent">15+</span>
                <span className="text-sm">Years of Excellence</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <span className="text-3xl font-bold text-accent">1000+</span>
                <span className="text-sm">Students Trained</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <span className="text-3xl font-bold text-accent">95%</span>
                <span className="text-sm">Placement Rate</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/about/about-hero.jpg"
                alt="Harikrishna Multimedia Institute"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

