import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../../../context/userContext' //contexto
import Button from 'react-bootstrap/Button';

class Nav extends Component {
  render() {
    return <nav className={"nav-bar"}>
    <Link to="/">Home</Link>
    <Link to="/form">Add an article</Link>
    <Link to="/list">List of articles</Link>
    <userContext.Consumer>
        {({ logout, user }) => user ?
          <span className={"user-span"}>Hi, {user} <Button variant="dark" style={{ margin: '0 0 0 4vw' }} onClick={logout}>Logout</Button>
          </span>
          : ""
        }
      </userContext.Consumer>
  </nav>;
  }
}

export default Nav;
