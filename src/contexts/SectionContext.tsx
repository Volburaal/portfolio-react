
import React, { createContext, useContext, useState } from 'react';

export type SectionId = 'home' | 'about' | 'education' | 'experience' | 'skills' | 'works' | 'achievements' | 'hobbies';

interface SectionContextType {
  currentSection: SectionId;
  previousSection: SectionId | null;
  setSection: (section: SectionId) => void;
  isTransitioning: boolean;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<SectionId>('home');
  const [previousSection, setPreviousSection] = useState<SectionId | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setSection = (section: SectionId) => {
    if (section !== currentSection && !isTransitioning) {
      setIsTransitioning(true);
      setPreviousSection(currentSection);
      
      setTimeout(() => {
        setCurrentSection(section);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 400);
      }, 300);
    }
  };

  return (
    <SectionContext.Provider value={{ currentSection, previousSection, setSection, isTransitioning }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = (): SectionContextType => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};
