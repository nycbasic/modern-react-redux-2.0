import React from "react";

const Accordian = ({ items }) => {

const onTitleClick = (index) => {
    console.log('title clicked! ',index)
}

  const renderItems = items.map((item, i) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(i)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordian;
