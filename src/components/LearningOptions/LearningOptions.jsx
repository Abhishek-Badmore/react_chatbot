import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Jeep",
      handler: props.actionProvider.handleJeepList,
      id: 1,
    },
    {
      text: "Maserati",
      handler: props.actionProvider.handleMaseratiList,
      id: 4
    },
    { text: "FIAT", handler: () => { }, id: 2 },
    { text: "DODGE", handler: () => { }, id: 3 },
    { text: "Alpha", handler: () => { }, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;