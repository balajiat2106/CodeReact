import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class SecondChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  mouseOver = () => [
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    }),
  ];
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2 onMouseOver={this.mouseOver}>
          {this.props.name} Hovered {count} times
        </h2>
      </div>
    );
  }
}

export default UpdatedComponent(SecondChild);
