import React from "react";
import { CounterDisplay } from "./CounterDisplay";

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
        return <CounterDisplay count = {this.state.count}/>
    }
}