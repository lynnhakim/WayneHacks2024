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
      <button>Run Code</button>
      <div>
        <h3>Result:</h3>
        <pre>{result}</pre>
      </div>
    </div>
  );
}
