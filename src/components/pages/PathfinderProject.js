import React from "react";
import NavbarFixed from "../Navbar-Fixed";
import Footer from "../Footer";
import { Button } from "../Button";
import "./PathfindingProject.css";

export default function PathfindingProject() {
  return (
    <>
      <NavbarFixed className="navbar active" />
      <div className="pathfindingvisualizer">
        <div className="project-img"></div>
        <div className="cta">
          <div className="profile">
            <Button>See it Live</Button>
            <h2>Hello.</h2>
            <p>
              Welcome to my webpage. I'm a fullstack developer working with
              mainly React and Python.
            </p>
          </div>
          <div className="skills">
            <h2>My Skills.</h2>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
