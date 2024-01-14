"use client";
import {useState, useEffect} from "react"
import CodeEditor from "../components/CodeEditor";
import Navbar from "../components/Navbar";

export default function Challenge1({Score}) {

  return (
    <div>
        <div>
          <Navbar />
        </div>
       <h2 className="font-bold text-lg ">You made it home safely! But your family wants to make sure you're not an imposter so they give you a task only you would know how to solve.</h2>
       <h3>Create an ascending number staircase with 10 rows and we will give you 5 points! </h3>
      <CodeEditor correctAnswer="1 12 123 1234 12345 123456 1234567 12345678 123456789 12345687910" points={5}/>
    </div>
  );
}