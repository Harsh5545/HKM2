"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const projects = [
  {
    title: "Diamond Engagement Ring",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Sapphire Pendant",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Gold Bracelet Collection",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Emerald Earrings",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Pearl Necklace Design",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Ruby Statement Ring",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function JewelryDesignGallery() {
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
    <section ref={ref} className="py-20 bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Student{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Gallery</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Explore stunning jewelry designs created by our students
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                <h3 className="text-white font-medium p-4 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

