import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import pathfindingPhoto from "../../images/pathfinding.jpg";
import eCommercePhoto from "../../images/eCommerce.png";
import chatbotPhoto from "../../images/chatbot.png";
import thoughtGardenPhoto from "../../images/thoughtGarden.png";

function Cards() {
  const pathfindingDescription = `Using React, State Hooks, and functional components.
  I implemented several commonly used search algorithms, as well as maze building algorithms.`;

  const eCommerceDescription = `Using React functional and class components, Redux to store and manage front-end data, Firebase to store eCommerce and user information, Stripe for payment processing, and OAuth2 for user authentication.`;

  const aiChatbotDescription = `Using React functional and class components, I built this chatbot to help in my own recruitment. It goes over 4 major aspects that a manager or recruiter might want to know about me.`;

  return (
    <div className="cards" id="projects">
      <h1>Check out my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={thoughtGardenPhoto}
              text="This is a project I created with Django, React, and the Spotify API."
              label="ThoughtGarden Spotify Player"
              url={"/thoughtgarden"}
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
              src={pathfindingPhoto}
              text="This project animates common search algorithms. I created it with React functional components."
              label="Pathfinding Visualizer"
              description={pathfindingDescription}
              url={"/pathfindingvisualizer"}
            />
            <CardItem
              src={chatbotPhoto}
              text="This is a project I created with React and a custom chatbot module."
              label="AI Chatbot"
              description={aiChatbotDescription}
              url={"/aichatbot"}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
