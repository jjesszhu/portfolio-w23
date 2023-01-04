import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

const faIcons = [
  { icon: faEnvelope, url: "mailto:jessica.jz.zhu@gmail.com" },
  { icon: faLinkedinIn, url: "https://www.linkedin.com/in/jessicajlzhu/" },
  { icon: faGithub, url: "https://github.com/jjesszhu" },
  { icon: faSpotify, url: "https://open.spotify.com/user/jezhu8928?si=e639a380156e422a" },
  { icon: faClapperboard, url: "https://letterboxd.com/jesszhu/" },
];

const FooterLink = ({ url, faIcon }) => {
  return (
    <a className="icon" href={url}>
      <FontAwesomeIcon icon={faIcon} size="2x"/>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="callout">CONNECT WITH ME!</h2>
      <div className="icon-container">
        {faIcons.map((icon) => (
          <FooterLink
            faIcon={icon.icon}
            url={icon.url}
          />
        ))}
      </div>
      <p className="credit-subheading">
        designed + developed with inspiration from wes anderson's
        <span className="movie-title"> THE ROYAL TENENBAUMS</span>
        <br /> © jessica zhu, 2023
      </p>
    </footer>
  );
};

export default Footer;
