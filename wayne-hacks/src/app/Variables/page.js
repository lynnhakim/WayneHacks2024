"use client";
import {useState, useEffect} from "react"
import CodeEditor from "../components/CodeEditor";
import Navbar from "../components/Navbar";

export default function Variables(){


    return (
        <>
        <div>
            
    <div>
      <Navbar />
    </div>
        
        <h1 className="font-bold text-lg text-white">A guard apears in front of you! He won't let you pass unless you follow his instructions. He asks you the following:</h1>
        <h3 className="text-white"> Create a variable called "password," equal to zero, convert it to int, bool, and string, and you will get 2 points! </h3>
        <CodeEditor correctAnswer="password = 0 bool(password) string(password)"/>
        </div>

       
        </>

    );

   
}