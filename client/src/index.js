import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ExerciseProvider } from "./components/ExerciseContext";

ReactDOM.render(
  <ExerciseProvider>
    <App />
  </ExerciseProvider>,
  document.getElementById("root")
);
