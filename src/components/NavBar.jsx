import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-link-container">
        <a href="#about" className="nav-link">about</a>
        <a href="#work" className="nav-link">work</a>
        <a className="nav-link">résumé</a>
      </div>
    </nav>
  );
};

export default NavBar;
