
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import TimelineEntry from '@/components/TimelineEntry';

interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <SectionContainer id="experience">
      <div className='bg-black min-h-[85vh] p-10'>
        <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineEntry
              key={index}
              title={experience.position}
              organization={experience.company}
              duration={experience.duration}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
