import React, { Component } from "react";
import { Link } from "react-router-dom";

import { userContext } from '../../../context/userContext' //contexto

class Nav extends Component {
  render() {
    return <nav>
    <Link to="/">Home</Link>
    <Link to="/form">Add an article</Link>
    <Link to="/list">List of articles</Link>
    <userContext.Consumer>
        {({ logout, user }) => user ?
          <span>Hi, {user} <button onClick={logout}>Logout</button>
          </span>
          : ""
        }
      </userContext.Consumer>
  </nav>;
  }
}

export default Nav;
