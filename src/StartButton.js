import React from "react";

function StartButton(props) {
  return (
    <div className="StartButton">
      <button onClick={props.onClick}>Start</button>
    </div>
  );
}

export default StartButton;
