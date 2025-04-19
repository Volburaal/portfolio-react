
import React, { useState } from 'react';
import SectionContainer from '@/components/SectionContainer';
import ProjectCard from '@/components/ProjectCard';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

interface WorksSectionProps {
  projects: Project[];
}

const WorksSection: React.FC<WorksSectionProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <SectionContainer id="works">
      <div className='bg-black min-h-[85vh] p-10'>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-l-md border',
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-muted'
              )}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('semester')}
              className={cn(
                'px-4 py-2 text-sm font-medium border-t border-b border-r',
                activeCategory === 'semester'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-muted'
              )}
            >
              Semester
            </button>
            <button
              onClick={() => setActiveCategory('misc')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-r-md border-t border-r border-b',
                activeCategory === 'misc'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-muted'
              )}
            >
              Misc
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              category={project.category}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default WorksSection;
