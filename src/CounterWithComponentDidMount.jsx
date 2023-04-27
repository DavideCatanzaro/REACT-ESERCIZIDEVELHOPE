import React from "react";

export class Counter3 extends React.Component {
    state = {
        count:  0,
    }

    componentDidMount() {
        this.interval = setInterval(() => {
          this.setState({ count: this.state.count + 1 });
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
            </div>
        )
    }
}