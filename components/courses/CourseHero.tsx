"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/80 to-black opacity-90" />
        <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Creative background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 flex flex-col items-center justify-center h-screen px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Unleash Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Creative Potential
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 md:text-2xl">
            Discover world-class courses designed to transform your passion into a profession
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
            <Button
              size="lg"
              className="text-lg bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent hover:opacity-90"
              asChild
            >
              <Link href="#courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg text-white border-white hover:bg-white/10" asChild>
              <Link href="/about">About Us</Link>
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
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
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

