"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Award, Users } from "lucide-react"

export default function AboutMission() {
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
            Our <span className="text-primary">Mission & Values</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            At Harikrishna Multimedia Institute, we are guided by a clear mission and strong values that shape
            everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To empower creative minds with industry-relevant skills and knowledge, enabling them to excel in the
              dynamic field of multimedia and design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To be recognized as the premier institute for multimedia education, known for producing industry-ready
              professionals who lead and innovate in their fields.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Excellence, innovation, integrity, and student-centered learning form the foundation of our educational
              approach and institutional culture.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

