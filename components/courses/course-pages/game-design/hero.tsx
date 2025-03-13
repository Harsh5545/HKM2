"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Users, BarChart } from "lucide-react"

export function GameDesignHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Game Design Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-indigo-900/80 to-black" />
      </motion.div>

      {/* Game design elements overlay */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 grid-rows-6 opacity-20">
          {Array.from({ length: 36 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() * 0.5 + 0.1 }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="border border-blue-500/30"
            />
          ))}
        </div>

        {/* Floating game elements */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-500/20 rounded-lg blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500/20 rounded-lg blur-xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 flex flex-col items-center justify-center h-screen px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-blue-300 border border-blue-500 rounded-full">
            Professional Course
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Master the Art of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Game Design
            </span>
          </h1>
          <p className="mt-6 text-xl text-blue-100 md:text-2xl">
            Create immersive gaming experiences with industry-standard tools and techniques
          </p>

          <div className="flex flex-wrap gap-6 mt-10 mb-10">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-blue-100">6 Months</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-blue-100">Small Batch Sizes</span>
            </div>
            <div className="flex items-center">
              <BarChart className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-blue-100">All Skill Levels</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mt-10 sm:flex-row">
            <Button
              size="lg"
              className="text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              asChild
            >
              <Link href="/contact">Enroll Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg text-white border-white hover:bg-white/10" asChild>
              <Link href="#curriculum">View Curriculum</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-white">Scroll to explore</span>
          <div className="flex justify-center w-6 h-10 p-1 border-2 border-white rounded-full">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

