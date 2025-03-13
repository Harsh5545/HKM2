"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import type { CourseType } from "@/lib/course-data"

interface CourseOutcomesProps {
  course: CourseType
}

export default function CourseOutcomes({ course }: CourseOutcomesProps) {
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
            Learning <span className="text-primary">Outcomes</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            By the end of this course, you will have gained the following skills and knowledge.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
              >
                <CheckCircle2 className="h-6 w-6 text-accent mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

