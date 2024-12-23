import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 text-center space-y-8">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Find Your Perfect Programming Path
        </h1>
        <p className="text-xl text-muted-foreground">
          Answer a few questions and we'll recommend the best programming language for you to learn.
        </p>
      </div>

      <Link href="/quiz">
        <Button size="lg" className="text-lg">
          Start Quiz
        </Button>
      </Link>
    </div>
  )
}

