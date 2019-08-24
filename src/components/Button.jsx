import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <span
        className="btn btn-primary submit-button"
        onClick={this.props.onClick}
      >
        Submit
      </span>
    );
  }
}
