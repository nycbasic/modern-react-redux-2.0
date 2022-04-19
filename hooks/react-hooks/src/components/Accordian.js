import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="ui styled accordion">
      {items.map((item, i) => {
        return (
          <React.Fragment key={item.title}>
            <div
              className={`title ${i === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
            >
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <div className={`content  ${i === activeIndex ? "active" : ""}`}>
              <p>{item.content}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordian;
