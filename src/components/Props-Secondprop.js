import React from "react";

export class WelcomeAge extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}
