import React from "react";
import { Age } from "./Props-Extractmessage";
const name = "dado";

export class Welcome2 extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {name}!  </p>
        <p>{(this.props.age > 18 && this.props.age < 65 ) && <Age age={this.props.age}/>}</p>
      </div>
    );
  }
}