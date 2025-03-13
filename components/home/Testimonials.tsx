"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "3D Animation Graduate",
    photo: "/assets/BoyStudent.webp",
    content:
      "Joining Harikrishna Multimedia Institute was the best decision I made for my career. The hands-on training and industry-focused curriculum helped me land a job at a top animation studio right after graduation.",
    contentHeading: "Best Animation Training in Surat",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Game Design Student",
    photo: "/images/testimonials/testimonial-2.jpg",
    content:
      "The game design course at HKM is comprehensive and practical. The faculty members are industry professionals who provide valuable insights and guidance. I've learned so much in just a few months!",
    contentHeading: "Excellent Game Design Program",
  },
  {
    id: 3,
    name: "Amit Desai",
    role: "VFX Artist",
    photo: "/images/testimonials/testimonial-3.jpg",
    content:
      "The VFX course at Harikrishna Multimedia Institute gave me all the skills I needed to start my career. The placement assistance was incredibly helpful, and I'm now working on exciting projects in the film industry.",
    contentHeading: "Career-Changing Experience",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="text-accent">Students</span> Say
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our graduates about their experiences and success stories after studying at Harikrishna Multimedia
            Institute.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="lg:flex items-center"
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <Image
                      src={currentTestimonial.photo || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-12">
                <div className="relative">
                  <Quote className="absolute -top-6 -left-6 h-12 w-12 text-primary/20" />
                  <h3 className="text-2xl font-bold mb-4">{currentTestimonial.contentHeading}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{currentTestimonial.content}</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={currentTestimonial.photo || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-primary"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-accent">{currentTestimonial.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{currentTestimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 lg:justify-start lg:mt-12">
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

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

