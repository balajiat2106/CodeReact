import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: "Parent",
    };
  }

  GreetMessage = (newMessage) => {
    alert(`Hello ${this.state.Message} from ${newMessage}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greet={this.GreetMessage} />
      </div>
    );
  }
}

export default ParentComponent;
