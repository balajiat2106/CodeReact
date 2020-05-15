import React, { Component } from "react";

class FirstChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  buttonClickHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.buttonClickHandler}>Clicked {count} times</button>
      </div>
    );
  }
}

export default FirstChild;
