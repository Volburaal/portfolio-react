
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  skill: string;
  percentage: number;
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, className }) => {
  return (
    <div className={cn('mb-6', className)}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
      </div>
      <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
