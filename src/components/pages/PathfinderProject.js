import React from "react";
import NavbarFixed from "../Navbar-Fixed";
import Footer from "../Footer";
import { Button } from "../Button";
import "./PathfindingProject.css";
import Carousel from "../carousel/carousel.component";
import nodeCodeSnippet from "../../images/nodeCodeSnippet.png";
import nodeCompCodeSnippet from "../../images/nodeCompCodeSnippet.png";
import dijkstraCodeSnippet from "../../images/dijkstraCodeSnippet.png";

const carouselData = [
  {
    image: nodeCodeSnippet,
    description:
      "This is the node constructor which takes in a row and column value and creates a node with a set of values.",
  },
  {
    image: nodeCompCodeSnippet,
    description:
      "This is the node component per se. It's a <div></div> with a variable id, depending on its row and column. It has associated classes and styles, as well as functions that are passed through as props.",
  },
  {
    image: dijkstraCodeSnippet,
    description:
      "This is the implimentation of Dijkstra's algorithm, which finds the shortest path between a given node and all other nodes in a graph. ",
  },
];

export default function PathfindingProject() {
  return (
    <>
      <NavbarFixed className="navbar active" />
      <div className="pathfindingvisualizer">
        <div className="project-img1"></div>
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
            <h2>Code Snippets</h2>
            <div className="carousel">
              <Carousel carouselData={carouselData} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="end-quote">
          If you'd like to learn more about how I built this project, feel free
          to reach out to me on the socials linked below, or at
          contact@naiad.dev.
        </h4>
      </div>
      <Footer />
    </>
  );
}
