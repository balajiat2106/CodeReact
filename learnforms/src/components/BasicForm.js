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

  commentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  nameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

changeChoice=event=>{
    this.setState({
        choice:event.target.value
    })
}

  ClickHandler = (event) => {
    this.setState({
      name: this.state.name,
      choice: this.state.choice,
      coments: this.state.comments,
    });

    alert(`${this.state.name} and ${this.state.choice} and ${this.state.comments}`);
    event.preventDefault();
  };

  render() {
    const { name, comments, choice } = this.state;
    return (
      <div>
        <form onSubmit={this.ClickHandler}>
          <div>
            <label>Name: </label>
            <input type="text" value={name} onChange={this.nameChange}></input>
          </div>
          <div>
            <label>Comments: </label>
            <textarea type="text" value={comments} onChange={this.commentChange}></textarea>
          </div>
          <div>
            <label>Choice: </label>
            <select value={choice} onChange={this.changeChoice}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BasicForm;
