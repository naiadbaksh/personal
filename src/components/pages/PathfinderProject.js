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
            <btn
              onClick={() =>
                window.open(
                  "https://naiadbaksh.github.io/pathfinding/",
                  "_blank"
                )
              }
              className="see-live"
            >
              See it Live!
            </btn>
            <h2>My Process</h2>
            <p className="project-description">
              I wanted to create a fully fleshed out pathfinding visualizer,
              inspired by Clement Mihailescu, a software engineer and Youtuber.
              His project was decidedly more feature-heavy, however what I
              achieved I believe was more thought-through and elegant in its
              design. I started with a sketch of what I wanted the final product
              to look like to guide my development.
            </p>
          </div>
          <div className="project-sketch"></div>
          <div className="skills">
            <h2 className="system-design">System Design</h2>
            <p className="project-description">
              This is the folder structure I used to construct this project. I
              created components for the visualizer itself, the toolbar, and the
              node.
            </p>
            <div className="folder-structure"></div>
            <p className="project-description">
              These are some snippets of the code, which I used to create the
              node and display a grid of nodes respectively. sd
            </p>
            <ul className="snippets">
              <div className="snippet1"></div>
              <div className="snippet2"></div>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
