"use client";
import React from "react";
import QuizContextProvider from "./QuizContext";

function QuizFormUitl() {
  return (
    <form className="flex flex-col gap-4 w-72">
      <input
        type="text"
        placeholder="Enter your name"
        className="border p-2 rounded-md"
      />
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 rounded-md"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md w-48 mt-4"
        type="submit"
      >
        Start Quiz
      </button>
    </form>
  );
}

export default function QuizForm() {
  return (
    <QuizContextProvider>
      <QuizFormUitl />
    </QuizContextProvider>
  );
}
