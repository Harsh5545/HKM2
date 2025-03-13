"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Award, Briefcase, GraduationCap } from "lucide-react"

const stats = [
  {
    id: 1,
    value: "1000+",
    label: "Students Trained",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    id: 2,
    value: "15+",
    label: "Years of Excellence",
    icon: Award,
    color: "bg-green-500",
  },
  {
    id: 3,
    value: "95%",
    label: "Placement Rate",
    icon: Briefcase,
    color: "bg-purple-500",
  },
  {
    id: 4,
    value: "20+",
    label: "Industry Partners",
    icon: GraduationCap,
    color: "bg-accent",
  },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="py-16 bg-gradient-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={item} className="text-center">
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

