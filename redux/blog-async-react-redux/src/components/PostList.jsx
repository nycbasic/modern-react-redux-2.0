import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  state = {};

  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  renderList() {
    const { posts } = this.props;
    return posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.tile}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.id} />
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

function mapStateToProps(state) {
  const { posts } = state;
  return {
    posts,
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
