import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

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

  render() {
    const { message, latitude } = this.state;
    if (message && !latitude) return <div>{message}</div>;
    if (!message && latitude) return <SeasonDisplay lat={latitude}/>;
    return <div>Loading...</div>;
  }
}

export default App;
