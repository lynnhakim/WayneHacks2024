"use client";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

export default function CodeEditor() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

   return (
    <div>
      <CodeMirror
        value={value}
        height="500px"
        width="700px"
        theme="dark"
        extensions={[loadLanguage("python")]}
      />
      <button style={{ padding: '5px', backgroundColor: 'black', color: 'green' }}>Run Code</button>
      <div className="h-screen">
        <h3 style={{ fontSize: '18px', padding: '5px', color: 'green' }}>Result:</h3>
        <pre>{result}</pre>
      </div>
    </div>
  );
}
