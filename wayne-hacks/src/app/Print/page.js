"use client";
import {useState, useEffect} from "react"
import CodeEditor from "../components/CodeEditor";
import Navbar from "../components/Navbar";

export default function Print() {
    const [count, setCount] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("count");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

      useEffect(() => {
        // storing input name
        localStorage.setItem("count", JSON.stringify(count));
      }, [count]);
    
    const increment = () => {
        setCount(count + 3);
    }

  return (
    <div>
    <div>
      <Navbar Score={count} />
    </div>
      <h2 className="font-bold text-lg text-white">Question 1: Print</h2>
        <h3 className="text-white ">Print "Hello World"</h3>
        <CodeEditor />
        <a href= "/"><button className="button-q" onClick={() => increment()}>Submit</button></a>
    </div>
  );
}
