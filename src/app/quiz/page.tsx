import React from "react";
import UserSvg from "@/assets/user.svg";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="flex items-center gap-y-4 flex-col">
        <h1 className="text-3xl">Start Quiz</h1>
        <p className="text-gray-400">Fill the form below to start the quiz</p>
        <div className="flex md:flex-row flex-col-reverse  items-center gap-x-20">
          <div className="flex flex-col gap-4 w-72">
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
            <button className="bg-blue-500 text-white p-2 rounded-md w-48 mt-4">
              Start Quiz
            </button>
          </div>
          <div>
            <Image
              src={UserSvg}
              alt="User Icon"
              className="h-72 object-contain w-min"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
