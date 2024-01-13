"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
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

function Button({ Title, url }) {
  return (
    <div className="">
      <button>
        <a href={url}>{Title}</a>
      </button>
    </div>
  );
}
