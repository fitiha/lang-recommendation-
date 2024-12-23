import { QuizQuestion } from "@/types/quiz"

export const questions: QuizQuestion[] = [
  {
    id: "why",
    question: "Why do you want to learn programming?",
    options: [
      { id: "kids", text: "To teach my kids", value: "for_my_kids" },
      { id: "money", text: "To make money", value: "make_money" }
    ]
  },
  {
    id: "platform",
    question: "What platform interests you most?",
    options: [
      { id: "web", text: "Web Development", value: "web" },
      { id: "mobile", text: "Mobile Development", value: "mobile" }
    ]
  },
  {
    id: "extra-web-end",
    question: "Which part of web development interests you?",
    options: [
      { id: "frontend", text: "Frontend Development", value: "front_end" },
      { id: "backend", text: "Backend Development", value: "back_end" }
    ]
  },
  {
    id: "extra-work-for",
    question: "Where would you like to work?",
    options: [
      { id: "startup", text: "A Startup", value: "startup" },
      { id: "corporate", text: "A Large Corporation", value: "corporate" }
    ]
  },
  {
    id: "extra-new-tech",
    question: "Do you like trying new technologies?",
    options: [
      { id: "yes", text: "Yes, I love new tech!", value: "true" },
      { id: "no", text: "No, I prefer stable technologies", value: "false" }
    ]
  },
  {
    id: "extra-toy",
    question: "What was your favorite toy as a child?",
    options: [
      { id: "lego", text: "LEGO", value: "lego" },
      { id: "other", text: "Other toys", value: "other" }
    ]
  },
  {
    id: "extra-mobile-os",
    question: "Which mobile platform do you prefer?",
    options: [
      { id: "ios", text: "iOS", value: "ios" },
      { id: "android", text: "Android", value: "android" }
    ]
  }
]

