import React from "react";

export default function ComplexList({ person }) {
  return (
    <div>
      <h2>
        I'm {person.name} and I'm {person.age}
      </h2>
    </div>
  );
}
