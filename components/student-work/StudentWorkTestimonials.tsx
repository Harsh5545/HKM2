"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Patel",
    role: "3D Animation Graduate",
    image: "/images/testimonials/testimonial-1.jpg",
    content:
      "The skills I learned at Harikrishna Multimedia Institute helped me land my dream job at a leading animation studio. The hands-on training and industry-focused curriculum made all the difference in my career.",
    company: "Working at Dreamworks Animation",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Game Design Graduate",
    image: "/images/testimonials/testimonial-2.jpg",
    content:
      "The game design course at HKM gave me all the tools I needed to start my career. I'm now working on exciting projects and using the skills I learned every day. The faculty's guidance was invaluable.",
    company: "Working at Ubisoft India",
  },
  {
    id: 3,
    name: "Amit Desai",
    role: "VFX Graduate",
    image: "/images/testimonials/testimonial-3.jpg",
    content:
      "Thanks to the comprehensive VFX training at Harikrishna Multimedia, I was able to build an impressive portfolio that helped me secure a position at a top VFX studio. The practical approach to learning was exactly what I needed.",
    company: "Working at Prime Focus World",
  },
]

export default function StudentWorkTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

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
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hear from our alumni about how their education at Harikrishna Multimedia Institute helped them achieve
            success in their careers.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 relative"
            >
              <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/10" />

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-primary/20">
                    <Image
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3 text-center md:text-left">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">"{currentTestimonial.content}"</p>

                  <h3 className="text-xl font-bold">{currentTestimonial.name}</h3>
                  <p className="text-primary mb-1">{currentTestimonial.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{currentTestimonial.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-colors mr-4"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

