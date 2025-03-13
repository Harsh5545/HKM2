import { JewelryDesignCTA } from "@/components/courses/course-pages/jewelry-design/cta";
import { JewelryDesignCurriculum } from "@/components/courses/course-pages/jewelry-design/curriculum";
import { JewelryDesignGallery } from "@/components/courses/course-pages/jewelry-design/gallery";
import { JewelryDesignHero } from "@/components/courses/course-pages/jewelry-design/hero";
import { JewelryDesignOverview } from "@/components/courses/course-pages/jewelry-design/overview";

export default function JewelryDesignPage() {
  return (
    <main>
      <JewelryDesignHero />
      <JewelryDesignOverview />
      <JewelryDesignCurriculum />
      <JewelryDesignGallery />
      <JewelryDesignCTA />
    </main>
  )
}

