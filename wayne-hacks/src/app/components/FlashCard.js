"use client";
import { useState } from "react";

export default function FlashCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flex flex-col bg-white p-16 rounded-md w-1/3 h-1/2 items-center justify-center">
      <div>
        {showAnswer ? (
          <div className="text-bold text-3xl flex justify-center items-center">
            <h1>{answer}</h1>
          </div>
        ) : (
          <div className="text-bold text-3xl flex justify-center items-center">
            <h1>{question}</h1>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-end mt-7">
        <button onClick={toggleAnswer}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
      </div>
    </div>
  );
}