
import React from 'react';
import { cn } from '@/lib/utils';
import { Github, ExternalLink } from 'lucide-react';


interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  className,
}) => {
  return (
    <div className='bg-gradient-to-b from-black via-muted to-primary p-1 rounded-xl min-w-[100%]'>
      <div className={cn(
        'bg-gradient-to-t from-card from-5% to-black to-45% p-5 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full',
        className
      )}>
        {image && (
          <div className="h-48 overflow-hidden flex items-center justify-center">
            <img 
              src={image} 
              alt={title} 
              className="w-max rounded h-full object-cover transition-transform duration-500 hover:scale-105" 
            />
          </div>
        )}
        <div className="p-5 flex flex-col flex-grow">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs bg-muted rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between space-x-2 mt-auto">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 ml-auto text-sm hover:text-primary transition-colors"
              >
                <span>Live</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
