
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import TimelineEntry from '@/components/TimelineEntry';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

interface EducationSectionProps {
  educations: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ educations }) => {
  return (
    <SectionContainer id="education">
      <div className='bg-black min-h-[85vh] p-10'>
        <h2 className="text-3xl font-bold mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          {educations.map((education, index) => (
            <TimelineEntry
              key={index}
              title={education.degree}
              organization={education.institution}
              duration={education.duration}
              description={education.description}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default EducationSection;
