import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import pathfindingPhoto from "../images/pathfinding.jpg";

function Cards() {
  const handlePathfinderClick = () => {
    window.open("https://naiadbaksh.github.io/pathfinding/");
    return;
  };

  const pathfindingDescription = `Using React, State Hooks, and functional components.
  I implemented several commonly used search algorithms, as well as maze building algorithms.`;

  return (
    <div className="cards" id="projects">
      <h1>Check out my projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={pathfindingPhoto}
              text="This is a project I created with React functional components."
              label="Pathfinding Visualizer"
              // onClick={handlePathfinderClick}
              description={pathfindingDescription}
            />
            <CardItem
              src="/images/img-7.jpg"
              text="This is a project I created with Python."
              label="Project2"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="This is a project I created with React and Python Django."
              label="Project1"
              path="/services"
            />
            <CardItem
              src="/images/img-7.jpg"
              text="This is a project I created with Python and Python Flask."
              label="Project2"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
