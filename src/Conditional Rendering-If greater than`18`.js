import React from "react";
import { Age } from "./Props-Extractmessage";

function WelcomeConditional({props}) {
  return (
    <div>
      <p>Hello {props.name}!</p>
      {props.age > 18 ? <Age age={props.age} /> : null}
    </div>
  );
}
export default WelcomeConditional;
