"use client";

import {useState} from "react";
export default function Home() {
  const [count,setCount] = useState(0)

  return (
    <main className="">
      <button onClick={() => setCount(count + 1)}>Submit</button>
      {count}

    </main>
  );
}
