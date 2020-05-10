import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Balaji",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Balaji ",
      });
    }, 3000);
  }

  render() {
    console.log("Parent");
    return (
      <div>
        Parent component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
