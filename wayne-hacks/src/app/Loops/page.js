"use client";
import {useState, useEffect} from "react"
import CodeEditor from "../components/CodeEditor";
import Navbar from "../components/Navbar";

export default function Loops(){
    return (
        <div>
        <div>
          <Navbar />
        </div>
        
        <h2 className="font-bold text-lg ">You are faced by the gate of your castle. To unlock it you must insert the password. You remember it's the numbers from 1 to 10.</h2>
        <h3>Create a loop that prints numbers from 1 to 10 to get 3 points!</h3>
        <CodeEditor correctAnswer="1 2 3 4 5 6 7 8 9 10"/>
      
        
        </div>

    );

   
}