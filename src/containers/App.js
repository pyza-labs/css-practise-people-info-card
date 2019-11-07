import React from "react";
import Card from "../components/Card/Card";
import "./App.css";
import { Molly, Matt, Elyse } from "../assets/people-pic";

function App() {
  const peopleArray = [
    {
      name: "Molly",
      pic: Molly,
      tag: "Coworker",
      description: "Molly is a personal assistant living in Paris.",
      join: "Joined in 2011",
      friends: 35
    },
    {
      name: "Matt Giampietro",
      pic: Matt,
      tag: "Friends",
      description: "Matthew is an interior designer living in New York.",
      join: "Joined in 2013",
      friends: 75
    },
    {
      name: "Elyse",
      pic: Elyse,
      tag: "Coworker",
      description: "Elyse is copywriter working in New York",
      join: "Joined in 2014",
      friends: 151
    }
  ];
  return <Card people={peopleArray}></Card>;
}

export default App;
