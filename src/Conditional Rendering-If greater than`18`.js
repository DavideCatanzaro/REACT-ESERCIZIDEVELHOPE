import React from "react";
import { Age } from "./Props-Extract message";

function WelcomeConditional({props}) {
  return (
    <div>
      Hello {props.name}!{props.age > 18 ? <Age age={props.age} /> : null}
    </div>
  );
}
export default WelcomeConditional({props});
