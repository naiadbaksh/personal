import React from "react";
import Navbar from "../navbar/Navbar";
import "./About.css";
import Footer from "../footer/Footer";

export default function About() {
  return (
    <>
      <div className="about-page">
        <Navbar />
        <div className="about-img"></div>
        <div className="middle-container">
          <div className="profile">
            <img
              className="profile-pic"
              src="/images/naiad-photo.jpg"
              alt="Naiad Baksh"
            />
            <h2>HELLO.</h2>
            <p>
              I'm Naiad, a full-stack software engineer based in Toronto with 5+
              years of experience building scalable web applications. I enjoy
              solving complex problems, designing clean user experiences, and
              shipping products that people rely on every day. My primary stack
              includes React, Node.js, TypeScript, Python, GraphQL, SQL, and
              AWS.
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
                I build scalable backend services using Node.js and Python,
                designing REST and GraphQL APIs, integrating third-party
                services, and working with SQL and NoSQL databases. I enjoy
                creating reliable systems that are easy to maintain and evolve.
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
                React is where I spend most of my time. I build fast,
                responsive, and accessible interfaces with a focus on clean
                architecture, reusable components, and delivering a great user
                experience across devices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
