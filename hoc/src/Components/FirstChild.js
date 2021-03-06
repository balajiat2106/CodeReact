import React, { Component } from "react";
import withCounter from "./withCounter";

class FirstChild extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
      </div>
    );
  }
}

export default withCounter(FirstChild, 5);
