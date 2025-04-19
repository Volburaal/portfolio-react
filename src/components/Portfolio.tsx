
import React from 'react';
import { SectionProvider } from '@/contexts/SectionContext';
import Navbar from '@/components/Navbar';
import HomeSection from '@/sections/HomeSection';
import AboutSection from '@/sections/AboutSection';
import EducationSection from '@/sections/EducationSection';
import ExperienceSection from '@/sections/ExperienceSection';
import SkillsSection from '@/sections/SkillsSection';
import WorksSection from '@/sections/WorksSection';
import AchievementsSection from '@/sections/AchievementsSection';
import HobbiesSection from '@/sections/HobbiesSection';
import { Star } from 'lucide-react';

const portfolioData = {
  name: "Yeah, I'm Muzammil.  ",
  title: "Computer Science Student at FAST - NUCES",
  heroBgImage: "/images/header-background.jpg",
  profilePhoto: "/images/profilepic.png",
  about: "Im Muzammil, pleasure to be meeting you, quite a pleasure. Tell you about myself? Im currently a Computer Science student at FAST - NUCES. Not much other than that. Im as average of a guy as you can get. Just an average person living an average life on an average sized planet in an average galaxy",
  socials: [
    { type: 'github', url: 'https://github.com/Volburaal', socialTitle:"Volburaal" },
    { type: 'whatsapp', url: 'https://api.whatsapp.com/send?phone=+923001899897&text=Hello', socialTitle:"+92 300 1899897" },
    { type: 'discord', url: '#', socialTitle:"chaotiz" },
    { type: 'email', url: 'mailto:muzammilnoor897@gmail.com', socialTitle:"muzammilnoor897@gmail.com" }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "FAST - NUCES",
      duration: "2022 - Present",
      description: "Lets see how this turns out."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Divisional Public School and College Sahiwal",
      duration: "2020 - 2022",
      description: "Intermediate in Pre-Engineering."
    },
    {
      degree: "Secondary Education",
      institution: "Divisional Public School and College Sahiwal",
      duration: "2018 - 2020",
      description: "Matriculation in Biology."
    },
    {
      degree: "Primary Education",
      institution: "Divisional Public School and College Sahiwal",
      duration: "2008 - 2018",
      description: "Finished my primary education, all the way from pre-school to 8th grade."
    }
  ],
  experience: [
    {
      position: "Teaching Assistant",
      company: "FAST - NUCES",
      duration: "August 2023 - Present",
      description: "I have been a teaching assistant for various instructors throught my degree. The courses i covered include Applied Physics, Computer Organization and Assembly Language, Digital Logic Design, Operating Systems"
    }
  ],
  skills: {
    introduction: "Here are some of the random skills I have learned over time by plain interest or from university courses",
    list: [
      { name: "C++", percentage: 45 },
      { name: "Python", percentage: 30 },
      { name: "Node.js", percentage: 85 },
      { name: "SQL", percentage: 75 },
      { name: "Postgres", percentage: 47 },
      { name: "C#", percentage: 30 },
      { name: "HTML", percentage: 84 },
      { name: "CSS", percentage: 92 },
      { name: "Lottie Animation (LottieLab)", percentage: 94 },
      { name: "JavaScript", percentage: 47 },
    ]
  },
  projects: [
    {
      title: "APK Heaven",
      description: "A basic website made by me and my team as a semester project.",
      technologies: ["HTML", "CSS"],
      image: "/images/portfolio/apk_haven.jpg",
      githubUrl: "https://github.com/Volburaal/apk-heaven",
      liveUrl: "https://apk-heaven.vercel.app/",
      category: "semester"
    },
    {
      title: "TMS+",
      description: "A very crude transport booking system made by me and my partner as a semester project.",
      technologies: ["C++", "Windows Forms"],
      image: "/images/portfolio/tms.png",
      githubUrl: "https://github.com/Volburaal/tms-",
      category: "semester"
    },
    {
      title: "Dictionary",
      description: "A semi decent dictionary app made by me and my group partners.",
      technologies: ["C++", "Windows Forms"],
      image: "/images/portfolio/dictionary.png",
      githubUrl: "https://github.com/Volburaal/Dictionary",
      category: "semester"
    },
    {
      title: "PingPongASM",
      description: "Ping Pong implemented in 8086 Assembly (super sucffed).",
      technologies: ["C++", "Windows Forms"],
      image: "/images/portfolio/pong.png",
      githubUrl: "https://github.com/Volburaal/PingPong",
      category: "semester"
    },
    {
      title: "KOS",
      description: "A simulated operating system made by me and my group members, not much to it",
      technologies: ["C++"],
      image: "/images/portfolio/kos.png",
      githubUrl: "https://github.com/Volburaal/KOS",
      category: "semester"
    },
    {
      title: "<NULL> Airlines",
      description: "A scuffed airline management system made by me and my partner.",
      technologies: ["C#", "Windows Forms", "Oracle Database"],
      image: "/images/portfolio/null_airlines.png",
      githubUrl: "https://github.com/Volburaal/airline-management-system",
      category: "semester"
    },
    {
      title: "Pinguin",
      description: "A very basic and not so scuffed chat application made by me and my group partners as another semester project.",
      technologies: ["HTML","CSS","JavaScript","ExpressJS","socket.io",],
      image: "/images/portfolio/Pinguin.png",
      githubUrl: "https://github.com/Volburaal/PingSquad",
      category: "semester"
    },
    {
      title: "Stickman Showdown",
      description: "An ambitious project initiated by coyote, which, unfortunately, stopped being developed after three months due to increasing commitments and priorities the team's personal lives. Anywho it was a BMan clone (planned to be) made using Godot Engine",
      technologies: ["Godot Engine"],
      image: "/images/portfolio/showdown.png",
      category: "misc"
    },
    {
      title: "Lost OS",
      description: "A discord bot I made to help manage the Lost Legions clan server",
      technologies: ["Python (discord.py)"],
      image: "/images/portfolio/lost.png",
      githubUrl: "https://github.com/Volburaal/Lost-OS",
      category: "misc"
    },
    {
      title: "Terrain Generation",
      description: "Did i mention exploring terrain generation was a hobby?",
      technologies: ["Python (PIL)"],
      image: "/images/portfolio/hitemop.png",
      liveUrl: "https://chaotiz.vercel.app/heightmaps",
      category: "misc"
    },
    {
      title: "ICIT 2024",
      description: "Worked as part of the Web Team for ICIT 2024",
      technologies: ["NextJS"],
      image: "/images/portfolio/icit.png",
      category: "misc",
      liveUrl: "https://www.icit.nu.edu.pk/",
    },
  ],
  achievements: [
    {
      title: "Deans List of Honor",
      description: "Appeared in the Deans list of honor four times."
    }
  ],
  hobbies: [
    {
      title: "Blender",
      description: "Improving my blender skills and making random objects is one of my passtimes.",
    },
    {
      title: "Pixel Art",
      description: "I like making pixel art, this comes from my BMan sprite modding days.",
    },
    {
      title: "Gaming",
      description: "I like gaming. I play Brawlhalla, Boring Man OTSC and Minecraft mainly. Sometimes I play Among Us, Castle Crashers, Terraria and Rogue Glitch Ultra. A little bit of DOTA 2, Elder Scrolls V and Combat Masters too if im in the mood.",
    },
    {
      title: "Thinking",
      description: "Thinking about the most random things, questioning reality and the system we live in is my favourite activity.",
    },
    {
      title: "Daydreaming",
      description: "Lets be honest, who doesnt like daydreaming?",
    }
  ]
};

const Portfolio: React.FC = () => {
  return (
    <SectionProvider>
      <div className="relative min-h-screen">
        <Navbar />
        
        <div className="relative">
          <HomeSection 
            name={portfolioData.name}
            title={portfolioData.title}
            bgImage={portfolioData.heroBgImage}
            socials={portfolioData.socials}
          />
          
          <AboutSection 
            photo={portfolioData.profilePhoto}
            description={portfolioData.about}
          />
          
          <EducationSection 
            educations={portfolioData.education}
          />
          
          <ExperienceSection 
            experiences={portfolioData.experience}
          />
          
          <SkillsSection 
            introduction={portfolioData.skills.introduction}
            skills={portfolioData.skills.list}
          />
          
          <WorksSection 
            projects={portfolioData.projects}
          />
          
          <AchievementsSection 
            achievements={portfolioData.achievements}
          />
          
          <HobbiesSection 
            hobbies={portfolioData.hobbies}
          />
        </div>
      </div>
    </SectionProvider>
  );
};

export default Portfolio;
