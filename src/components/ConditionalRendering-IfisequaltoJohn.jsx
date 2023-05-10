import React from "react";
import { Age } from "./Props-Extractmessage";
const name = "John";

export class Welcome2 extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {name}!  </p>
        <p>{(this.props.name === "John" && this.props.age > 18 && this.props.age < 65 ) && <Age age={this.props.age}/>}</p>
      </div>
    );
  }
}