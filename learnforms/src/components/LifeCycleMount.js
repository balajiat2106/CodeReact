import React, { Component } from "react";
import LifeCycleMountChild from "./LifeCycleMountChild";

class LifeCycleMount extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("Lifecycle Mount Contructor");
  }
  static getDerivedStateFromProps(state, props) {
    console.log("LifeCycle Mount StaticDerived");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle Mount Did");
  }
  render() {
    console.log("Lifecycle Mount Render");
    return <div>Mount Parent
        <LifeCycleMountChild/>
    </div>;
  }
}

export default LifeCycleMount;
