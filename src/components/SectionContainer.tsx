
import React from 'react';
import { cn } from '@/lib/utils';
import { useSection, SectionId } from '@/contexts/SectionContext';

interface SectionContainerProps {
  id: SectionId;
  className?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, className, children }) => {
  const { currentSection, previousSection, isTransitioning } = useSection();
  
  const isActive = currentSection === id;
  const wasPrevious = previousSection === id;
  
  return (
    <section
      id={id}
      className={cn(
        'min-h-[80vh] absolute top-0 left-0 right-0 section-transition',
        {

          'translate-x-0 z-10': isActive && !isTransitioning,
          'translate-x-full z-20 animate-slide-in-right': isActive && isTransitioning,
          '-translate-x-full z-0 animate-slide-out-left': wasPrevious && isTransitioning,
          'translate-x-full z-0 hidden': !isActive && !wasPrevious,
          'hidden': wasPrevious && !isTransitioning,
        },
        className
      )}
    >
      <div className="">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
