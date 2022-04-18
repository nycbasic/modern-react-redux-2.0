import React, { Component } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends Component {
  state = {
    text: "",
    images: [],
  };

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.handleSearchTerm(this.state.text);
    this.setState({ text: "" });
  };

  handleSearchTerm = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    const { results } = res.data;
    this.setState({ images: results });
  };

  render() {
    const {images} = this.state;

    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          {...this.state}
          onFormSubmit={this.handleFormSubmit}
          onInputChange={this.handleInputChange}
        />
        <ImageList images={images}/>
      </div>
    );
  }
}

export default App;
