"use client";

import React, { createContext, useContext, useState } from "react";
import type { Quiz, QuizInput } from "@/types/index";

const initialQuizInput: QuizInput = {
  content: "",
  topic: "",
  numberOfQuestions: 1,
  difficulty: "",
  subject: "",
};

interface QuizInputContextType {
  quizInput: QuizInput;
  setQuizInput: React.Dispatch<React.SetStateAction<QuizInput>>;
  quiz?: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz | undefined>>;
}

const QuizContext = createContext<QuizInputContextType>({
  quizInput: initialQuizInput,
  setQuizInput: () => {},
  setQuiz: () => {},
});

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizContextProvider");
  }
  return context;
};

export default function QuizContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [quizInput, setQuizInput] = useState<QuizInput>(initialQuizInput);
  const [quiz, setQuiz] = useState<Quiz | undefined>(undefined);

  return (
    <QuizContext.Provider value={{ quizInput, setQuizInput, quiz, setQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}
