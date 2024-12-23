"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz-layout";
import { QuizProgress } from "@/components/quiz-progress";
import { questions } from "@/lib/questions";
import { getRecommendation } from "@/lib/actions";
import type { QuizState } from "@/types/quiz";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [state, setState] = useState<QuizState>({ extra: {} });
  const [isLoading, setIsLoading] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = async (value: string) => {
    const newState = { ...state };

    // Update state
    if (question.id === "why") newState.why = value;
    else if (question.id === "platform") newState.platform = value;
    else if (question.id.startsWith("extra-")) {
        const field = question.id.replace("extra-", "").replace(/-./g, (x) => x[1].toUpperCase());
        newState.extra = { ...newState.extra, [field]: value === "true" ? true : value };
    }

    setState(newState);

    // Move to next question or fetch recommendation
    if (currentQuestion < questions.length - 1) {
        let nextQuestion = currentQuestion + 1;

        if (newState.platform === "web" && questions[nextQuestion].id === "extra-mobile-os") return;
        if (newState.platform === "mobile") {
            nextQuestion = questions.findIndex((q) => q.id === "extra-mobile-os");
        }

        setCurrentQuestion(nextQuestion);
    } else {
        setIsLoading(true);
        try {
            const recommendation = await getRecommendation(newState);
            if (recommendation) router.push(`/quiz/result?language=${recommendation}`);
            else throw new Error("No recommendation received");
        } catch (error) {
            console.error(error);
            alert("Failed to get recommendation. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }
};


  return (
    <QuizLayout title="Find Your Programming Path">
      <div className="space-y-8">
        <QuizProgress current={currentQuestion + 1} total={questions.length} />

        <div className="space-y-4">
          <h2 className="text-xl font-medium text-center">
            {question.question}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {question.options.map((option) => (
              <Button
                key={option.id}
                variant="outline"
                className="p-8 h-auto text-lg"
                onClick={() => handleAnswer(option.value)}
                disabled={isLoading}
              >
                {option.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </QuizLayout>
  );
}
