import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";


class UserHeader extends Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;
    fetchUser(userId);
  }
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  console.log("FROM THE MAPSTATETO PROPS IN USERHEADER: ", ownProps);

  return {
    user: state.user.find((user) => user.id === ownProps.userId),
  };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);
