import React from 'react';
import { Github, Mail } from 'lucide-react';
import { RxDiscordLogo } from "react-icons/rx";
import { SiWhatsapp } from "react-icons/si";
import { cn } from '@/lib/utils';

export type SocialType = string;

interface SocialIconProps {
  type: SocialType;
  href: string;
  className?: string;
  title?: string;  // Added optional title prop for hover text
}

const SocialIcon: React.FC<SocialIconProps> = ({ type, href, className, title }) => {
  const getIcon = () => {
    const design = "h-10 w-10 bg-white/20 rounded-full p-2";
    switch (type) {
      case 'github':
        return <Github className={`${design}`} />;
      case 'email':
        return <Mail className={`${design}`} />;
      case 'whatsapp':
        return <SiWhatsapp className={`${design}`} />;
      case 'discord':
        return <RxDiscordLogo className={`${design}`} />;
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex items-center justify-center w-10 h-10 rounded-full bg-muted transition-all duration-300 hover:bg-primary hover:text-primary-foreground',
        className
      )}
      title={title}
    >
      {getIcon()}
    </a>
  );
};

export default SocialIcon;
