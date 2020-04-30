import React, { Component } from "react";

export class BasicForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      choice: "React",
      comments: "",
    };
  }

  nameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  ClickHandler = event => {
    this.setState({
      name: this.state.name,
      choice: this.state.choice,
      coments: this.state.comments,
    });

    alert(this.state.name);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.ClickHandler}>
          <div>
            <label>Name: </label>
            <input type="text" onChange={this.nameChange}></input>
          </div>
          <div>
            <label>Choice: </label>
            <textarea type="text"></textarea>
          </div>
          <div>
            <label>Comments: </label>
            <select>
              <option value="1">React</option>
              <option value="2">Angular</option>
              <option value="3">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BasicForm;
