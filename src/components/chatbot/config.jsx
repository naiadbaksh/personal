import React, { useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../options/options.component";
import BackgroundInfo from "../background-info/background-info.component";
import YesNo from "../options/yes-no.component";

const headerStyle = {
  height: "40px",
  justifyContent: "space-between",
};
const pStyle = {
  width: "180px",
};

const config = {
  botName: "Wednesday",
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm Wednesday, Naiad's personal
  AI recruiter! I'd be happy to tell you about Naiad and his career so far. 
  Would you like to know more about him?`,
      {
        widget: "yesOrNo",
      }
    ),
  ],
  // customComponents: {
  //   header: (props) => (
  //     <div style={headerStyle}>
  //       <p style={pStyle}>Chat with Wednesday</p>
  //       <i onClick={props.showChatBot} class="fas fa-window-minimize"></i>
  //     </div>
  //   ),
  // },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "yesOrNo",
      widgetFunc: (props) => <YesNo {...props} />,
    },
    {
      widgetName: "education",
      widgetFunc: (props) => <BackgroundInfo {...props} />,
      props: {
        info: [
          {
            answer:
              "Naiad graduated from Western U in 2016 where he studied Cognitive Neuroscience. Afterward, he attended Brainstation's first full-time UX Design program where he learned UX Design and product development. He's also a trained chef. 👨‍🍳",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "experience",
      widgetFunc: (props) => <BackgroundInfo {...props} />,
      props: {
        info: [
          {
            answer:
              "After graduating from Brainstation, Naiad worked as a UX Developer for a small digital agency called CYC Labs. He worked on multiple projects where he used HMTL, CSS & Javascript to lead design and help develop websites for clients like Kia. He also worked as lead designer on mobile applications.",
            id: 1,
          },
          {
            answer:
              "After a brief interlude as a chef, he entered corporate sales at Peninsula Canada where he excelled, bringing in over $1.4M in new revenue in his first 12 months, and lead a team of 6 individuals.",
            id: 2,
          },
          {
            answer:
              "He continued his sales career at Michael Page, working with clients such as Ultimate Software, Wealthsimple, & Tangerine bringing in over $100K in his last 8 months. After a restructuring due to COVID, Naiad began his coding journey.",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "skills",
      widgetFunc: (props) => <BackgroundInfo {...props} />,
      props: {
        info: [
          {
            answer:
              "Naiad is very familiar with Python and React, and has used these technologies to create his projects, found in the projects section.",
            id: 1,
          },
          {
            answer:
              "Naiad is also an excellent presenter, team player and can pick up new techniques and skills rapidly.",
          },
        ],
      },
    },
    {
      widgetName: "why",
      widgetFunc: (props) => <BackgroundInfo {...props} />,
      props: {
        info: [
          {
            answer:
              "Here are 3 reasons why you should interview Naiad at your organization. First, he has demonstrated a strong knowledge of product development as indicated on this website and even myself! 🙋‍♀️ He did build me after all.",
            id: 1,
          },
          {
            answer:
              "Secondly, he's an excellent communicator and can understand, abstract, distill and present complex ideas to others effectively. He can think critically about concepts and anticipate obstacles.",
            id: 2,
          },
          {
            answer:
              "Finally, he's ferocious in his curiosity and is very teachable. He can apprehend new concepts quickly, and apply them with practice. Most of all, he's very open to learning new skills from those more knowledgeable.",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
