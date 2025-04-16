import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HobbyCardProps {
  title: string
  description: string
}

export function HobbyCard({ title, description }: HobbyCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
