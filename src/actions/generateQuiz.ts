"use server";
import { Type } from "@google/genai";
import { ai } from "@/lib";
import { Quiz, QuizInput } from "@/types";

export async function generateQuiz(input: QuizInput) {
  const { content, difficulty, numberOfQuestions, subject, topic } = input;
  return ai.models
    .generateContent({
      model: "gemini-2.0-flash",
      contents: `Generate a quiz with ${numberOfQuestions} questions on the topic of ${topic} in ${subject} at ${difficulty} difficulty level. ${
        content !== "" ? `Include the following content: ${content}` : ""
      }`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: "Title of the quiz",
              nullable: false,
            },
            description: {
              type: Type.STRING,
              description: "Description of the quiz",
              nullable: false,
            },
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: {
                    type: Type.STRING,
                    description: "Question text",
                    nullable: false,
                  },
                  mutlipleChoice: {
                    type: Type.ARRAY,
                    description: "4 answer options",
                    items: {
                      type: Type.STRING,
                      description: "Answer options",
                      nullable: false,
                    },
                  },
                  answer: {
                    type: Type.STRING,
                    description: "Correct answer",
                    nullable: false,
                  },
                  explanation: {
                    type: Type.STRING,
                    description: "Explanation of the answer",
                    nullable: false,
                  },
                  hint: {
                    type: Type.STRING,
                    description: "Hint for the question",
                    nullable: false,
                  },
                  difficulty: {
                    type: Type.STRING,
                    description:
                      "Difficulty level of the question, Easy, Medium, Hard",
                    nullable: false,
                  },
                },
                required: [
                  "question",
                  "mutlipleChoice",
                  "answer",
                  "difficulty",
                ],
              },
            },
          },
          required: ["title", "description", "questions"],
        },
      },
    })
    .then((response) => {
      console.log(response.text);
      return JSON.parse(response.text || "");
    }) as unknown as Quiz;
}
