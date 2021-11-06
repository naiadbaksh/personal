import React from "react";
import "./options.styles.css";

const YesNo = (props) => {
  const options = [
    {
      text: "Yes",
      handler: props.actionProvider.greet,
      id: 1,
    },
    {
      text: "No",
      handler: props.actionProvider.okay,
      id: 2,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button2">
      {option.text}
    </button>
  ));

  return <div className="options-container2">{buttonsMarkup}</div>;
};

export default YesNo;
