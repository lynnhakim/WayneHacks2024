"use client";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";


export default function CodeEditor() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onChange = (val) => {
    setValue(val);
  };

  const runCode = async () => {
    const url = 'https://python-3-code-compiler.p.rapidapi.com/';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '035d997960msh7fd03d5eff3cb45p157d23jsn7f53d1a08ade',
        'X-RapidAPI-Host': 'python-3-code-compiler.p.rapidapi.com'
      },
      body: JSON.stringify({
        code: value,
        version: 'latest',
        input: null
      })
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setResult(result.output); // Set the result state with the API response
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <CodeMirror
        value={value}
        height="500px"
        width="700px"
        theme="dark"
        extensions={[loadLanguage("python")]}
        onChange={onChange}
        style={{ fontSize: '20px' }}
      />
      <button onClick={runCode} style={{padding: '5px', backgroundColor: 'black', color: 'green' }}>Run Code</button>
      <div className="bg-black h-60 w-screen">
        <h3 style={{fontSize: '18px', padding: '5px', color: 'green' }}>Result:</h3>
        <div className="m-1 text-white">{result}</div>
      </div>
    </div>
  );
}
