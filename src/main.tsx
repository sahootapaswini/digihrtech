import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; /* import bootstrap */

// Get the root element
const rootElement = document.getElementById("root");

if (rootElement) {
  // Create a root and render the App component
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  // Handle the case where the root element is not found
  console.error("Root element not found");
}
