import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import pathfindingPhoto from "../../images/pathfinding.jpg";
import eCommercePhoto from "../../images/eCommerce.png";

function Cards() {
  const pathfindingDescription = `Using React, State Hooks, and functional components.
  I implemented several commonly used search algorithms, as well as maze building algorithms.`;

  const eCommerceDescription = `Using React functional and class components, Redux to store and manage front-end data
  and Firebase to store eCommerce and user information.`;

  return (
    <div className="cards" id="projects">
      <h1>Check out my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={pathfindingPhoto}
              text="This is a project I created with React functional components."
              label="Pathfinding Visualizer"
              description={pathfindingDescription}
              url={"/pathfindingvisualizer"}
            />
            <CardItem
              src={eCommercePhoto}
              text="This is an eCommerce website created with React, Redux, Firebase and OAuth."
              label="Men's eCommerce"
              description={eCommerceDescription}
              url={"/ecommerce"}
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
