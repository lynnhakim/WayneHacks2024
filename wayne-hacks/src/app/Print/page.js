"use client";
import {useState, useEffect} from "react"
import CodeEditor from "../components/CodeEditor";
import Navbar from "../components/Navbar";

export default function Print() {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
      <h2 className=" font-bold text-lg "> Oh no! A human is blocking your way. You must defeat him by telling him to go away.</h2>
      <h3>Print "Go Away!" to save yourself and get 1 point</h3>
        <CodeEditor printme="Good job!"/>
    </div>
  );
}
