import { useState } from "react";
import "./ThemeButton.scss";

const ThemeButton = () => {
  const [showToggle, setShowToggle] = useState(false);

  const handleMouseEnter = () => {
    setShowLinks(true);
  };

  const handleMouseLeave = () => {
    setShowLinks(false);
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="theme-button">
        Theme
      </div>
      <div className={`switch-theme ${showLinks ? "visible" : ""}`}>
         <div>Dark</div>
         <div>Light</div>
      </div>
    </>
  );
};

export default ThemeButton;
