import React, { useState, useEffect } from "react";
import "../../App.css";
import Button from "../button/button.component";
import "./HeroSection.css";
import Navbar from "../navbar/Navbar";
import Typical from "react-typical";
import ChatBot from "../chatbot/chatbot.component";

function HeroSection() {
  const [showChatBot, setShowChatBot] = useState(false);
  const toggleChatBot = () => {
    if (!showChatBot) {
      setShowChatBot(true);
    } else {
      return;
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleChatBot();
    }, 6500);
    return () => clearTimeout(timer);
  }, []);
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
          {showChatBot ? <ChatBot showChatBot={showChatBot} /> : null}
          <button
            className="chatbot-button"
            onClick={() => setShowChatBot((prev) => !prev)}
          ></button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
