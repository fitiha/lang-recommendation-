"use server";

import { QuizState } from "@/types/quiz";

export async function getRecommendation(state: QuizState) {
  try {
    const response = await fetch("http://localhost:8080/recommend_language", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        why: state.why,
        platform: state.platform,
        extra: state.extra,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get recommendation");
    }

    const data = await response.json();
    return data.recommended_language;
  } catch (error) {
    console.error("Error:", error);
    return "unknown";
  }
}
