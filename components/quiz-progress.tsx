import { Progress } from "@/components/ui/progress"

interface QuizProgressProps {
  current: number
  total: number
}

export function QuizProgress({ current, total }: QuizProgressProps) {
  const progress = (current / total) * 100

  return (
    <div className="w-full space-y-2">
      <Progress value={progress} className="h-2" />
      <p className="text-sm text-muted-foreground text-center">
        Question {current} of {total}
      </p>
    </div>
  )
}

