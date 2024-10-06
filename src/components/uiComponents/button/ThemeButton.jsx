import { useState } from "react";
import "./ThemeButton.scss";

const ThemeButton = () => {
  const [hovered, setHovered] = useState(false);
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button
        className="theme-button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={toggleTheme}
      >
        <span>{hovered ? (theme === "light" ? "dark" : "light") : theme}</span>
      </button>
    </>
  );
};

export default ThemeButton;
