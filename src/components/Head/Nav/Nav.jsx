import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../../../context/userContext' //contexto
import Button from 'react-bootstrap/Button';

class Nav extends Component {
  render() {
    return <nav className={"nav-bar"}>
      <Link to="/" className={"nav-link"} style={{ width: '0%' }}>🏠</Link>
      <Link to="/list" className={"nav-link"}>ALL ARTICLES</Link>
      <Link to="/form" className={"nav-link"} style={{ margin: '0% 5% 0% 0%' }}>ADD ARTICLE</Link>
      <userContext.Consumer>
        {({ logout, user }) => user ?
          <span className={"user-span"}>Hi, {user} <Button variant="dark" style={{ margin: '0 0 0 1vw' }} onClick={logout}>Logout</Button>
          </span>
          : ""
        }
      </userContext.Consumer>
    </nav>;
  }
}

export default Nav;
