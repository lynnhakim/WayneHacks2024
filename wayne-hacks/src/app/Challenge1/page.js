"use client";
import {useState, useEffect} from "react"
import CodeEditor from "../components/CodeEditor";
import Navbar from "../components/Navbar";

export default function Challenge1({Score}) {

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
        setCount(count + 5);
    }

  return (
    <div>
        <div>
          <Navbar Score={count} />
        </div>
       <h2 className="font-bold text-lg ">You made it home safely! But your family wants to make sure you're not an imposter so they give you a task only you would know how to do solve</h2>
       <h3>Create an ascending number staircase with 10 rows and we will give you 5 points! </h3>
      <CodeEditor />
        <a href="/"><button className="button-q" onClick={() => increment()}>Submit</button></a>
    </div>
  );
}