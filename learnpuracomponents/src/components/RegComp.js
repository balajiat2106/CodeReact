import React, { Component } from 'react'

export class RegComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log("regular")
        return (
            <div>
                Regular
                {this.props.name}
            </div>
        )
    }
}

export default RegComp



