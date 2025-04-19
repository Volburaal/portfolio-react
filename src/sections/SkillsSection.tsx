
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import SkillBar from '@/components/SkillBar';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillsSectionProps {
  introduction: string;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ introduction, skills }) => {
  return (
    <SectionContainer id="skills">
      <div className='bg-black min-h-[85vh] p-10'>
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <p className="mb-12 max-w-2xl">{introduction}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
