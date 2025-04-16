import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

export function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </a>
    </Card>
  )
}