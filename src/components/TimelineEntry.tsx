
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineEntryProps {
  title: string;
  organization?: string;
  duration?: string;
  description: string | React.ReactNode;
  className?: string;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  title,
  organization,
  duration,
  description,
  className,
}) => {
  return (
    <div className={cn('mb-8 relative pl-6 border-l-2 border-border', className)}>
      <div className="absolute top-0 -left-[9px] w-4 h-4 bg-primary rounded-full"></div>
      <h4 className="font-semibold text-xl">{title}</h4>
      <div className="flex flex-wrap items-center text-muted-foreground mb-2">
          {organization && <span className="font-medium">{organization}</span>}
          {organization && duration && <span className="mx-2">•</span>}
          {duration && <span>{duration}</span>}
      </div>
      {typeof description === 'string' ? (
        <p className="text-muted-foreground">{description}</p>
      ) : (
        description
      )}
    </div>
  );
};

export default TimelineEntry;
