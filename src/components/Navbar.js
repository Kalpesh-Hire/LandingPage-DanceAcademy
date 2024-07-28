import React, { useState } from "react";
import "../components/Navbar.css";
import {
  FaSquareYoutube,
  FaSquareInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
      {/* First logo part */}
      <div className="logo">
        <h2>
          <span>D</span>ance
          <span>A</span>cademy
        </h2>
      </div>

      {/* 2nd menu part */}
      <div
        className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          <li>
            <a href="./#">Home</a>
          </li>
          <li>
            <a href="./#">About</a>
          </li>
          <li>
            <a href="./#">Contact</a>
          </li>
          <li>
            <a href="./#">Services</a>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <a
              href="https://www.youtube.com/"
              className="youtube"
              target="_kalpe"
            >
              <FaSquareYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="instagram"
              target="_kalpe"
            >
              <FaSquareInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="facebook"
              target="_kalpe"
            >
              <FaSquareFacebook />
            </a>
          </li>
        </ul>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <a href="./#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
