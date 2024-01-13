"use client";
import { useState } from "react";

function Sidebar(){ // or roadmap
  return(
<div></div>
  );

}
export default function Home() {
  return (
    <div>
      <div className="flex textalign-center space-x-5">
        <Button Title="Print" url="/Print">Print</Button>
        <Button Title="Variables" url="/Variables">Variables</Button>
        <Button Title="Loops" url="/Loops">Loops</Button>
        <Button Title="Challenge1" url="/Challenge1">Challenge 1</Button>
      </div>
    </div>
    //<main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}

function Button({Title}, {url}){
  return <div className=""><button><a href={url}>{Title}</a></button></div>
}