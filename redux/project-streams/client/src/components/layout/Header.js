import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" to="/">
        Streamy
      </Link>
      <div className="right menu">
        <Link className="item" to="/streams/show">
          All Streams
        </Link>
        <GoogleAuth />
        {/* <Link className="item" to="/streams/new">
          Create
        </Link>
        <Link className="item" to="/streams/edit">
          Edit
        </Link>
        <Link className="item" to="/streams/delete">
          Delete
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
