import React from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";
import Message from "./Message.jsx";
import Input from "./Input.jsx";

export default class Form extends React.Component {
  state = {
    name: "",
    birthday: "",
    showResults: false
  };

  handleFormChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  change = () => {
    this.setState({ showResults: !this.state.showResults });
  };

  render() {
    return this.state.showResults ? (
      <Message
        name={this.state.name}
        birthday={this.state.birthday}
        onClose={this.change}
      />
    ) : (
      <form className="user-form">
        <Input
          label="What is your name?"
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleFormChange}
        />
        <Input
          label="Enter your birthday"
          type="date"
          name="birthday"
          value={this.state.birthday}
          onChange={this.handleFormChange}
        />
        <Button onClick={this.change}></Button>
      </form>
    );
  }
}
