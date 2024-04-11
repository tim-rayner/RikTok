import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <img src={logo} alt="RicTok" className="logo" />
      <h2>
        Following | <span>For You</span>
      </h2>
      <FontAwesomeIcon icon={faSearch} className="icon" />
    </div>
  );
};

export default TopNavbar;
