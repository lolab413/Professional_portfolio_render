import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
document.documentElement.classList.toggle("dark", shouldBeDark);

createRoot(document.getElementById("root")!).render(<App />);
