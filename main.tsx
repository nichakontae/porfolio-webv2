import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode> use for dev mode when production should not use this
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
