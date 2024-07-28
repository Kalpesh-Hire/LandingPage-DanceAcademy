import React from "react";
import "./Footer.css";
import {
  FaSquareYoutube,
  FaSquareInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-box">
          <div className="box1" id="box">
            <h1>DanceAcademy</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              libero obcaecati quis perspiciatis modi eius !
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quia quae iste blanditiis voluptatum rerum.
            </p>
            <div className="links">
              <h2>Connect with us!!!</h2>
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
            </div>
          </div>
          <div className="box1" id="contact">
            <h1>Contact us</h1>
            <ul>
              <li>
                <FaHome /> 72 Pilgrim Avenue, Chevy Chase, MD 20815
              </li>
              <li>
                {" "}
                <FaPhoneSquare />
                1234567890
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="heading">
            <h1>Copyright © 2019. All rights reserved by, DanceAcademy!</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
