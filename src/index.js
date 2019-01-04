import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./kita";
import "./styles.css";
import { Component, Prop } from "@stencil/core";
//import { defineCustomElements } from "test-components/dist/loader";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>mala komponenta!</h2>
      <HelloWorld />
      <my-first-component name="Max" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
//defineCustomElements(window);
