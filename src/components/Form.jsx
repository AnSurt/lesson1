import React from "react";
import Button from "./Button.jsx";
import Message from "./Messege.jsx";
import "./styles.css";
export default class Form extends React.Component {
  state = { name: "", birthday: null, buttClick: false };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  change = () => {
    this.setState({ buttClick: !this.state.buttClick });
  };
  render() {
    return (
      <div className="flex-form">
        {this.state.buttClick ? (
          <Message
            name={this.state.name}
            birthday={this.state.birthday}
            onClose={this.change}
          />
        ) : (
          <>
            <form>
              <label>
                What is your name?
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Enter your birthday
                <input
                  type="date"
                  name="birthday"
                  value={this.state.birthday}
                  onChange={this.handleChange}
                />
              </label>
              <Button onClick={this.change}></Button>
            </form>
          </>
        )}
      </div>
    );
  }
}
