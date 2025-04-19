
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  photo: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ photo, description }) => {
  return (
    <SectionContainer id="about">
      <div className="flex flex-col md:flex-row gap-8 items-center bg-black min-h-[80vh] p-10 lg:p-20">
        <div className="w-full md:w-1/3">
          <div className="rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
            <img 
              src={photo} 
              alt="Profile" 
              className="w-auto h-[15vh] object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert text-justify">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
