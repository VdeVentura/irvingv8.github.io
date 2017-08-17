import React, { Component } from "react";
import Link from "gatsby-link"
import profile from './profile.jpg'
import Navigation from '../Navigation'
import SiteLinks from '../SiteLinks'
import "./sidebar.scss";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};

    this.toggleCanvas = this.toggleCanvas.bind(this);
  }

  toggleCanvas() {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <div className="sidebar">
        <div className="profile-name">
          <h1><Link to="/">Irving Ventura</Link></h1>
          <div className={`hamburger ${this.state.isOpen ? 'open' : ''}`} onClick={this.toggleCanvas}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`canvas ${this.state.isOpen ? 'open' : ''}`}>
          <Link to="/">
            <div className="profile-img">
              <img src={profile} />
            </div>
          </Link>
          <Navigation clickHandler={this.toggleCanvas}/>
          <SiteLinks />
        </div>
        <div className={`overlay ${this.state.isOpen ? 'open' : ''}`} onClick={this.toggleCanvas}></div>
      </div>
    );
  }
}

export default Sidebar;
