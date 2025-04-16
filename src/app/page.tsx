"use client"

import { SectionTransition } from "@/components/section-transition"
import { Navbar } from "@/components/navbar"
import { ThemeToggle } from "@/components/theme-toggle"
import { EducationEntry } from "@/components/education-entry"
import { WorkEntry } from "@/components/work-entry"
import { SkillBar } from "@/components/skill-bar"
import { ProjectCard } from "@/components/project-card"
import { HobbyCard } from "@/components/hobby-card"
import { SocialIcons } from "@/components/social-icons"

export default function Home() {
  // Education data
  const educationData = [
    {
      institution: "FAST-NUCES",
      degree: "Bachelor of Science - Computer Science",
      duration: "2022-Present",
    },
    {
      institution: "Divisional Public School and College Sahiwal",
      degree: "Intermediate in Pre-Engineering",
      duration: "2020-2022",
    },
    {
      institution: "Divisional Public School and College Sahiwal",
      degree: "Matriculation in Biology",
      duration: "2018-2020",
    },
    {
      institution: "Divisional Public School and College Sahiwal",
      degree: "General Schooling",
      duration: "2008-2018",
    },
  ]

  // Work experience data
  const workData = [
    {
      position: "Teaching Assistant",
      company: "Operating Systems",
      duration: "January 2025 - Present",
      description: "For CS2006 taught by Dr. Ammar Rafique.",
    },
    {
      position: "Teaching Assistant",
      company: "Digital Logic Design",
      duration: "January 2025 - Present",
      description: "For EE1005 taught by Ms. Rimsha Bashir Awan.",
    },
    {
      position: "Teaching Assistant",
      company: "Computer Organization and Assembly Language",
      duration: "August 2024 - January 2025",
      description: "For EE2003 taught by Mr. Ali Hamza.",
    },
    {
      position: "Teaching Assistant",
      company: "Applied Physics",
      duration: "January 2024 - June 2024",
      description: "For NS1001 taught by Ms. Rimsha Bashir Awan.",
    },
    {
      position: "Teaching Assistant",
      company: "Applied Physics",
      duration: "August 2023 - January 2024",
      description: "For NS1001 taught by Ms. Rimsha Bashir Awan.",
    },
  ]

  // Skills data
  const skillsData = [
    { name: "C++", percentage: 43 },
    { name: "Python", percentage: 30 },
    { name: "x86 Assembly", percentage: 69 },
    { name: "C#", percentage: 27 },
    { name: "HTML", percentage: 82 },
    { name: "CSS", percentage: 75 },
    { name: "Javascript", percentage: 15 },
    { name: "SQL (Oracle)", percentage: 77 },
    { name: "Godot Engine", percentage: 33 },
    { name: "Blender", percentage: 30 },
    { name: "Lottie Animation (Lottielab)", percentage: 86 },
  ]

  // Projects data
  const semesterProjects = [
    {
      title: "APK-Heaven",
      description: "A website made by me and my groupmates as a semester project",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "https://apk-heaven.vercel.app/",
    },
    {
      title: "TMS+",
      description: "A transport management system me and my partner made as a semester project.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "https://github.com/Volburaal/tms-",
    },
    {
      title: "Dictionary",
      description: "A dictionary app made by me and my group partners as a semester project.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "https://github.com/Volburaal/Dictionary",
    },
    {
      title: "PingPong ASM",
      description: "Classic ping pong implemented in 8086 assembly.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "https://github.com/Volburaal/PingPong",
    },
    {
      title: "KOS",
      description: "An operating system simulation made in C++ as a semester project.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "https://github.com/Volburaal/KOS",
    },
    {
      title: "<NULL> Airlines",
      description: "A scuffed airline management system I made along with my partner for a semester project.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "https://github.com/Volburaal/airline-management-system",
    },
    {
      title: "Pinguin",
      description: "A web based chat app made using ExpressJS and socket.io",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "https://github.com/Volburaal/airline-management-system",
    },
  ]

  const miscProjects = [
    {
      title: "Stickman Showdown",
      description: "A BMan clone made by coyote using Godot Engine. I worked as an artist and developer",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "https://github.com/coyote963/bman2",
    },
    {
      title: "Lost-OS",
      description:
        "A discord bot made by me to manage the Lost Legion clan server. Made using pythons discord.py library",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "https://github.com/Volburaal/Lost-OS",
    },
    {
      title: "Heightmaps",
      description: "Finding ways to make convincing heightmaps.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "heightmaps",
    },
    {
      title: "ICIT 2024",
      description: "Part of the web team and event management for ICIT 2024",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "https://www.icit.nu.edu.pk/",
    },
    {
      title: "Games",
      description: "Some silly games I made when I had too much time on my hands",
      imageUrl: "/placeholder.svg?height=200&width=300",
      projectUrl: "games",
    },
  ]

  // Hobbies data
  const hobbiesData = [
    {
      title: "Practicing Blender",
      description: "Improving my blender skills and making random objects is one of my passtimes.",
    },
    {
      title: "Pixel Art",
      description: "I like making pixel art, this comes from my BMan sprite modding days.",
    },
    {
      title: "Gaming",
      description:
        "I like gaming. I play Brawlhalla, Boring Man OTSC and Minecraft mainly. Sometimes I play Among Us, Castle Crashers, Terraria and Rogue Glitch Ultra. A little bit of DoTA, Elder Scrolls V and Combat Masters too if im in the mood.",
    },
    {
      title: "Thinking",
      description:
        "Thinking about the most random things, questioning reality and the system we live in is my favourite activity.",
    },
  ]

  // Achievements data
  const achievementsData = [
    {
      title: "Deans List of Honor",
      items: ["Fall 2022 (First Year)", "Spring 2023 (Second Year)", "Spring 2024 (Third Year)"],
    },
  ]

  return (
    <main className="relative">
      <Navbar />
      <ThemeToggle />

      {/* Home Section */}
      <SectionTransition
        id="home"
        className="relative flex items-center justify-center bg-gradient-to-b from-background to-background/80"
      >
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img src="/placeholder.svg" alt="Background" className="object-cover opacity-20"/>
          </div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Yeah, I'm Muzammil.</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">Computer Science Student at FAST - NUCES</h2>
          <SocialIcons />
        </div>
      </SectionTransition>

      {/* About Section */}
      <SectionTransition id="about" className="bg-gradient-to-b from-background/80 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <img src="/placeholder.svg?height=128&width=128" alt="Profile" className="object-cover"/>
              </div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground">
                Muhammad Muzammil Noor, pleasure to be meeting you, quite a pleasure.
              </p>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Education Section */}
      <SectionTransition id="education" className="bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold border-b-2 border-primary pb-2 mb-4">Timeline</h3>
              </div>
            </div>
            <div className="md:col-span-3">
              {educationData.map((education, index) => (
                <EducationEntry
                  key={index}
                  institution={education.institution}
                  degree={education.degree}
                  duration={education.duration}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Work Experience Section */}
      <SectionTransition id="work" className="bg-gradient-to-b from-background/90 to-background/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold border-b-2 border-primary pb-2 mb-4">Positions</h3>
              </div>
            </div>
            <div className="md:col-span-3">
              {workData.map((work, index) => (
                <WorkEntry
                  key={index}
                  position={work.position}
                  company={work.company}
                  duration={work.duration}
                  description={work.description}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Skills Section */}
      <SectionTransition id="skills" className="bg-gradient-to-b from-background/80 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <p className="text-muted-foreground mb-8">
            Here are some of the random skills I have learned over time by plain interest or from university courses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Works Section */}
      <SectionTransition id="works" className="bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Works</h2>

          <h3 className="text-2xl font-semibold mb-6">Semester Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {semesterProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6">Some random things I have worked on</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {miscProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Achievements Section */}
      <SectionTransition id="achievements" className="bg-gradient-to-b from-background/90 to-background/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold border-b-2 border-primary pb-2 mb-4">Recognition</h3>
              </div>
            </div>
            <div className="md:col-span-3">
              {achievementsData.map((achievement, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold mb-4">{achievement.title}</h3>
                  <ul className="space-y-2">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="mr-2">&bull;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Hobbies Section */}
      <SectionTransition id="hobbies" className="bg-gradient-to-b from-background/80 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Hobbies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbiesData.map((hobby, index) => (
              <HobbyCard key={index} title={hobby.title} description={hobby.description} />
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Footer */}
      <footer className="bg-background py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mb-6 p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
          <p className="text-muted-foreground">Sup Buttercup</p>
        </div>
      </footer>
    </main>
  )
}
