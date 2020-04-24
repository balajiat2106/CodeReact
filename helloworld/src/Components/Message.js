import React, { Component } from 'react'

class Message extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             DisplayMessage:"Welcome"
        }
    }
    
    ClickSubscribe(){
        this.setState({
            DisplayMessage:"Thank you"
                            })
        console.log(this.state.DisplayMessage)
    }

    render() {
        return (
            <div>
                <div>{this.state.DisplayMessage}</div>
                <button onClick={()=>this.ClickSubscribe()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
