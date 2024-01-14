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
      <div>
      <h3>
        You're a lost dragon that is trying to find your way back home. Humans don't know you're harmless so they're trying to hunt you down! You need to escape them at all cost... 
        </h3>
        <h2
        >You embark on a journey with many obstacles which you must face. Each checkpoint is a new challenge you will overcome. They will progressively get harder so watch out. 
        </h2>
        <h2 
        > The more checkpoints you cross, the more points you get. The more points you get, the more POWERFUL you become! 
        </h2>



      </div>
      <div className=" flex textalign-center space-x-5">
      <a href="/Print">
        <Button Title="     Print     ->     " >Print</Button>
          </a>

      <a href="/Variables">
        <Button Title="     Variables     ->     " >Variables</Button>
          </a>

      <a href="/Loops">
        <Button Title="     Loops     ->     "> Loops </Button>
          </a>
        
      <a href="/Challenge1">
        <Button Title="Challenge 1" >Challenge1 </Button>
        </a>

      </div>
     <div>
      
      ----------------------------------------------------

     </div>

      <div>
        
      <div className=" flex textalign-center space-x-5">
      <a href="/If/Else">
        <Button Title="     If/Else     ->     ">If/Else</Button>
          </a>

      <a href="/Strings">
        <Button Title="     Strings     ->     " >Strings</Button>
          </a>

      <a href="/Operators">
        <Button Title="     Operators     ->     "> Operators </Button>
          </a>
        
      <a href="/Challenge2">
        <Button Title="     Challenge 2"> Challenge 2 </Button>
        </a>

      </div>
      </div>
      <div>
      
      ----------------------------------------------------

     </div>

      <div>
        
      <div className=" flex textalign-center space-x-5">
      <a href="/Libraries">
        <Button Title="Libraries     ->     ">Libraries</Button>
          </a>

      <a href="/Files">
        <Button Title="Files     ->     " >Files</Button>
          </a>

      <a href="/Classes">
        <Button Title="Classes     ->     "> Classes </Button>
          </a>
        
      <a href="/Challenge3">
        <Button Title="Challenge 3"> Challenge 3 </Button>
        </a>

      </div>
      </div>
      
    </div>
    
  );
}

function Button({ Title }) {
  return (
    <div className="">
      <button className="">
        {Title}
      </button>
    </div>
  );
}