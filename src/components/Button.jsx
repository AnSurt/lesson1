import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="btn btn-primary" onClick={this.props.onClick}>
        submit
      </div>
    );
  }
}
