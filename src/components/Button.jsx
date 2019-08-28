import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };
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
