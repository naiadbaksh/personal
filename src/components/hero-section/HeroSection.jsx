import React from "react";
import "../../App.css";
import "./HeroSection.css";
import Typical from "react-typical";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-img">
          <div className="tagline">
            <h1 className="tag1">I'm Naiad</h1>
            <Typical
              className="tag2"
              loop={1}
              wrapper="h2"
              steps={[
                "a software engineer;",
                3000,
                // "a software engineer;",
                // 1000,
                // "a < software engineer />",
                // 1000,
                // "a { software engineer }",
                // 1000,
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
