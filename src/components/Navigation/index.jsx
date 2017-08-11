import React, { Component } from "react";
import Link from "gatsby-link"

import "./style.scss";

class Navigation extends Component {
  render() {
    return (
      <nav className="menu">
        <ul className="menu-list">

          <li className="list-item" onClick={this.props.clickHandler}>
            <Link exact to="/" activeClassName="active">
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </Link>
          </li>

          <li className="list-item" onClick={this.props.clickHandler}>
            <a href="#">
              <i className="fa fa-user" aria-hidden="true"></i> About
            </a>
          </li>

          <li className="list-item" onClick={this.props.clickHandler}>
            <a href="#">
              <i className="fa fa-pencil" aria-hidden="true"></i> Blog
            </a>
          </li>

          <li className="list-item" onClick={this.props.clickHandler}>
            <Link exact to="/resume" activeClassName="active">
              <i className="fa fa-file-text" aria-hidden="true"></i> Resume
            </Link>
          </li>

        </ul>
      </nav>
    );
  }
}

export default Navigation;
