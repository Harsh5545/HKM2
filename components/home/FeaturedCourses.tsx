"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const courses = [
  {
    id: "3d-animation",
    title: "3D Animation",
    description:
      "Master the art of bringing characters and objects to life with industry-standard 3D animation techniques.",
    image: "/course/HkmAnimation.webp",
    icon: "/images/icons/animation-icon.png",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "game-design",
    title: "Game Design",
    description:
      "Learn to create immersive gaming experiences with cutting-edge tools and game development principles.",
    image: "/course/HkmGame.webp",
    icon: "/images/icons/game-icon.png",
    color: "from-green-500 to-teal-600",
  },
  {
    id: "vfx",
    title: "Visual Effects",
    description: "Discover how to create stunning visual effects for film, television, and digital media.",
    image: "/course/HkmVFX.webp",
    icon: "/images/icons/vfx-icon.png",
    color: "from-orange-500 to-red-600",
  },
]

export default function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState("3d-animation")
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore <span className="text-primary">Our Popular Courses</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our industry-leading courses designed to help you master the skills needed for a successful
              career in multimedia and design.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/courses" className="inline-flex items-center text-primary hover:text-primary-600 font-medium">
              Browse All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <Tabs defaultValue="3d-animation" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            {courses.map((course) => (
              <TabsTrigger
                key={course.id}
                value={course.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {course.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {courses.map((course) => (
            <TabsContent key={course.id} value={course.id}>
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={400}
                    height={300}
                    className="w-full object-cover rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${course.color} opacity-20 rounded-xl`}></div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Image
                        src={course.icon || "/placeholder.svg"}
                        alt={`${course.title} icon`}
                        width={30}
                        height={30}
                        className="w-6 h-6"
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{course.title}</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-lg">{course.description}</p>

                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-green-600 dark:text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Industry-standard software training</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-green-600 dark:text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Hands-on practical projects</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-green-600 dark:text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Professional portfolio development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-green-600 dark:text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Job placement assistance</span>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <Button asChild className="btn-primary">
                      <Link href={`/courses/${course.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              title: "Graphics Design",
              description: "Learn to create stunning visual designs for print and digital media.",
              icon: "/images/icons/graphics-icon.png",
            },
            {
              title: "3D Architecture",
              description: "Master architectural visualization and 3D modeling for buildings and interiors.",
              icon: "/images/icons/architecture-icon.png",
            },
            {
              title: "Video Editing",
              description: "Develop professional video editing skills for film, TV, and digital content.",
              icon: "/images/icons/video-icon.png",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={`${item.title} icon`}
                      width={30}
                      height={30}
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                  <Link
                    href={`/courses/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary hover:text-primary-600 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}