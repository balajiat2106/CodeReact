import React, { Component } from "react";

export class LifeCycleUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name: "Balaji"
    };
  }
  changeState = () => {
    this.setState({
      name: "Updated",
    });
  };
  static getDerivedStateFromProps(props, state) {
    console.log("Update getDerived");
    return null;
  }
  shouldComponentUpdate() {
    console.log("Update shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("update getSnapshot");
    return null;
  }
  componentDidUpdate() {
    console.log("update didUpdate");
  }
  render() {
    console.log("update Render")
    return (
        
      <div>
        <button onClick={this.changeState}>Click to change state</button>
    <label>{this.state.name}</label>
      </div>
    );
  }
}

export default LifeCycleUpdate;
