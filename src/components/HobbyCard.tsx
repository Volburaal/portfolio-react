
import React from 'react';
import { cn } from '@/lib/utils';

interface HobbyCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const HobbyCard: React.FC<HobbyCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className='bg-gradient-to-b from-black via-muted to-primary p-1 rounded-lg'>
      <div className={cn(
        'flex flex-col h-[100%] bg-black p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300',
        className
      )}>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default HobbyCard;
