import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ExerciseProvider } from "./components/ExerciseContext";
import { UserContextProvider } from "./components/UserContext";

ReactDOM.render(
  <UserContextProvider>
    <ExerciseProvider>
      <App />
    </ExerciseProvider>
  </UserContextProvider>,
  document.getElementById("root")
);
