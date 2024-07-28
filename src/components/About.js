import React from "react";
import "../components/About.css";

function About() {
  return (
    <>
      <div className="main-container ">
        <div className="heading-about ">
          <div className="heading-main">
            <h1>About Us!</h1>
          </div>
          <div className="headlines ">
            <h1>
              Welcome to Dance Academy <br />
              <em> Where Passion Meets Performance</em>
            </h1>
            <p>
              At
              <strong>
                <em> Dance Academy</em>
              </strong>
              ,we believe in the transformative power of dance. Our academy
              offers a diverse range of classes for all ages and skill levels,
              taught by experienced and passionate instructors. Whether you're a
              beginner looking to explore a new hobby or an advanced dancer
              aiming to perfect your technique, our supportive community and
              state-of-the-art facilities provide the perfect environment to
              grow and excel. Join us and discover the joy of dance!
            </p>
            <p>
              "Beyond just dance classes,
              <strong>
                <em> Dance Academy </em>
              </strong>
              fosters a community where creativity, discipline, and confidence
              thrive. Our students have opportunities to participate in
              performances, competitions, and workshops, allowing them to
              showcase their talents and gain invaluable experience. We are
              dedicated to nurturing each dancer's unique journey, helping them
              to not only master the art of dance but also to develop life
              skills that extend far beyond the studio. Come be a part of our
              vibrant dance family and let your passion shine."
            </p>

            <button className="about-btn">Learn more</button>
          </div>
        </div>
        <div className="image-about">
          <img src="./about.avif" alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
