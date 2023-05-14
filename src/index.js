import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoContextProvider } from "./context/videoListContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <VideoContextProvider>
      <App />
      </VideoContextProvider>
    </Router>
  </React.StrictMode>
);
