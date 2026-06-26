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
    if (window.innerWidth > 768) {
      setShowChatBot((prev) => !prev);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth > 768) {
        setShowChatBot(true);
      }
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
          {showChatBot ? (
            <div className="chatbot-wrapper">
              <button
                type="button"
                className="chatbot-close-button"
                onClick={() => setShowChatBot(false)}
                aria-label="Close chatbot"
              >
                ×
              </button>
              <ChatBot className="main-chatbot" showChatBot={showChatBot} />
            </div>
          ) : null}
          <button
            className="chatbot-button"
            onClick={toggleChatBot}
            aria-label="Toggle chatbot"
          ></button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
