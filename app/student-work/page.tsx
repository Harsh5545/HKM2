import type { Metadata } from "next"
import StudentWorkHero from "@/components/student-work/StudentWorkHero"
import StudentWorkGallery from "@/components/student-work/StudentWorkGallery"
import StudentWorkTestimonials from "@/components/student-work/StudentWorkTestimonials"
import StudentWorkCTA from "@/components/student-work/StudentWorkCTA"

export const metadata: Metadata = {
  title: "Student Work | Harikrishna Multimedia Institute",
  description:
    "Explore the impressive portfolio of work created by students at Harikrishna Multimedia Institute. See the creative projects in animation, game design, VFX, and more.",
  keywords: [
    "student work",
    "portfolio",
    "Harikrishna Multimedia Institute",
    "animation projects",
    "game design projects",
    "student showcase",
  ],
}

export default function StudentWorkPage() {
  return (
    <div className="min-h-screen">
      <StudentWorkHero />
      <StudentWorkGallery />
      <StudentWorkTestimonials />
      <StudentWorkCTA />
    </div>
  )
}

