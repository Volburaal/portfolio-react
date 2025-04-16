interface WorkEntryProps {
  position: string
  company: string
  duration: string
  description: string
}

export function WorkEntry({ position, company, duration, description }: WorkEntryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold">{position}</h3>
      <p className="text-muted-foreground">
        <span className="font-medium">{company}</span> <span className="mx-2">&bull;</span> <span>{duration}</span>
      </p>
      <p className="mt-2">{description}</p>
    </div>
  )
}
