import { GameDesignCTA } from "@/components/courses/course-pages/game-design/cta";
import { GameDesignCurriculum } from "@/components/courses/course-pages/game-design/curriculum";
import { GameDesignHero } from "@/components/courses/course-pages/game-design/hero";
import { GameDesignOverview } from "@/components/courses/course-pages/game-design/overview";
import { GameDesignProjects } from "@/components/courses/course-pages/game-design/projects";

export default function GameDesignPage() {
  return (
    <main>
      <GameDesignHero />
      <GameDesignOverview />
      <GameDesignCurriculum />
      <GameDesignProjects />
      <GameDesignCTA />
    </main>
  )
}

