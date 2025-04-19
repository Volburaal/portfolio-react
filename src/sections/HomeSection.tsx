
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import SocialIcon from '@/components/SocialIcon';

interface HomeSectionProps {
  name: string;
  title: string;
  bgImage: string;
  socials: Array<{
    type: string;
    url: string;
    socialTitle: string;
  }>;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  name,
  title,
  bgImage,
  socials
}) => {
  return (
    <SectionContainer id="home" className="p-0">
      <div 
        className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-black mt-[7vh]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-5xl md:text-7xl mb-4 font-bold">{name}</h1>
          <h2 className="text-xl md:text-2xl mb-8 font-light">{title}</h2>
          
          <div className="flex items-center justify-center space-x-4">
            {socials.map((social, index) => (
              <SocialIcon 
                key={index} 
                type={social.type} 
                href={social.url}
                title={social.socialTitle}
                className="bg-white/10 hover:bg-white hover:text-black" 
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
