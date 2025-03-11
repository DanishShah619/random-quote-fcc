import { StrictMode } from "react";
import ReactDOM from "react-dom"; // ✅ Use "react-dom" instead of "react-dom/client"
import "./index.css";
import App from "./App.tsx";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
