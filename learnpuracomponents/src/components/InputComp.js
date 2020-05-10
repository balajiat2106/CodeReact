import React, { Component } from "react";

class InputComp extends Component {
  constructor(props) {
    super(props);

    this.inputTextRef = React.createRef();
  }

  focusInput() {
    this.inputTextRef.current.focus();
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" ref={this.inputTextRef}></input>
      </React.Fragment>
    );
  }
}

export default InputComp;
