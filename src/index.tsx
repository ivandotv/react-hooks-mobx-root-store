import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RootStoreProvider } from "./providers/RootStoreProvider";

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
