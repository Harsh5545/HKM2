"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Deep Patel",
    role: "Game Design Graduate",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "The faculty members at Harikrushna Multimedia Institute are highly knowledgeable and supportive. They go the extra mile to ensure that every student understands the topics thoroughly.",
  },
  {
    id: 2,
    name: "Divan Sangale",
    role: "3D Animation Student",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "I am extremely happy with the classes at Harikrushna Multimedia Institute. The teaching style is excellent, and the practical approach helped me grasp concepts easily.",
  },
  {
    id: 3,
    name: "Manasi Patel",
    role: "Graphic Design Graduate",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "Attending classes at Harikrushna Multimedia Institute has been a wonderful experience. The projects are challenging, and the guidance provided by the instructors is invaluable.",
  },
]

export function TestimonialsSection() {
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
    <section ref={ref} className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Students Say</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our graduates who have transformed their creative passion into successful careers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-gray-900 rounded-xl p-8 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

