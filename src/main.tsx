import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure React is globally available for all context providers
(window as any).React = React;
(globalThis as any).React = React;

createRoot(document.getElementById("root")!).render(<App />);
  
