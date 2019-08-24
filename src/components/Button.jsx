import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Button extends React.Component {
  render() {
    return (
      <div className="btn btn-primary" onClick={this.props.onClick}>
        submit
      </div>
    );
  }
}
