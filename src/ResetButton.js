import React from "react";

function ResetButton(props) {
  return (
    <div className="ResetButton">
      <button onClick={onClick}>Reset</button>
    </div>
  );

  function onClick() {
    props.onClick();
    document.activeElement.blur();
  }
}

export default ResetButton;
