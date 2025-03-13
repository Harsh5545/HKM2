"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Monitor, Cpu, Headphones, Coffee } from "lucide-react"

export default function AboutFacilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We provide state-of-the-art facilities to ensure our students have the best learning environment and
            resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <Monitor className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Modern Computer Labs</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Our labs are equipped with high-performance computers and the latest industry-standard software.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <Cpu className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Rendering Farm</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Access to our rendering farm allows students to process complex 3D projects efficiently.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <Headphones className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Audio Recording Studio</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Professional-grade audio recording facilities for voiceovers and sound design projects.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <Coffee className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Student Lounge</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                A comfortable space for students to relax, collaborate, and discuss creative ideas.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/facilities.jpg"
                alt="Our Facilities"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

