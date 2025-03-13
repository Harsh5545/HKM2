"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Clock, Users, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CourseType } from "@/lib/course-data"

interface CourseHeaderProps {
  course: CourseType
}

export default function CourseHeader({ course }: CourseHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section ref={ref} className="relative pt-20 pb-16 overflow-hidden bg-gradient-primary">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/images/courses/pattern-bg.jpg" alt="Background Pattern" fill className="object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{course.title}</h1>
            <p className="text-lg text-white/90 mb-8">{course.description}</p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-accent" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-accent" />
                <span>Small Batch Sizes</span>
              </div>
              <div className="flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-accent" />
                <span>{course.level}</span>
              </div>
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent-600 text-white">
              Enroll Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
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

