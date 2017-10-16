import React from "react";

function StopButton(props) {
  return (
    <div className="StopButton">
      <button onClick={props.onClick}>Stop</button>
    </div>
  );
}

export default StopButton;
