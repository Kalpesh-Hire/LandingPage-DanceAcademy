import React from "react";
import "../components/HomeMain.css";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import BackgroundImage from "/Images/Dance-Studio-Slogan.webp";
import Classes from "./Classes";
function HomeMain() {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="first-container" id="background-cont">
          <div className="image-background">
            <img src="./Dance-Studio-Slogan.webp" alt="" />
          </div>
          <div className="text-container">
            <h1 className="heading-primary">
              Dance All Day,<span>Dance All Night</span>
            </h1>
            <p className="para-primary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              suscipit obcaecati delectus.
            </p>
            <button>Register</button>
          </div>
        </div>
      </div>
      <About />
      <Classes />
      <Footer />
    </>
  );
}

export default HomeMain;
