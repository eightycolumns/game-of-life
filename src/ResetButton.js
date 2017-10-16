import React from "react";

function ResetButton(props) {
  return (
    <div className="ResetButton">
      <button onClick={props.onClick}>Reset</button>
    </div>
  );
}

export default ResetButton;
