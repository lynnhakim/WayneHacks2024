"use client";
import React from "react";
import FlashCard from "../components/FlashCard";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Flashcards() {
  const [index, setIndex] = useState(0);
  const questions = [
    {
      question: "What is the difference between a variable and a constant?",
      answer: "A variable can be changed, a constant cannot",
    },
    {
      question: "What is the difference between a while loop and a for loop?",
      answer:
        "A for loop is used when you know how many times you want to loop, a while loop is used when you don't",
    },
    {
      question:
        "What is the difference between a for loop and a do while loop?",
      answer:
        "A do while loop will always run at least once, a for loop may not run at all",
    },
    {
      question:
        "What is the difference between a for loop and a do while loop?",
      answer:
        "A do while loop will always run at least once, a for loop may not run at all",
    },
  ];
  return (
    <div className="h-screen">
      <Navbar />
      <h2 className="font-bold text-lg">Flashcards</h2>
      <div className="flex flex-col flex-wrap justify-center items-center h-full">
        <FlashCard
          question={questions[index].question}
          answer={questions[index].answer}
        />
        <div className="flex justify-end mt-7">
          <button
            className="mr-5 text-white"
            onClick={() => {
              if (index > 0) {
                setIndex(index - 1);
              }
            }}
          >
            Previous
          </button>
          <button
            className="text-white"
            onClick={() => {
              if (index < questions.length - 1) {
                setIndex(index + (1 % 5));
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}