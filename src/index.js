import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1. Get a reference to the div with the id of root
const el = document.getElementById("root");

// 2. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 3. Show the component on the screen
root.render(<App />);
