import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front-end javascrip library",
//   },
//   {
//     title: "What use React?",
//     content: "React is a favorite JS library among  engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use react by creating components",
//   },
// ];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState();

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown && (
        <Dropdown
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        />
      )}
    </div>
  );
};

export default App;
