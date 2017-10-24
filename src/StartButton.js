import React from "react";

function StartButton(props) {
  return (
    <div className="StartButton">
      <button onClick={onClick}>Start</button>
    </div>
  );

  function onClick() {
    props.onClick();
    document.activeElement.blur();
  }
}

export default StartButton;
