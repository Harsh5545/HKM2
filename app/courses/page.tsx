import type { Metadata } from "next"

import { courseData } from "@/lib/course-data"
import { HeroSection } from "@/components/courses/CourseHero"
import { CourseCategories } from "@/components/courses/CourseCategories"
import { FeaturedCourses } from "@/components/courses/FeaturedCourses"
import { CtaSection } from "@/components/courses/CourseCTA"
import { TestimonialsSection } from "@/components/courses/TestimonialsSection"


export const metadata: Metadata = {
  title: "Courses | Harikrishna Multimedia Institute",
  description:
    "Explore our diverse range of multimedia courses including 3D Animation, Game Design, Visual Effects, and more at Harikrishna Multimedia Institute in Surat.",
  keywords: [
    "3D Architectural Design",
    "Harikrishna Multimedia Institute",
    "Video Editing",
    "Game Design",
    "3D Animation",
    "Visual Effects",
    "2D Animation",
    "3D Jewellery Design",
    "Graphics Design",
  ],
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
     <HeroSection />
      <CourseCategories />
      <FeaturedCourses />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

