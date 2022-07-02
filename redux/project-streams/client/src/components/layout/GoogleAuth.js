import React, { Component } from "react";

class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "768431578903-g9b0dtkmh2sebmo02430tsubv6jdlvh1.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamy",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  googleAuthentication = (action) => {
    const {signIn, signOut} = this.auth;
    switch(action) {
        case "sign in":
            return signIn();
        case "sign out":
            return signOut();
        default: 
        return null;
    }
  }

  renderAuthButton = () => {
    const { isSignedIn } = this.state;
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button className="ui red google button" onClick={() => this.googleAuthentication("sign out")}>
          <i className="google icon">Sign Out</i>
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={() => this.googleAuthentication("sign in")}>
          <i className="google icon">Sign In With Google!</i>
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
