export interface QuizQuestion {
  id: string
  question: string
  options: {
    id: string
    text: string
    value: string
  }[]
}

export interface QuizState {
  why?: string
  platform?: string
  extra: {
    end?: string
    work_for?: string
    new_tech?: boolean
    favorite_toy?: string
    os?: string
  }
}

