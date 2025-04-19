
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import TimelineEntry from '@/components/TimelineEntry';


interface Achievement {
  title: string;
  description?: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  return (
    <SectionContainer id="achievements">
      <div className='bg-black min-h-[85vh] p-10'>
        <h2 className="text-3xl font-bold mb-12">Achievements</h2>
        
        <ul className="list-disc pl-6 space-y-4 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <TimelineEntry
              key={index}
              title={achievement.title}
              organization={""}
              duration={""}
              description={achievement.description}
            />
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default AchievementsSection;
