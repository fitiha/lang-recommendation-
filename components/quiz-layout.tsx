import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuizLayoutProps {
  children: React.ReactNode
  title: string
}

export function QuizLayout({ children, title }: QuizLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  )
}

