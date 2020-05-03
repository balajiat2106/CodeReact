import React, { PureComponent } from "react";

export default class PureComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Balaji",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Balaji-updated",
      });
    }, 2000);
  }

  render() {
    console.log("Pure component loaded");
    return <div>{this.state.name}</div>;
  }
}
