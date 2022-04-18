import React from "react";

const SearchBar = (props) => {
  const { text, onInputChange, onFormSubmit } = props;
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="text">Image Search</label>
          <input type="text" value={text} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
