import React, { Component } from "react";

class EventBinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: "Hello",
    };
  }

  ClickMe = () => {
    this.setState({
      Message: "Good evening",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.Message}</div>
        <button onClick={this.ClickMe}>Click</button>
      </div>
    );
  }
}

export default EventBinder;
