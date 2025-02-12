import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Function to dynamically load FontAwesome
const loadFontAwesome = () => {
  const fontAwesomeKey = import.meta.env.VITE_FONT_AWESOME_KEY;

  if (fontAwesomeKey) {
    const script = document.createElement("script");
    script.src = `https://kit.fontawesome.com/${fontAwesomeKey}.js`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  } else {
    console.error("FontAwesome key is missing in .env file");
  }
};

// Load FontAwesome before rendering the app
loadFontAwesome();

createRoot(document.getElementById("root")).render(<App />);