import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Importing the config to make it available throughout the app
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
