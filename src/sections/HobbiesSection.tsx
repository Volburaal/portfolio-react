
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import HobbyCard from '@/components/HobbyCard';

interface Hobby {
  title: string;
  description: string;
}

interface HobbiesSectionProps {
  hobbies: Hobby[];
}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ hobbies }) => {
  return (
    <SectionContainer id="hobbies">
      <div className='bg-black min-h-[85vh] p-10'>
        <h2 className="text-3xl font-bold mb-12">Hobbies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              title={hobby.title}
              description={hobby.description}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default HobbiesSection;
