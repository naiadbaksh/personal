import React from "react";
import Navbar from "../navbar/Navbar";
import "./About.css";
import Footer from "../footer/Footer";

export default function About() {
  return (
    <>
      <div>
        <Navbar />
        <div className="about-img"></div>
        <div className="middle-container">
          <div className="profile">
            <img className="profile-pic" src="./images/naiad2.png" />
            <h2>HELLO.</h2>
            <p>
              Welcome to my webpage. I'm a fullstack developer using mainly
              React and Python.
            </p>
          </div>
          <div className="skills">
            <h2>MY SKILLS.</h2>
            <div className="skill-row">
              <img
                className="python-img"
                src="./images/python_flat.png"
                alt="img2"
              />
              <h3>Back End</h3>
              <p>
                Python is a simple yet powerful programming language. I've used
                Python and Django on the backend of full stack web applications.
              </p>
            </div>
            <div className="skill-row">
              <img
                className="react-img"
                src="./images/react_flat.png"
                alt="img3"
              />
              <h3>Front End</h3>
              <p>
                React is a library developed by Facebook to create robust and
                flexible web applications. I've used React to create some of my
                web apps.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
