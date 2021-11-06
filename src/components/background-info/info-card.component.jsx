import React, { useState } from "react";
import "./background-info.styles.css";

const InfoCard = ({
  answer,
  incrementIndex,
  lastIndex,
  showButton,
  currentInfo,
  ...props
}) => {
  return (
    <>
      <div className="infocard-container2"> {answer} </div>
      {lastIndex === currentInfo ? (
        <div
          className="infocard-button"
          onClick={props.actionProvider.backToMenu}
        >
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      ) : (
        <div className="infocard-button" onClick={incrementIndex}>
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      )}
    </>
  );
};

export default InfoCard;
