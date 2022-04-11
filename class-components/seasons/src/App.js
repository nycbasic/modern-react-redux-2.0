import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      message: "",
    };

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
    if (message && !latitude) {
      return <div>{message}</div>;
    }
    if (!message && latitude) return <div>Latitude: {latitude}</div>;
    return <div>Loading...</div>;
  }
}

export default App;
