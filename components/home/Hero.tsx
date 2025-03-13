"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import TypewriterComponent from "typewriter-effect"
import Image from "next/image"
import { ErrorBoundary } from "next/dist/client/components/error-boundary"
import Experience from "@/components/Experience/Experience"
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleDownload = () => {
    const url = "/harikrishnaMultimedia.pdf"
    const link = document.createElement("a")
    link.href = url
    link.download = "harikrishnaMultimedia.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-primary pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/3 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="md:w-[90%]   mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-20 md:pt-16 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          {/* Text Content */}
          <motion.div
            ref={ref}
            className="w-full lg:w-1/2 text-white space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${-mousePosition.x * 5}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
              <span className="block">Opportunity to Bring Your</span>
              <span className="block mt-2 text-accent">Creative Passion to Life</span>
            </h1>

            <div className="flex flex-col gap-2"><h2 className="text-xl sm:text-2xl md:text-3xl font-medium">You Will Learn Here</h2>

<div className="text-xl sm:text-2xl md:text-2xl font-light h-10">
  <TypewriterComponent
    options={{
      strings: [
        "Game Design",
        "3D Modeling",
        "Graphics Design",
        "3D Architecture",
        "Visual Effects",
        "Video Editing",
        "3D Animation",
      ],
      autoStart: true,
      loop: true,
      delay: 40,
      deleteSpeed: 20,
    }}
  />
</div></div>

            <p className="text-gray-200 text-lg max-w-xl">
              Join Surat's premier multimedia institute and unlock your creative potential with industry-standard
              training and hands-on experience.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-white">
                <Link href="/courses">Explore Courses</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white dark:text-white text-black hover:bg-white/10"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
            </div>
          </motion.div>

          {/* 3D Model/Animation */}
          <motion.div
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full max-w-[500px] mx-auto">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <motion.div
                className="w-full h-full relative"
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 10, 0],
                  rotateX: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
               
   
                <Experience />
                {/* <Image src="/images/robot-character.png" alt="3D Character" fill className="object-contain" priority /> */}
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-1/4 -left-10 w-16 h-16 bg-primary/30 rounded-full blur-md"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 -right-10 w-20 h-20 bg-accent/30 rounded-full blur-md"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 right-1/4 w-12 h-12 bg-secondary/30 rounded-full blur-md"
                animate={{
                  x: [0, 15, 0],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

