import type React from "react"
import { Github, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialLink {
  icon: React.ReactNode
  href: string
  label: string
}

export function SocialIcons() {
  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Volburaal",
      label: "GitHub",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      href: "https://api.whatsapp.com/send?phone=+923001899897&text=Hello",
      label: "WhatsApp",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:muzammilnoor897@gmail.com",
      label: "Email",
    },
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          variant="outline"
          size="icon"
          className="rounded-full"
          asChild
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  )
}
