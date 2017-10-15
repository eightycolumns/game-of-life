import React from "react";

class StopButton extends React.Component {
  render() {
    return (
      <div className="StopButton">
        <button onClick={this.props.onClick}>Stop</button>
      </div>
    );
  }
}

export default StopButton;
