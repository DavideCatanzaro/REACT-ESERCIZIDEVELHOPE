import React from "react";

export class Counter2 extends React.Component {
    state = {
        count: this.props.initialValue ?? 0,
    }

    constructor(props){
        super(props)

        setInterval(()=>{
            this.setState((state)=>{
                return {
                    count: state.count + (this.props.incrementBy ?? 1),
                }
            })
        }, 1000)
    }

    render(){
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
            </div>
        )
    }
}