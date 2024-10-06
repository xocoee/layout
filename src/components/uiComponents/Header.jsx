import { useState } from "react";
import "./Header.scss";

import ThemeButton from "./button/ThemeButton";

import linkedinLogo from "/socialLink/linkedin.svg";
import githubLogo from "/socialLink/github.svg";
import telegramLogo from "/socialLink/telegram.svg";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleMouseEnter = () => {
    setShowLinks(true);
  };

  const handleMouseLeave = () => {
    setShowLinks(false);
  };

  return (
    <>
      <div className="header">
        <div className="header-content">
          <div
            className="header-logo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            xocoee
            <div className={`social-links ${showLinks ? "visible" : ""}`}>
              <a
                href="https://www.linkedin.com/in/xocoee/"
                className="social-link-logo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinLogo} alt="Linkedin logo" />
              </a>
              <a
                href="https://github.com/xocoee"
                className="social-link-logo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="Github logo" />
              </a>
              <a
                href="https://t.me/xocoee"
                className="social-link-logo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegramLogo} alt="Telegram logo" />
              </a>
            </div>
          </div>
          <div className="header-logo">xocoee</div>
         <ThemeButton />
        </div>
      </div>
    </>
  );
};

export default Header;
