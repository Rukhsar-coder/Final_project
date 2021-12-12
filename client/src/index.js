import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ExerciseProvider } from "./components/ExerciseContext";

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="rukshar-malek0n.us.auth0.com"
    clientId="OxNsFn7WuipL0mz7Hkri2Gkk78gRWSDo"
    redirectUri={window.location.origin}
  >
    <ExerciseProvider>
      <App />
    </ExerciseProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
