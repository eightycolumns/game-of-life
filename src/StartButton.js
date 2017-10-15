import React from "react";

class StartButton extends React.Component {
  render() {
    return (
      <div className="StartButton">
        <button onClick={this.props.onClick}>Start</button>
      </div>
    );
  }
}

export default StartButton;
