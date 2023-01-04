import React, { useState } from "react";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-link-container">
        <div
          className="burger"
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}
        >
          <FontAwesomeIcon icon={faHamburger} size="2x" />
        </div>
        <a href="#about" className={`nav-link ${!isOpen ? "hidden" : ""}`}>
          about
        </a>
        <a href="#work" className={`nav-link ${!isOpen ? "hidden" : ""}`}>
          work
        </a>
        <a href="#work" className={`nav-link ${!isOpen ? "hidden" : ""}`}>résumé</a>
      </div>
    </nav>
  );
};

export default NavBar;
