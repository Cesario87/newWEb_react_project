import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../../../context/userContext' //contexto
import Button from 'react-bootstrap/Button';

class Nav extends Component {
  render() {
    return <nav className={"nav-bar"}>
      <Link to="/" className={"nav-link1"}>🏠</Link>
      <Link to="/list" className={"nav-link2"}>ALL ARTICLES</Link>
      <Link to="/form" className={"nav-link3"}>ADD ARTICLE</Link>
      <userContext.Consumer>
        {({ logout, user }) => user ?
          <span className={"user-span"}>Hi, {user} <Button className="buttonFormat" variant="dark" onClick={logout}>Logout</Button>
          </span>
          : ""
        }
      </userContext.Consumer>
    </nav>;
  }
}

export default Nav;
