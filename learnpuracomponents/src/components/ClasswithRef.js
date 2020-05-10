import React, { Component } from "react";
import InputComp from "./InputComp";

class ClasswithRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusEvent = () => {
    this.inputRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <InputComp ref={this.inputRef} />
        <button onClick={this.focusEvent}>Click to focus</button>
      </div>
    );
  }
}

export default ClasswithRef;
