import CodeEditor from "../components/CodeEditor";

export default function Print() {
  return (
    <div>
      <h2 className=" font-bold text-lg "> Oh no! A human is blocking your way. You must defeat him by telling him to go away</h2>
        <h3>Print "Go Away!" to save yourself and get 1 point</h3>
        <CodeEditor />

    </div>
  );
}
