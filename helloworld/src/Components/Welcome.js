import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { Name } = this.props;
    return <h1>Welcome {Name}</h1>;
  }
}
export default Welcome;
