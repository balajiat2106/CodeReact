import React, { Component } from "react";
import ChildInputComp from "./ChildInputComp";

export class ParentRef extends Component {
  constructor(props) {
    super(props);

    this.inputCompRef = React.createRef();
  }

  clickHandler = () => {
    this.inputCompRef.current.focus();
  };
  render() {
    return (
      <div>
        <ChildInputComp ref={this.inputCompRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default ParentRef;
