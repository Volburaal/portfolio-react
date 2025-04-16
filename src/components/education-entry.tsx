interface EducationEntryProps {
  institution: string
  degree: string
  duration: string
  description?: string
}

export function EducationEntry({ institution, degree, duration, description }: EducationEntryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold">{institution}</h3>
      <p className="text-muted-foreground">
        <span className="font-medium">{degree}</span> <span className="mx-2">&bull;</span> <span>{duration}</span>
      </p>
      {description && <p className="mt-2">{description}</p>}
    </div>
  )
}
