import React, { Component } from "react";

export class Ref extends Component {
  constructor(props) {
    super(props);

    this.refInput = React.createRef();
  }

  componentDidMount() {
    this.refInput.current.focus();
  }

  buttonClick = () => {
    alert(this.refInput.current.value);
  };

  render() {
    return (
      <div>
        &nbsp;
        <input type="text" ref={this.refInput}></input>
        <button type="submit" onClick={this.buttonClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default Ref;
