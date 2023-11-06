import React from "react";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <span>
        Made with love and
        <b>React</b>
      </span>
    </footer>
  );
};

export default Footer;
