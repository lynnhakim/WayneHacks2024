"use client";
import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

export default function CodeEditor({correctAnswer, points}) {
  const [value, setValue] = useState("");
  const [codeResult, setCodeResult] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = (val) => {
    setValue(val);
  };

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
      if (result.output !== undefined) {
        setCodeResult(result.output); // Set the result state with the API response
        
      } else {
        console.log("API response is undefined");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (codeResult && codeResult.substring(correctAnswer)) {
      setCount(count + points);
      setSuccess(true);
    }
    console.log(codeResult);
  },[codeResult])

  return (
    <div>
      <CodeMirror
        value={value}
        height="500px"
        width="700px"
        theme="dark"
        extensions={[loadLanguage("python")]}
        onChange={onChange}
      />
      <button onClick={runCode} style={{padding: '5px', backgroundColor: 'black', color: 'green' }}>Run Code</button>
      <div className="bg-black h-screen">
        <h3 style={{fontSize: '18px', padding: '5px', color: 'green' }}>Result:</h3>
        <div className="m-1 text-white">{codeResult}</div>
        {success ? <p>"Well Done!"</p>: 
        codeResult}
        <button className="button-q">Submit</button>
      </div>
    </div>
  );
}
