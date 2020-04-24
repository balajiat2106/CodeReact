import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    Increment() {
        this.setState({
            count: this.state.count + 5
        },()=>{console.log(this.state.count+10)})
    }
    render() {
        return (
            <div>
                <h1>Count={this.state.count}</h1>
                <button onClick={() => this.Increment()} >Increment</button>
            </div>
        )
    }
}

export default Counter
