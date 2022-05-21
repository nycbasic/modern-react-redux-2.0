import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    return onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmitForm} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
