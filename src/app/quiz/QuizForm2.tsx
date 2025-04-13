"use client";
import { generateQuiz } from "@/actions/generateQuiz";
import { useState } from "react";
import QuizContextProvider, { useQuizContext } from "./QuizContext";
import QuizComponent from "@/components/Quiz";

interface QuizInput {
  content: string;
  topic: string;
  numberOfQuestions: number;
  difficulty: string;
  subject: string;
}

function QuizFormUtil() {
  const { setQuizInput, quiz, setQuiz } = useQuizContext();
  const [formData, setFormData] = useState<QuizInput>({
    content: "",
    topic: "",
    numberOfQuestions: 5,
    difficulty: "medium",
    subject: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "numberOfQuestions" ? parseInt(value) || 0 : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setQuizInput(formData);
    // Handle form submission logic here
    const { content, difficulty, numberOfQuestions, subject, topic } = formData;
    setLoading(true);
    try {
      const response = await generateQuiz({
        content,
        difficulty,
        numberOfQuestions,
        subject,
        topic,
      });
      setQuiz(response);
      console.log("Quiz generated:", response);
      console.log("Quiz generated:", response.title);
      console.log("Quiz:", quiz);
    } catch (error) {
      console.error("Error generating quiz:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
        {quiz ? (
          <QuizComponent quiz={quiz} />
        ) : (
          <div className="p-6">
            <h1 className="text-2xl font-medium text-gray-800 dark:text-gray-100 mb-1">
              Create Quiz
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Fill in the details below to generate your quiz
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  placeholder="Mathematics, Science, History..."
                />
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Topic
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  placeholder="Algebra, World War II, Anatomy..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="difficulty"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Difficulty
                  </label>
                  <select
                    id="difficulty"
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="numberOfQuestions"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Number of Questions
                  </label>
                  <input
                    type="number"
                    id="numberOfQuestions"
                    name="numberOfQuestions"
                    min="1"
                    max="50"
                    value={formData.numberOfQuestions}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Additional Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows={4}
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  placeholder="Any specific instructions or content to include..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
                  disabled={loading}
                >
                  Generate Quiz
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function QuizForm() {
  return (
    <QuizContextProvider>
      <QuizFormUtil />
    </QuizContextProvider>
  );
}
