import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../options/options.component";
import BackgroundInfo from "../background-info/background-info.component";
import YesNo from "../options/yes-no.component";

const config = {
  botName: "Wednesday",
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm Wednesday, Naiad's personal
  AI recruiter! I'd be happy to tell you about Naiad and his career so far. 
  Would you like to know more about him?`,
      {
        widget: "yesOrNo",
      },
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
              "Over the past five years I've built full-stack applications using React, Node.js, Python, GraphQL, SQL, NoSQL, and AWS, with a focus on clean architecture, performance, and user experience.",
            id: 1,
          },
          {
            answer:
              "I've contributed to enterprise products used by thousands of users, shipping features across the entire stack—from database design and APIs to responsive frontends and cloud deployments.",
            id: 2,
          },
          {
            answer:
              "I'm passionate about solving challenging problems, learning new technologies, and building software that makes a meaningful impact. I enjoy collaborating with cross-functional teams and taking ownership from idea to production.",
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
              "Naiad specializes in modern JavaScript development with React, Node.js, TypeScript, and Python. He has experience designing REST and GraphQL APIs, working with PostgreSQL and MongoDB, and deploying applications using AWS and CI/CD pipelines.",
            id: 1,
          },
          {
            answer:
              "He values clean architecture, performance, accessibility, and writing maintainable code. Whether building new products or improving existing systems, he focuses on delivering reliable software that solves real problems.",
            id: 2,
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
              "First, Naiad has a proven track record of building high-quality software across the full stack. From designing APIs and databases to creating polished React applications, he enjoys taking ownership of features from concept to production. (And yes, he built me. 🙋‍♀️)",
            id: 1,
          },
          {
            answer:
              "Second, he's an excellent communicator. His background in sales and consulting allows him to bridge the gap between technical and non-technical stakeholders, ask the right questions, and collaborate effectively across teams.",
            id: 2,
          },
          {
            answer:
              "Finally, Naiad is relentlessly curious. He learns new technologies quickly, embraces feedback, and enjoys tackling unfamiliar problems. He cares about writing clean, maintainable software and continuously improving as an engineer.",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
