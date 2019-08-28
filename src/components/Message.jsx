import React from "react";
import PropTypes from "prop-types";
import "./back-button.css";
import { daysToDate } from "../services/date";

export default class Message extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    birthday: PropTypes.string,
    onClose: PropTypes.func
  };
  getCorrectUserName = () => {
    return this.props.name || "Anonymous";
  };

  get TextByBirthday() {
    const { birthday, name } = this.props;

    const correctName = this.getCorrectUserName(name);

    if (!birthday) {
      return `Hello, ${correctName}!`;
    }

    const days = daysToDate(birthday);
    const isBirthdayToday = days === 0;

    return isBirthdayToday
      ? `Happy Birthday, ${correctName}!`
      : `Hello, ${correctName}! It's ${days} days left until your birthday`;
  }

  render() {
    return (
      <div>
        <span className="back-button" onClick={this.props.onClose}>
          {"←"}
        </span>
        <span>{this.TextByBirthday}</span>
      </div>
    );
  }
}
