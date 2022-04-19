import React from "react";
import Accordian from "./components/Accordian";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end javascrip library",
  },
  {
    title: "What use React?",
    content: "React is a favorite JS library among  engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];

const App = () => {
  return (
    <div>
      <br />
      <Accordian items={items}/>
    </div>
  );
};

export default App;
