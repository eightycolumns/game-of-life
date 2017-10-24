import React from "react";

function StopButton(props) {
  return (
    <div className="StopButton">
      <button onClick={onClick}>Stop</button>
    </div>
  );

  function onClick() {
    props.onClick();
    document.activeElement.blur();
  }
}

export default StopButton;
