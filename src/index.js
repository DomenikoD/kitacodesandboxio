import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./kita";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>mala komponenta!</h2>
      <HelloWorld />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
