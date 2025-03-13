"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: "game-design",
    title: "Game Design",
    description: "Create immersive gaming experiences with industry-standard tools",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-secondary to-primary",
    icon: "🎮",
  },
  {
    id: "3d-jewelry",
    title: "3D Jewelry Design",
    description: "Master the art of creating stunning digital jewelry models",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-accent to-primary",
    icon: "💍",
  },
  {
    id: "3d-architecture",
    title: "3D Architecture",
    description: "Design breathtaking architectural visualizations",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-primary to-secondary",
    icon: "🏛️",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Tell compelling stories through the art of video",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-accent to-secondary",
    icon: "🎬",
  },
  {
    id: "3d-animation",
    title: "3D Animation",
    description: "Bring characters and worlds to life with movement and emotion",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-primary to-accent",
    icon: "🎭",
  },
  {
    id: "vfx",
    title: "Visual Effects",
    description: "Create mind-blowing visual effects for film and media",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-secondary to-accent",
    icon: "✨",
  },
  {
    id: "2d-animation",
    title: "2D Animation",
    description: "Master traditional and digital 2D animation techniques",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-primary to-secondary",
    icon: "🎨",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Communicate visually through powerful design principles",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-accent to-primary",
    icon: "📐",
  },
]

export function CourseCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Creative Disciplines
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Discover specialized courses designed to help you excel in your chosen creative field
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Link href={`/courses/${category.id}`} className="block h-full">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div
                  className={`absolute top-4 left-4 z-20 w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl`}
                >
                  {category.icon}
                </div>
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors duration-300">
                    Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

