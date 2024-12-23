"use client";

import { QuizLayout } from "@/components/quiz-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const language = searchParams?.get("language") || "Loading...";

  return (
      <QuizLayout title="Your Recommended Path">
          <div className="space-y-8 text-center">
              <div className="space-y-4">
                  <h2 className="text-4xl font-bold">{language}</h2>
                  <p className="text-xl text-muted-foreground">
                      {language !== "Loading..."
                          ? `Based on your answers, we recommend you start with ${language}!`
                          : "Fetching your recommendation..."}
                  </p>
              </div>

              <div className="space-y-4">
                  <Link href="/quiz">
                      <Button variant="outline" className="mx-auto">
                          Take the Quiz Again
                      </Button>
                  </Link>
              </div>
          </div>
      </QuizLayout>
  );
}
