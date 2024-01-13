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
        <Button Title="Print" url="/Print">
          Print
        </Button>
        <Button Title="Variables" url="/Variables">
          Variables
        </Button>
        <Button Title="Loops" url="/Loops">
          Loops
        </Button>
        <Button Title="Challenge1" url="/Challenge1">
          Challenge 1
        </Button>
      </div>
    </div>
  );
}

function Button({ Title, url }) {
  return (
    <div className="">
      <button class="">
        <a href={url}>{Title}</a>
      </button>
    </div>
  );
}