"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, BookOpen } from "lucide-react"
import type { CourseType } from "@/lib/course-data"

interface CourseCurriculumProps {
  course: CourseType
}

export default function CourseCurriculum({ course }: CourseCurriculumProps) {
  const [openModule, setOpenModule] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index)
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Course <span className="text-primary">Curriculum</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to take you from the fundamentals to advanced techniques in{" "}
            {course.title}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {course.curriculum.modules.map((module, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm"
            >
              <button
                onClick={() => toggleModule(index)}
                className="w-full flex items-center justify-between p-4 text-left font-medium focus:outline-none"
              >
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-3 text-primary" />
                  <span className="text-lg">{module.title}</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    openModule === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openModule === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 border-t border-gray-200 dark:border-gray-700">
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <motion.li
                            key={topicIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: topicIndex * 0.1 }}
                            className="flex items-start py-1"
                          >
                            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs mr-3 mt-0.5">
                              {topicIndex + 1}
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

