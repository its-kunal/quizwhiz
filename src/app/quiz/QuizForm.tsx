"use client";
import React, { useRef } from "react";
import QuizContextProvider from "./QuizContext";

function QuizFormUitl() {
  const formRef = useRef<HTMLFormElement>(null);
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(formRef.current!);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    console.log("Name:", name);
    console.log("Email:", email);
  };
  return (
    <form
      className="flex flex-col gap-4 w-72"
      onSubmit={formSubmitHandler}
      ref={formRef}
    >
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        className="border p-2 rounded-md"
      />
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
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
