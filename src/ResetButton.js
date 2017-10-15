import React from "react";

class ResetButton extends React.Component {
  render() {
    return (
      <div className="ResetButton">
        <button onClick={this.props.onClick}>Reset</button>
      </div>
    );
  }
}

export default ResetButton;
