import React, { Component } from "react";
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
          <h1>Irving Ventura</h1>
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
          <div className="profile-img">
            <img src={profile} />
          </div>
          <Navigation clickHandler={this.toggleCanvas}/>
          <SiteLinks />
        </div>
        <div className={`overlay ${this.state.isOpen ? 'open' : ''}`} onClick={this.toggleCanvas}></div>
      </div>
    );
  }
}

export default Sidebar;
