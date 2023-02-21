import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <nav>
    <Link to="/">Home</Link>
    <Link to="/form">Add an article</Link>
    <Link to="/list">List of articles</Link>
  </nav>;
  }
}

export default Nav;
