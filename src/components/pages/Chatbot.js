import React from "react";
import NavbarFixed from "../navbar/Navbar-Fixed";
import Footer from "../footer/Footer";
import Button from "../button/button.component";
import "./Chatbot.css";
import Carousel from "../carousel/carousel.component";
import actionProviderSnippet from "../../images/actionProviderSnippet.png";
import messageParserSnippet from "../../images/messageParserSnippet.png";
import widgetSnippet from "../../images/widgetSnippet.png";

const carouselData = [
  {
    image: messageParserSnippet,
    description:
      "This is the message parser. It goes through the input from the user and based on what was inputted, it triggers certain actions in the action provider.",
  },
  {
    image: actionProviderSnippet,
    description:
      "This is the action provider which sends information to be displayed on the UI. It is triggered by the message parser.",
  },
  {
    image: widgetSnippet,
    description:
      "This is the widget section. It creates widgets that can be displayed on the chatbot for the user to interact with.",
  },
];

export default function ChatbotProject() {
  return (
    <>
      <NavbarFixed className="navbar active" />
      <div className="chatbot-container">
        <div className="chatbot-image-1"></div>
        <div className="cta">
          <div className="profile">
            <btn
              onClick={() => window.open("https://naiad.dev/", "_blank")}
              className="see-live"
            >
              See it Live!
            </btn>
            <h2>My Process</h2>
            <p className="project-description">
              I wanted to create an AI chatbot that would provide the additional
              benefit of advocating on my behalf in two ways. It would
              concretely provide information about my background and why I
              should be considered for a new role. More abstractly, it would
              demonstrate my understanding of web product development, UX and
              UI. I built upon 'react-chatbot-kit' by Frederik Oseberg and the
              supporting documentation, as well as my own styling.
            </p>
          </div>
          <div className="cb-sketch"></div>
          <div className="skills">
            <h2 className="system-design">System Design</h2>
            <p className="project-description">
              This is the conceptual data flow diagram for the chatbot.
            </p>
            <div className="cb-folder-structure"></div>
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
          naiadbaksh@gmail.com.
        </h4>
      </div>
      <Footer />
    </>
  );
}
