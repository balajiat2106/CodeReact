import React, { Component } from "react";
import ComplexList from "./ComplexList";

class List extends Component {
  render() {
    const newArray = ["Balaji", "Uma", "Lakshya"];
    const formattedArray = newArray.map((name, index) => (
      <h2>
        {index}-
        {name}
      </h2>
    ));
    const personList = [
      { id: 1, name: "Balaji", age: 32 },
      { id: 2, name: "Uma", age: 32 },
      { id: 3, name: "Lakshya", age: 7 },
    ];
    const persons = personList.map((person) => (
      <ComplexList key={person.id} person={person}></ComplexList>
    ));
    return (
      <div>
        <div>{formattedArray}</div>
        <div>{persons}</div>
      </div>
    );
  }
}

export default List;
