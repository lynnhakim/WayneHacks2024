"use client";
import {useState, useEffect} from "react"
import CodeEditor from "../components/CodeEditor";
import Navbar from "../components/Navbar";

export default function Variables(){

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
        <>
        <div>
            
    <div>
      <Navbar Score={count} />
    </div>
        
        <h1 className="font-bold text-lg text-white">Question 2: Variables</h1>
        <h3 className="text-white"> Create 3 variables of the following types: int, bool, string </h3>
        <CodeEditor />
        <a href= "/"><button className="button-q" onClick={() => increment()}>Submit</button></a>
        </div>

       
        </>

    );

   
}