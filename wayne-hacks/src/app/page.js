"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const[count, setCount] = useState(0);

    useEffect(() => {
        // Retrieve count from local storage on component mount
        const storedCount = localStorage.getItem('count');
        if (storedCount) {
          setCount(parseInt(storedCount));
        }
      }, []);

  return (
    <div>
      <div>
      <Navbar Score={count} />
      </div>
      <div className="flex textalign-center space-x-5">
      <a href="/Print">
        <Button Title="Print">Print</Button>
          </a>

      <a href="/Variables">
        <Button Title="Variables" >Variables</Button>
          </a>

      <a href="/Loops">
        <Button Title="Loops"> Loops </Button>
          </a>
        
      <a href="/Challenge1">
        <Button Title="Challenge1"> Challenge1 </Button>
        </a>

      </div>
    </div>
  );
}

function Button({ Title }) {
  return (
    <div className="button-q">
      <button class="">
        {Title}
      </button>
    </div>
  );
}