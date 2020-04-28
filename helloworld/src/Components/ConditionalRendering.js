import React, { Component } from 'react'

class ConditionalRendering extends Component {

constructor(props) {
    super(props)

    this.state = {
        loggedIn:true
    }
}


    render() {
        return this.state.loggedIn&&<div>Welcome Balaji</div>
    }
}

export default ConditionalRendering
