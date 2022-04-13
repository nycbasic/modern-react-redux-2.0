import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = {
    latitude: null,
    message: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude } = position.coords;
        this.setState({ latitude });
      },
      (err) => {
        const { message } = err;
        this.setState({ message });
      }
    );
  }

  renderContent() {
    const { message, latitude } = this.state;
    if (message && !latitude) return <Spinner message={message} />;
    if (!message && latitude) return <SeasonDisplay lat={latitude} />;
    return <Spinner message="Please accept location request!" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
