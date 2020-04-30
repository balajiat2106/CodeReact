import React, { Component } from "react";
import ComplexList from "./ComplexList";
import "./styles.css";

class List extends Component {
  render() {
    const styleInline = {
      color: "orange",
      fontSize: "50px",
    };
    const newArray = ["Balaji", "Uma", "Lakshya"];
    const formattedArray = newArray.map((name, index) => (
      <h2>
        {index}-{name}
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
        <div className="font-big">{formattedArray}</div>
        <div style={styleInline}>{persons}</div>
      </div>
    );
  }
}

export default List;
