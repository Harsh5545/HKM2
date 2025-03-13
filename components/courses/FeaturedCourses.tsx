"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Clock, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredCourses = [
  {
    id: "game-design-pro",
    title: "Professional Game Design",
    description: "Master the art of game design with industry-standard tools and techniques",
    image: "/placeholder.svg?height=400&width=600",
    duration: "6 months",
    students: "1,200+",
    rating: 4.9,
    category: "Game Design",
    color: "from-primary to-secondary",
  },
  {
    id: "3d-animation-masterclass",
    title: "3D Animation Masterclass",
    description: "Learn to create stunning 3D animations from concept to final render",
    image: "/placeholder.svg?height=400&width=600",
    duration: "8 months",
    students: "950+",
    rating: 4.8,
    category: "3D Animation",
    color: "from-primary to-secondary",
  },
  {
    id: "vfx-specialist",
    title: "VFX Specialist Program",
    description: "Create mind-blowing visual effects for film, TV, and digital media",
    image: "/placeholder.svg?height=400&width=600",
    duration: "10 months",
    students: "750+",
    rating: 4.7,
    category: "Visual Effects",
    color: "from-secondary to-primary",
  },
]

export function FeaturedCourses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section ref={ref} className="py-20 bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Courses</span>
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl">
              Our most popular and comprehensive programs to kickstart your creative career
            </p>
          </div>
          <Button variant="link" className="text-primary hover:text-accent mt-4 md:mt-0" asChild>
            <Link href="/courses">
              View all courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className="group bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden">
                <div
                  className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${course.color}`}
                >
                  {course.category}
                </div>
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center text-amber-400 text-sm">
                    <Star className="h-4 w-4 mr-1 fill-amber-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <Button className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90`} asChild>
                  <Link href={`/courses/${course.id}`}>Enroll Now</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

