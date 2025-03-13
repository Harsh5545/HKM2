export interface CourseType {
  id: string
  title: string
  slug: string
  description: string
  image: string
  icon: string
  duration: string
  level: string
  features: string[]
  curriculum: {
    title: string
    modules: {
      title: string
      topics: string[]
    }[]
  }
  outcomes: string[]
  faq: {
    question: string
    answer: string
  }[]
}

export const courseData: CourseType[] = [
  {
    id: "1",
    title: "Game Design",
    slug: "game-design",
    description:
      "Learn the fundamentals of game design and create your own interactive experiences. Master industry-standard tools and techniques to bring your game ideas to life.",
    image: "/images/courses/game-design.jpg",
    icon: "/images/icons/game-icon.png",
    duration: "6 Months",
    level: "Beginner to Intermediate",
    features: [
      "3D Modeling",
      "Texturing and Materials",
      "Lighting and Rendering",
      "Visualization Techniques",
      "Level Design",
      "Design Visualization",
      "Game Design Principles",
      "3D Environment Creation",
    ],
    curriculum: {
      title: "Game Design Curriculum",
      modules: [
        {
          title: "Introduction to Game Design",
          topics: [
            "Game Design Fundamentals",
            "Game Mechanics and Systems",
            "Player Experience and Psychology",
            "Game Design Documentation",
          ],
        },
        {
          title: "Game Development Tools",
          topics: [
            "Introduction to Unity",
            "Introduction to Unreal Engine",
            "Asset Creation Basics",
            "Version Control for Game Development",
          ],
        },
        {
          title: "3D Modeling for Games",
          topics: [
            "3D Modeling Fundamentals",
            "Character Modeling",
            "Environment Modeling",
            "Props and Asset Creation",
          ],
        },
        {
          title: "Game Texturing and Materials",
          topics: ["Texture Creation Basics", "UV Mapping", "PBR Materials", "Texture Optimization for Games"],
        },
        {
          title: "Level Design",
          topics: ["Level Design Principles", "Blockout Techniques", "Environment Storytelling", "Level Optimization"],
        },
        {
          title: "Game Prototyping",
          topics: [
            "Rapid Prototyping Techniques",
            "Gameplay Programming Basics",
            "Testing and Iteration",
            "Final Project Development",
          ],
        },
      ],
    },
    outcomes: [
      "Create complete game design documents",
      "Develop 3D models optimized for games",
      "Design and implement engaging game levels",
      "Create game prototypes using industry-standard engines",
      "Apply texturing and lighting techniques for games",
      "Understand player psychology and engagement principles",
    ],
    faq: [
      {
        question: "What skills will I gain from the Game Design course?",
        answer:
          "You will acquire skills in 3D modeling, texturing, lighting, rendering, and game design principles. The course covers all aspects necessary to design and develop engaging video games.",
      },
      {
        question: "Is this Game Design course suitable for beginners?",
        answer:
          "Yes, this course is designed for both beginners and those with some experience. We cover the fundamentals and advance to more complex topics, making it suitable for all skill levels.",
      },
      {
        question: "What software will be used in the Game Design course?",
        answer:
          "The course includes industry-standard software for game design such as Unity, Unreal Engine, and Blender. Detailed information will be provided at the start of the course.",
      },
      {
        question: "Will I receive a certificate upon completion of the Game Design course?",
        answer:
          "Yes, you will receive a certification from Harikrishna Multimedia upon successfully completing the course, which acknowledges your skills and knowledge in game design.",
      },
    ],
  },
  {
    id: "2",
    title: "3D Jewelry Design",
    slug: "3d-jewelry-design",
    description:
      "Master the art of 3D jewelry design and turn your creative ideas into stunning pieces. Learn to create detailed and realistic jewelry models using industry-standard software.",
    image: "/images/courses/jewelry-design.jpg",
    icon: "/images/icons/jewelry-icon.png",
    duration: "4 Months",
    level: "Beginner to Advanced",
    features: [
      "3D Modeling",
      "Texturing and Materials",
      "Lighting and Rendering",
      "Visualization Techniques",
      "Enhanced Creativity",
      "Realistic Visualization",
      "Materials Simulation",
      "Realistic Rendering",
    ],
    curriculum: {
      title: "3D Jewelry Design Curriculum",
      modules: [
        {
          title: "Introduction to Jewelry Design",
          topics: [
            "Jewelry Design Fundamentals",
            "History and Styles of Jewelry",
            "Design Principles for Jewelry",
            "Sketching and Concept Development",
          ],
        },
        {
          title: "3D Modeling for Jewelry",
          topics: [
            "Introduction to Jewelry Modeling Software",
            "Basic Modeling Techniques",
            "Advanced Modeling for Complex Designs",
            "Gemstone Modeling",
          ],
        },
        {
          title: "Materials and Texturing",
          topics: [
            "Metal Materials Creation",
            "Gemstone Materials",
            "Texture Mapping for Jewelry",
            "Material Libraries and Management",
          ],
        },
        {
          title: "Rendering and Presentation",
          topics: [
            "Lighting Setup for Jewelry",
            "Studio-Quality Rendering",
            "Post-Processing Techniques",
            "Creating Presentation Materials",
          ],
        },
        {
          title: "Production and Manufacturing",
          topics: [
            "Preparing Models for 3D Printing",
            "Manufacturing Considerations",
            "Quality Control and Optimization",
            "Final Project Development",
          ],
        },
      ],
    },
    outcomes: [
      "Create detailed 3D jewelry models",
      "Apply realistic materials and textures to jewelry designs",
      "Render photorealistic images of jewelry pieces",
      "Prepare models for 3D printing and manufacturing",
      "Develop a professional portfolio of jewelry designs",
      "Understand jewelry design principles and trends",
    ],
    faq: [
      {
        question: "What are the main benefits of 3D jewelry design?",
        answer:
          "3D jewelry design allows for detailed and realistic visualizations, quicker prototyping, and creative freedom. It also reduces material waste and facilitates easy modifications and collaboration.",
      },
      {
        question: "Do I need prior experience in jewelry design to enroll?",
        answer:
          "No prior experience is needed. This course is designed for both beginners and experienced individuals. Basic computer skills and a passion for design will help you succeed.",
      },
      {
        question: "Which tools will be used in the 3D Jewelry Design course?",
        answer:
          "The course will cover tools such as Rhino, MatrixGold, and ZBrush, which are commonly used in the jewelry design industry for creating detailed 3D models.",
      },
      {
        question: "Will I get a certification after completing the 3D Jewelry Design course?",
        answer:
          "Yes, upon successful completion, you will receive a certification from Harikrishna Multimedia, validating your expertise in 3D jewelry design.",
      },
    ],
  },
  {
    id: "3",
    title: "3D Architectural Design",
    slug: "3d-architectural-design",
    description:
      "Explore the world of 3D architectural design and bring buildings to life. Learn to create stunning architectural visualizations using industry-standard software.",
    image: "/images/courses/architectural-design.jpg",
    icon: "/images/icons/architecture-icon.png",
    duration: "6 Months",
    level: "Beginner to Advanced",
    features: [
      "3D Modeling",
      "Texturing and Materials",
      "Lighting and Rendering",
      "Visualization Techniques",
      "Client Presentations",
      "Design Visualization",
      "Interior Design",
      "Exterior Design",
    ],
    curriculum: {
      title: "3D Architectural Design Curriculum",
      modules: [
        {
          title: "Introduction to Architectural Visualization",
          topics: [
            "Architectural Visualization Fundamentals",
            "Design Principles for Architecture",
            "Software Overview and Workflow",
            "Project Planning and Management",
          ],
        },
        {
          title: "3D Modeling for Architecture",
          topics: [
            "Building Modeling Techniques",
            "Interior Space Modeling",
            "Exterior and Landscape Modeling",
            "Furniture and Props Creation",
          ],
        },
        {
          title: "Materials and Texturing",
          topics: [
            "Architectural Materials Creation",
            "Texture Mapping for Buildings",
            "Material Libraries for Architecture",
            "Advanced Material Techniques",
          ],
        },
        {
          title: "Lighting and Rendering",
          topics: [
            "Natural and Artificial Lighting",
            "Interior Lighting Techniques",
            "Exterior and Environmental Lighting",
            "Rendering Settings and Optimization",
          ],
        },
        {
          title: "Post-Production and Presentation",
          topics: [
            "Image Post-Processing",
            "Creating Presentation Materials",
            "Virtual Tours and Animations",
            "Final Project Development",
          ],
        },
      ],
    },
    outcomes: [
      "Create detailed 3D architectural models",
      "Apply realistic materials and textures to architectural designs",
      "Set up professional lighting for interior and exterior scenes",
      "Render photorealistic architectural visualizations",
      "Develop compelling presentation materials for clients",
      "Create virtual tours and animations of architectural spaces",
    ],
    faq: [
      {
        question: "What will I learn in the 3D Architecture course?",
        answer:
          "The course covers 3D modeling, texturing, lighting, rendering, and visualization techniques specific to architectural design. You will learn how to create realistic and detailed architectural visualizations.",
      },
      {
        question: "Is prior experience in architecture required for this course?",
        answer:
          "No, prior architectural experience is not required. The course is designed to teach you the necessary skills from scratch, making it suitable for beginners and those with some background in design.",
      },
      {
        question: "What software will be covered in the 3D Architecture course?",
        answer:
          "You will learn to use industry-standard software such as AutoCAD, SketchUp, and 3ds Max, which are essential for creating architectural visualizations and presentations.",
      },
      {
        question: "Will I receive a certification after completing the 3D Architecture course?",
        answer:
          "Yes, you will receive a certification from Harikrishna Multimedia, which will highlight your expertise in 3D architectural visualization.",
      },
    ],
  },
  {
    id: "4",
    title: "Video Editing",
    slug: "video-editing",
    description:
      "Learn the art of video editing and create compelling visual stories. Master industry-standard editing software and techniques to produce professional-quality videos.",
    image: "/images/courses/video-editing.jpg",
    icon: "/images/icons/video-icon.png",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    features: [
      "Introduction to Video Editing",
      "Understanding Video Formats",
      "Organizing Footage",
      "Basic Editing Techniques",
      "Adding Audio and Music",
      "Applying Visual Effects",
      "Text and Titles",
      "Advanced Editing Techniques",
    ],
    curriculum: {
      title: "Video Editing Curriculum",
      modules: [
        {
          title: "Introduction to Video Editing",
          topics: [
            "Video Editing Fundamentals",
            "Understanding Video Formats and Codecs",
            "Setting Up Your Editing Environment",
            "Project Organization and Management",
          ],
        },
        {
          title: "Basic Editing Techniques",
          topics: [
            "Cutting and Trimming Footage",
            "Timeline Operations",
            "Transitions and Effects",
            "Basic Color Correction",
          ],
        },
        {
          title: "Audio Editing",
          topics: [
            "Audio Fundamentals for Video",
            "Dialogue Editing and Enhancement",
            "Music Selection and Editing",
            "Sound Effects and Foley",
          ],
        },
        {
          title: "Visual Effects and Graphics",
          topics: [
            "Text and Titles Creation",
            "Motion Graphics Basics",
            "Green Screen and Compositing",
            "Visual Effects Implementation",
          ],
        },
        {
          title: "Advanced Techniques and Output",
          topics: [
            "Advanced Color Grading",
            "Multi-camera Editing",
            "Export Settings and Formats",
            "Final Project Development",
          ],
        },
      ],
    },
    outcomes: [
      "Edit professional-quality videos using industry-standard software",
      "Apply effective transitions, effects, and color correction",
      "Create and edit audio for video productions",
      "Implement text, titles, and basic motion graphics",
      "Organize and manage video projects efficiently",
      "Export videos optimized for different platforms and purposes",
    ],
    faq: [
      {
        question: "What will I learn in the Video Editing course?",
        answer:
          "You will learn to edit video footage, organize clips, apply effects, and create polished final videos. The course covers both basic and advanced techniques, including audio editing and color correction.",
      },
      {
        question: "Is prior video editing experience required for this course?",
        answer:
          "No prior experience is necessary. The course is designed to teach you video editing from the ground up, making it accessible for beginners as well as those with some experience.",
      },
      {
        question: "Which software will be used in the Video Editing course?",
        answer:
          "The course includes instruction on popular video editing software such as Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve.",
      },
      {
        question: "Will I receive a certification after completing the Video Editing course?",
        answer:
          "Yes, you will receive a certification from Harikrishna Multimedia upon successful completion, which validates your skills in video editing.",
      },
    ],
  },
  {
    id: "5",
    title: "3D Animation",
    slug: "3d-animation",
    description:
      "Dive into the world of 3D animation and bring characters and scenes to life. Learn industry-standard animation techniques and software to create stunning animated content.",
    image: "/images/courses/3d-animation.jpg",
    icon: "/images/icons/animation-icon.png",
    duration: "6 Months",
    level: "Beginner to Advanced",
    features: [
      "3D Modeling",
      "Texturing and Materials",
      "Lighting and Rendering",
      "Character Animation",
      "Enhanced Creativity",
      "Realistic Visualization",
      "Rigging and Skinning",
      "Realistic Rendering",
    ],
    curriculum: {
      title: "3D Animation Curriculum",
      modules: [
        {
          title: "Introduction to 3D Animation",
          topics: [
            "Animation Principles and Fundamentals",
            "Understanding 3D Space and Workflow",
            "Software Overview and Interface",
            "Project Planning and Management",
          ],
        },
        {
          title: "3D Modeling for Animation",
          topics: [
            "Character Modeling Techniques",
            "Environment and Props Modeling",
            "Topology and Optimization",
            "Sculpting and Detailing",
          ],
        },
        {
          title: "Rigging and Character Setup",
          topics: [
            "Skeletal Rigging Fundamentals",
            "Weight Painting and Skinning",
            "Facial Rigging and Controls",
            "Advanced Rigging Techniques",
          ],
        },
        {
          title: "Animation Techniques",
          topics: [
            "Keyframe Animation",
            "Character Movement and Locomotion",
            "Facial Animation and Lip Sync",
            "Acting and Performance",
          ],
        },
        {
          title: "Materials, Lighting, and Rendering",
          topics: [
            "Material Creation for Characters",
            "Lighting for Animation",
            "Rendering Settings and Optimization",
            "Final Project Development",
          ],
        },
      ],
    },
    outcomes: [
      "Create detailed 3D character and environment models",
      "Rig and animate 3D characters with realistic movement",
      "Apply professional texturing and lighting techniques",
      "Render high-quality animated sequences",
      "Understand and apply the principles of animation",
      "Develop a professional animation portfolio",
    ],
    faq: [
      {
        question: "What will I learn in the 3D Animation course?",
        answer:
          "The course covers essential skills in 3D modeling, texturing, lighting, and animation techniques. You'll learn how to create and animate realistic 3D characters and scenes, enhancing your creativity and technical skills.",
      },
      {
        question: "Do I need previous animation experience for this course?",
        answer:
          "No prior animation experience is required. This course is designed for beginners as well as those with some experience. We cover both fundamental and advanced animation techniques.",
      },
      {
        question: "Which software will be taught in the 3D Animation course?",
        answer:
          "You will learn to use industry-standard software such as Blender, Maya, and 3ds Max for creating 3D animations and visual effects.",
      },
      {
        question: "Is certification provided upon completion of the 3D Animation course?",
        answer:
          "Yes, you will receive a certification from Harikrishna Multimedia upon successful completion of the course, recognizing your expertise in 3D animation.",
      },
    ],
  },
  {
    id: "6",
    title: "Visual Effects (VFX)",
    slug: "visual-effects",
    description:
      "Master the techniques of visual effects and add magic to your videos and films. Learn to create stunning visual effects using industry-standard software and techniques.",
    image: "/images/courses/vfx.jpg",
    icon: "/images/icons/vfx-icon.png",
    duration: "6 Months",
    level: "Intermediate to Advanced",
    features: [
      "3D Modeling",
      "Digital Compositing",
      "Particle Systems",
      "Green Screen Techniques",
      "Rotoscoping",
      "Matte Painting",
      "Motion Tracking",
      "Special Effects",
    ],
    curriculum: {
      title: "Visual Effects (VFX) Curriculum",
      modules: [
        {
          title: "Introduction to Visual Effects",
          topics: [
            "VFX Fundamentals and Workflow",
            "Understanding the VFX Pipeline",
            "Software Overview and Tools",
            "Project Planning and Management",
          ],
        },
        {
          title: "Digital Compositing",
          topics: [
            "Compositing Fundamentals",
            "Layer-Based Compositing",
            "Node-Based Compositing",
            "Color Correction and Grading",
          ],
        },
        {
          title: "Green Screen and Rotoscoping",
          topics: [
            "Green Screen Shooting Techniques",
            "Keying and Extraction Methods",
            "Rotoscoping Techniques",
            "Edge Refinement and Integration",
          ],
        },
        {
          title: "3D Elements and Integration",
          topics: [
            "3D Tracking and Match Moving",
            "3D Element Creation",
            "Lighting and Rendering for VFX",
            "3D Integration with Live Action",
          ],
        },
        {
          title: "Particle Systems and Simulations",
          topics: [
            "Particle System Fundamentals",
            "Creating Fire, Smoke, and Explosions",
            "Fluid Simulations",
            "Final Project Development",
          ],
        },
      ],
    },
    outcomes: [
      "Create professional-quality visual effects for film and video",
      "Master digital compositing techniques",
      "Perform green screen extractions and rotoscoping",
      "Integrate 3D elements with live-action footage",
      "Create particle-based effects like fire, smoke, and explosions",
      "Develop dynamic fluid simulations",
      "Build a professional VFX portfolio",
    ],
    faq: [
      {
        question: "What are the key skills learned in the Visual Effects course?",
        answer:
          "You will master skills such as 3D modeling, digital effects creation, rotoscoping, and green screen techniques. The course covers both practical and creative aspects of visual effects.",
      },
      {
        question: "Is previous experience needed for the Visual Effects course?",
        answer:
          "Some basic knowledge of video editing or 3D graphics is helpful, but not required. The course is designed to build your skills from intermediate to advanced levels.",
      },
      {
        question: "Which software will be used in the Visual Effects course?",
        answer:
          "The course includes training in Adobe After Effects, Nuke, Autodesk Maya, and Houdini for creating and editing visual effects.",
      },
      {
        question: "Will I receive a certification after completing the Visual Effects course?",
        answer:
          "Yes, you will receive a certification from Harikrishna Multimedia upon successful completion, which will validate your skills in visual effects.",
      },
    ],
  },
  {
    id: "7",
    title: "2D Animation",
    slug: "2d-animation",
    description:
      "Learn the principles of 2D animation and create captivating animated stories. Master traditional and digital 2D animation techniques to bring your ideas to life.",
    image: "/images/courses/2d-animation.jpg",
    icon: "/images/icons/2d-animation-icon.png",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    features: [
      "Storyboarding",
      "Frame Animation",
      "Character Design",
      "Background Design",
      "Tweening",
      "Lip-syncing",
      "Secondary Motion",
      "2D Model Sheets",
    ],
    curriculum: {
      title: "2D Animation Curriculum",
      modules: [
        {
          title: "Animation Fundamentals",
          topics: [
            "Principles of Animation",
            "Understanding Timing and Spacing",
            "Drawing for Animation",
            "Animation Workflow and Planning",
          ],
        },
        {
          title: "Character Design and Animation",
          topics: [
            "Character Design Principles",
            "Creating Model Sheets",
            "Character Animation Basics",
            "Facial Expressions and Lip Sync",
          ],
        },
        {
          title: "Digital Animation Techniques",
          topics: [
            "Digital Animation Tools",
            "Frame-by-Frame Animation",
            "Tweening and Rigging in 2D",
            "Effects Animation",
          ],
        },
        {
          title: "Background Design and Layout",
          topics: [
            "Background Design Principles",
            "Perspective and Composition",
            "Color Theory for Animation",
            "Integrating Characters with Backgrounds",
          ],
        },
        {
          title: "Production and Finalization",
          topics: [
            "Compositing Animation Elements",
            "Adding Sound and Music",
            "Final Output and Formats",
            "Final Project Development",
          ],
        },
      ],
    },
    outcomes: [
      "Create engaging 2D animated sequences",
      "Design appealing characters and backgrounds",
      "Apply the principles of animation to your work",
      "Produce frame-by-frame and tweened animations",
      "Integrate sound and music with animation",
      "Develop a professional 2D animation portfolio",
    ],
    faq: [
      {
        question: "What will I learn in the 2D Animation course?",
        answer:
          "The course teaches you storyboarding, frame-by-frame animation, character design, background creation, and digital animation techniques. You will develop skills to create detailed and dynamic 2D animations.",
      },
      {
        question: "Do I need any prior experience in animation for this course?",
        answer:
          "No prior animation experience is required. The course is designed to guide you from basic to advanced 2D animation techniques.",
      },
      {
        question: "Which tools and software will be covered in the 2D Animation course?",
        answer:
          "You will use tools such as Adobe Animate, Toon Boom Harmony, and Procreate for creating 2D animations. The course includes practical exercises with these industry-standard tools.",
      },
      {
        question: "Will I get a certification after completing the 2D Animation course?",
        answer:
          "Yes, upon successful completion of the course, you will receive a certification from Harikrishna Multimedia, highlighting your proficiency in 2D animation.",
      },
    ],
  },
  {
    id: "8",
    title: "Graphics Design",
    slug: "graphics-design",
    description:
      "Develop your graphic design skills and create stunning visuals for various purposes. Learn to use industry-standard design software and principles to create impactful visual content.",
    image: "/images/courses/graphics-design.jpg",
    icon: "/images/icons/graphics-icon.png",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    features: [
      "Typography",
      "Layout and Composition",
      "Color Theory",
      "Visualization Techniques",
      "Branding and Identity",
      "Print and Digital Media",
      "Image Manipulation",
      "Logo Design",
    ],
    curriculum: {
      title: "Graphics Design Curriculum",
      modules: [
        {
          title: "Design Fundamentals",
          topics: [
            "Elements and Principles of Design",
            "Typography Basics",
            "Color Theory and Application",
            "Composition and Layout",
          ],
        },
        {
          title: "Digital Design Tools",
          topics: [
            "Introduction to Adobe Photoshop",
            "Introduction to Adobe Illustrator",
            "Introduction to Adobe InDesign",
            "File Formats and Resolution",
          ],
        },
        {
          title: "Branding and Identity Design",
          topics: [
            "Logo Design Principles",
            "Brand Identity Systems",
            "Style Guides and Brand Standards",
            "Brand Applications",
          ],
        },
        {
          title: "Print and Digital Media Design",
          topics: [
            "Print Design Fundamentals",
            "Digital Media Design",
            "Responsive Design Basics",
            "Preparing Files for Production",
          ],
        },
        {
          title: "Portfolio Development",
          topics: [
            "Project Planning and Execution",
            "Design Critique and Refinement",
            "Portfolio Presentation",
            "Final Project Development",
          ],
        },
      ],
    },
    outcomes: [
      "Create professional graphic designs for print and digital media",
      "Apply typography, color theory, and composition principles",
      "Develop brand identities and logo designs",
      "Use industry-standard design software proficiently",
      "Prepare files for various production methods",
      "Build a professional graphic design portfolio",
    ],
    faq: [
      {
        question: "What will I learn in the Graphics Design course?",
        answer:
          "The course covers typography, layout and composition, color theory, branding, and image manipulation. You will gain skills to create effective visual communication for both print and digital media.",
      },
      {
        question: "Is any prior graphic design experience necessary for this course?",
        answer:
          "No prior experience is required. The course is designed for both beginners and those with some experience, providing a comprehensive introduction to graphic design principles and techniques.",
      },
      {
        question: "Which software tools will be used in the Graphics Design course?",
        answer:
          "You will learn to use Adobe Creative Suite tools such as Photoshop, Illustrator, and InDesign, which are essential for graphic design.",
      },
      {
        question: "Will I receive certification after completing the Graphics Design course?",
        answer:
          "Yes, upon successful completion, you will receive a certification from Harikrishna Multimedia, recognizing your skills in graphic design.",
      },
    ],
  },
]

