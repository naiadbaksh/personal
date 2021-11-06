import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./actionprovider";
import config from "./config";
import MessageParser from "./messageparser";
import "./chatbot.styles.css";

const ChatBot = () => {
  return (
    <>
      <div>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </>
  );
};

export default ChatBot;
