import React from "react";
import PropTypes from "prop-types";
import { daysToDate } from "./services/date.js";
export default class Messege extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    birthday: PropTypes.string,
    onClose: PropTypes.func
  };

  get getCorrectUserName() {
    return this.props.name || "Anonymous";
  }

  getTextByBirthday = () => {
    const corectName = this.getCorrectUserName;
    if (!this.props.birthday) {
      return `Hello, ${corectName}!`;
    }

    const days = daysToDate(this.props.birthday);
    const isBirthdayToday = days === 0;

    return isBirthdayToday
      ? `Happy Birthday, ${corectName}!`
      : `Hello, ${corectName}! It's ${days} days left until your birthday`;
  };

  render() {
    return (
      <div>
        <div onClick={this.props.onClose}>{"←"}</div>
        <p>{this.getTextByBirthday()}</p>
      </div>
    );
  }
}
