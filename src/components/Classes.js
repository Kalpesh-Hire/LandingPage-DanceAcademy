import React from "react";
import Data from "./Data/Data.js";
import "../components/Classes.css";
function Classes() {
  return (
    <>
      <div className="class-container">
        <div className="heading-class">
          <h1>Our Courses</h1>
        </div>
        <div className="courses-container">
          {Data.map((datas) => {
            return (
              <div className="courses">
                <div
                  className="img-background"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(54, 54, 54, 0.5), rgba(54, 54, 54, 0.8)), url(${datas.Img})`,
                    height: "100%",
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    margin: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5rem",
                  }}
                >
                  <a href="./#">{datas.Title}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Classes;
