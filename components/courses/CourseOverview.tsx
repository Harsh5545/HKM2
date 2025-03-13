"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"
import type { CourseType } from "@/lib/course-data"

interface CourseOverviewProps {
  course: CourseType
}

export default function CourseOverview({ course }: CourseOverviewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Course <span className="text-primary">Overview</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover what you'll learn in our comprehensive {course.title} course and how it will help you advance your
            creative career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">What You'll Learn</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </motion.div>
              ))}
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
                src={`/images/courses/${course.slug}-overview.jpg`}
                alt={`${course.title} Overview`}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
              <Image
                src={course.icon || "/placeholder.svg"}
                alt={`${course.title} Icon`}
                width={40}
                height={40}
                className="w-12 h-12"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

