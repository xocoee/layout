import { useState } from "react";
import "./Header.scss";

import linkedinLogo from "../assets/socialLink/linkedin.svg";
import githubLogo from "../assets/socialLink/github.svg";
import telegramLogo from "../assets/socialLink/telegram.svg";

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
        </div>
      </div>
    </>
  );
};

export default Header;
