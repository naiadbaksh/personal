import React from "react";
import "./options.styles.css";

const Options = (props) => {
  const options = [
    {
      text: "Education",
      handler: props.actionProvider.handleEducation,
      id: 1,
    },
    {
      text: "Experience",
      handler: props.actionProvider.handleExperience,
      id: 2,
    },
    {
      text: "Skills",
      handler: props.actionProvider.handleSkills,
      id: 3,
    },
    {
      text: "Why should you interview Naiad?",
      handler: props.actionProvider.handleWhy,
      id: 4,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
