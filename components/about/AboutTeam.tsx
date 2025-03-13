"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Facebook, Twitter, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Rajesh Patel",
    role: "Founder & Director",
    image: "/images/team/director.jpg",
    bio: "With over 20 years of experience in the multimedia industry, Rajesh founded Harikrishna Multimedia Institute with a vision to provide quality education in creative fields.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Priya Sharma",
    role: "Lead Animation Instructor",
    image: "/images/team/animation-instructor.jpg",
    bio: "Priya brings 12 years of industry experience in 3D animation and has worked on several award-winning animated films and commercials.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Amit Desai",
    role: "VFX & Game Design Expert",
    image: "/images/team/vfx-expert.jpg",
    bio: "Amit specializes in visual effects and game design with experience working at top studios in Mumbai and Bangalore before joining our faculty.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Neha Patel",
    role: "Graphic Design Instructor",
    image: "/images/team/design-instructor.jpg",
    bio: "Neha is an accomplished graphic designer with expertise in branding, UI/UX, and print design, bringing real-world projects into the classroom.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

export default function AboutTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our team of industry professionals brings years of experience and expertise to provide you with the best
            multimedia education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>

                <div className="flex space-x-3">
                  <a href={member.social.facebook} className="text-gray-400 hover:text-primary transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

