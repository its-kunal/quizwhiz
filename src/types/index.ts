interface Quiz {
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  question: string;
  mutlipleChoice: string[];
  answer: string;
  explanation: string;
  hint: string;
  difficulty: number;
}

interface QuizInput {
  content: string;
  topic: string;
  numberOfQuestions: number;
  difficulty: string;
  subject: string;
}

export type { Quiz, Question, QuizInput };
