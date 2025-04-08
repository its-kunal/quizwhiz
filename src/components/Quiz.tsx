import { useState, useEffect, useRef } from "react";
import { Quiz } from "@/types";

export default function QuizComponent({ quiz }: { quiz: Quiz }) {
  // State for tracking user answers and quiz state
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(
    Array(quiz.questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showHints, setShowHints] = useState<boolean[]>(
    Array(quiz.questions.length).fill(false)
  );
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  
  // Refs for focus management
  const questionTitleRef = useRef<HTMLHeadingElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus management for accessibility
  useEffect(() => {
    if (!showResults && questionTitleRef.current) {
      questionTitleRef.current.focus();
    } else if (showResults && resultsRef.current) {
      resultsRef.current.focus();
    }
  }, [currentQuestion, showResults]);

  // Calculate score
  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      if (answer === quiz.questions[index].answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  // Handle answer selection
  const handleAnswerSelect = (answer: string, questionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  // Toggle hint visibility
  const toggleHint = (index: number) => {
    const newShowHints = [...showHints];
    newShowHints[index] = !newShowHints[index];
    setShowHints(newShowHints);
  };

  // Handle next question navigation
  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  // Handle previous question navigation
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Reset the quiz
  const resetQuiz = () => {
    setUserAnswers(Array(quiz.questions.length).fill(null));
    setShowResults(false);
    setShowHints(Array(quiz.questions.length).fill(false));
    setCurrentQuestion(0);
  };

  // Get answer status class
  const getAnswerStatusClass = (option: string, questionIndex: number) => {
    if (!userAnswers[questionIndex] || !showResults) return "";

    const isSelected = option === userAnswers[questionIndex];
    const isCorrect = option === quiz.questions[questionIndex].answer;

    if (isSelected && isCorrect) return "bg-green-100 border-green-500";
    if (isSelected && !isCorrect) return "bg-red-100 border-red-500";
    if (!isSelected && isCorrect && showResults)
      return "bg-green-50 border-green-300";

    return "";
  };

  if (!quiz) {
    return (
      <div className="p-6 text-center text-gray-800" role="alert">
        No quiz data available
      </div>
    );
  }

  // Generate unique IDs for accessibility
  const getQuestionId = (index: number) => `question-${index}`;
  const getOptionId = (questionIndex: number, optionIndex: number) => 
    `question-${questionIndex}-option-${optionIndex}`;
  const getHintId = (index: number) => `hint-${index}`;

  return (
    <div 
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
      role="region"
      aria-label="Interactive Quiz"
    >
      {/* Quiz Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
        <p className="text-white text-opacity-90">{quiz.description}</p>
        {!showResults && (
          <div className="mt-4 flex items-center">
            <span 
              className="bg-white text-blue-700 font-bold rounded-full h-8 w-8 flex items-center justify-center"
              aria-hidden="true"
            >
              {currentQuestion + 1}
            </span>
            <span className="ml-2 text-sm">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </span>
          </div>
        )}
      </header>

      {/* Results View */}
      {showResults ? (
        <div 
          className="p-6" 
          role="region" 
          aria-label="Quiz Results"
          ref={resultsRef}
          tabIndex={-1}
        >
          <div className="text-center mb-8">
            <div className="inline-flex rounded-full bg-green-100 p-4 mb-4">
              <div 
                className="rounded-full bg-green-200 text-green-800 font-bold text-xl p-4"
                aria-live="polite"
              >
                {calculateScore()} / {quiz.questions.length}
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Quiz Complete!</h2>
            <p className="text-gray-700">
              You scored {calculateScore()} out of {quiz.questions.length} questions.
            </p>
            <button
              onClick={resetQuiz}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Restart Quiz"
            >
              Restart Quiz
            </button>
          </div>

          {/* Review Questions */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Review Questions</h3>
            {quiz.questions.map((question, index) => (
              <div
                key={index}
                className="mb-8 p-4 border rounded-lg bg-gray-50"
              >
                <h4 
                  className="font-bold text-lg mb-2 text-gray-900"
                  id={getQuestionId(index)}
                >
                  {index + 1}. {question.question}
                </h4>
                <div 
                  className="ml-4 mb-4"
                  role="group"
                  aria-labelledby={getQuestionId(index)}
                >
                  {question.mutlipleChoice.map((option, i) => (
                    <div
                      key={i}
                      className={`p-3 border rounded mb-2 ${
                        option === question.answer
                          ? "bg-green-100 border-green-500"
                          : option === userAnswers[index]
                          ? "bg-red-100 border-red-500"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <span id={getOptionId(index, i)} className="text-gray-800">{option}</span>
                        {option === question.answer && (
                          <span className="ml-2 text-green-700 text-sm font-bold">
                            ✓ Correct Answer
                          </span>
                        )}
                        {option === userAnswers[index] &&
                          option !== question.answer && (
                            <span className="ml-2 text-red-700 text-sm font-bold">
                              ✗ Your Answer
                            </span>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 p-3 rounded border border-blue-100">
                  <p className="text-sm text-gray-800">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Quiz questions view
        <div 
          className="p-6"
          role="form"
          aria-labelledby={getQuestionId(currentQuestion)}
        >
          <div className="mb-8">
            <h2 
              className="text-xl font-bold mb-4 text-gray-900"
              id={getQuestionId(currentQuestion)}
              ref={questionTitleRef}
              tabIndex={-1}
            >
              {currentQuestion + 1}. {quiz.questions[currentQuestion].question}
            </h2>
            <fieldset
              className="space-y-3 mb-6"
              aria-labelledby={getQuestionId(currentQuestion)}
            >
              <legend className="sr-only">Answer options</legend>
              {quiz.questions[currentQuestion].mutlipleChoice.map(
                (option, i) => {
                  const optionId = getOptionId(currentQuestion, i);
                  return (
                    <div
                      key={i}
                      onClick={() => handleAnswerSelect(option, currentQuestion)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleAnswerSelect(option, currentQuestion);
                        }
                      }}
                      className={`p-3 border rounded cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                        userAnswers[currentQuestion] === option
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      } ${getAnswerStatusClass(option, currentQuestion)}`}
                      role="radio"
                      aria-checked={userAnswers[currentQuestion] === option}
                      tabIndex={0}
                      id={optionId}
                      aria-labelledby={optionId}
                    >
                      <div className="flex items-center">
                        <div
                          className={`h-5 w-5 mr-3 rounded-full flex items-center justify-center border ${
                            userAnswers[currentQuestion] === option
                              ? "border-blue-500 bg-blue-500 text-white"
                              : "border-gray-400"
                          }`}
                          aria-hidden="true"
                        >
                          {userAnswers[currentQuestion] === option && (
                            <span className="text-xs">✓</span>
                          )}
                        </div>
                        <span className="text-gray-800">{option}</span>
                      </div>
                    </div>
                  );
                }
              )}
            </fieldset>

            {/* Hint section */}
            <div className="mb-6">
              <button
                onClick={() => toggleHint(currentQuestion)}
                className="text-blue-700 hover:text-blue-900 text-sm flex items-center focus:outline-none focus:underline"
                aria-expanded={showHints[currentQuestion]}
                aria-controls={getHintId(currentQuestion)}
              >
                <span>
                  {showHints[currentQuestion] ? "Hide Hint" : "Show Hint"}
                </span>
              </button>

              {showHints[currentQuestion] && (
                <div 
                  className="mt-2 p-3 bg-yellow-50 border border-yellow-100 rounded text-sm"
                  id={getHintId(currentQuestion)}
                  role="note"
                >
                  <p className="text-gray-800">
                    <strong>Hint:</strong>{" "}
                    {quiz.questions[currentQuestion].hint}
                  </p>
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  currentQuestion === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500"
                }`}
                aria-label="Go to previous question"
              >
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={userAnswers[currentQuestion] === null}
                className={`px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  userAnswers[currentQuestion] === null
                    ? "bg-blue-300 cursor-not-allowed text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
                }`}
                aria-label={
                  currentQuestion === quiz.questions.length - 1
                    ? "Finish quiz and see results"
                    : "Go to next question"
                }
              >
                {currentQuestion === quiz.questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </button>
            </div>

            {/* Progress bar */}
            <div className="mt-8" role="none">
              <div 
                className="h-2 w-full bg-gray-200 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={((currentQuestion + 1) / quiz.questions.length) * 100}
              >
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / quiz.questions.length) * 100
                    }%`,
                  }}
                  aria-hidden="true"
                ></div>
              </div>
              <div 
                className="text-xs text-gray-600 mt-1 text-right"
                aria-live="polite"
              >
                {currentQuestion + 1} of {quiz.questions.length} questions
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}