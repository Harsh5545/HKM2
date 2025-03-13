"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CreativeOpportunities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const opportunities = ["Visualization", "Pre-Production", "Production", "Post-Production"]

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <Image
              src="/course/A2.webp"
              alt="Creative Opportunities"
              width={600}
              height={500}
              className="rounded-lg shadow-xl relative z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              EXPLORE THE CREATION OF <br />
              <span className="text-primary">EXCITING OPPORTUNITIES</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Enjoy each step along the way that takes you into the unknown space. Let go and allow your imagination to
              become alive.
            </p>

            <ul className="space-y-3">
              {opportunities.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-lg"
                >
                  <ArrowRight className="mr-3 h-5 w-5 text-accent" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4">
              <Button asChild className="btn-primary">
                <Link href="/contact">Book A Free Demo Class</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="group relative">
                <div className="overflow-hidden rounded-full">
                  <Image
                    src="/images/professional-masters.jpg"
                    alt="Professional Masters"
                    width={120}
                    height={120}
                    className="rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-full left-0 mt-2 w-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <h5 className="font-bold text-lg mb-1">PROFESSIONAL MASTERS</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Masters help Imagineers to bring their imagination to life. Making the course more simpler to
                    understand.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="overflow-hidden rounded-full">
                  <Image
                    src="/images/skill-based.jpg"
                    alt="Skill Based Coaching"
                    width={120}
                    height={120}
                    className="rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-full left-0 mt-2 w-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <h5 className="font-bold text-lg mb-1">SKILL BASED COACHING</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Skill-based training will benefit you in ways beyond your imagination & opportunity to discover a
                    hidden talent.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

