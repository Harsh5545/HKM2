import { VfxHero } from "@/components/course-pages/vfx/hero"
import { VfxOverview } from "@/components/course-pages/vfx/overview"
import { VfxCurriculum } from "@/components/course-pages/vfx/curriculum"
import { VfxShowcase } from "@/components/course-pages/vfx/showcase"
import { VfxCTA } from "@/components/course-pages/vfx/cta"

export default function VfxPage() {
  return (
    <main>
      <VfxHero />
      <VfxOverview />
      <VfxCurriculum />
      <VfxShowcase />
      <VfxCTA />
    </main>
  )
}

