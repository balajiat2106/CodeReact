import React, { Component } from "react";

class LifeCycleMountChild extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("LifecycleChild Mount Contructor");
  }
  static getDerivedStateFromProps(state, props) {
    console.log("LifecycleChild Mount StaticDerived");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleChild Mount Did");
  }
  render() {
    console.log("LifecycleChild Mount Render");
    return <div>Mount Child</div>;
  }
}

export default LifeCycleMountChild;
