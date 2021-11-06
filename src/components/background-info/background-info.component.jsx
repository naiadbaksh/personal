import React, { useState } from "react";
import InfoCard from "./info-card.component";
import "./background-info.styles.css";

const BackgroundInfo = (props) => {
  console.log(props);
  let [infoIndex, setInfoIndex] = useState(0);
  const incrementIndex = () => setInfoIndex((prev) => (prev += 1));
  const currentInfo = props.info[infoIndex];
  let arrayLength = props.info.length - 1;
  const lastIndex = props.info[arrayLength];
  const showButton = currentInfo === lastIndex;

  return (
    <InfoCard
      answer={currentInfo.answer}
      incrementIndex={incrementIndex}
      lastIndex={lastIndex}
      showButton={showButton}
      {...props}
      currentInfo={currentInfo}
    />
  );
};

export default BackgroundInfo;
