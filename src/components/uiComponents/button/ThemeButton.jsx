import { useState } from "react";
import "./ThemeButton.scss";

const ThemeButton = () => {
  const [showToggle, setShowToggle] = useState(false);
  console.log("showToggle", showToggle);
  const handleMouseEnter = () => {
    setShowToggle(true);
  };

  const handleMouseLeave = () => {
    setShowToggle(false);
  };
  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  return (
    <>
      <div
        className="theme-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Theme
        <div className={`switch-theme ${showToggle ? "visible" : ""}`}>
          <div className="">Dark</div>
          <div>Light</div>
          <div>System</div>
        </div>
      </div>
    </>
  );
};

export default ThemeButton;
