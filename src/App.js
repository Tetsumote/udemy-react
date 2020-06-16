import React from "react";
import "./styles.css";
import Person from "./Person/Person";

export default function App() {
  return (
    <div className="App">
      <h1>Hi, from react App</h1>
      <Person />
      <Person />
      <Person />
    </div>
  );
}
