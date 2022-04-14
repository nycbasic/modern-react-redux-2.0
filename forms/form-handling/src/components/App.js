import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    text: "",
  };

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ text: "" });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          {...this.state}
          onFormSubmit={this.handleFormSubmit}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
