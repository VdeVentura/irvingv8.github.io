// Component taken from https://codepen.io/vkbansal/pen/jrWgwg

import React, { Component } from "react";
import "./style.scss";

class Select extends Component {

    constructor(props) {

        super(props)

        this.state = {
            active: false,
            filled: false,
            searchInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
    }

    handleChange(e) {
      const value = e.target.value;

      if (!value || value == '') {
        this.props.onChange(value);
        return this.setState({filled: false});
      }

      this.props.onChange(value);
      this.setState({searchInput: value, filled: true});
    };

    toggleActive() {
        this.setState({active: ! this.state.active})
    };

    render() {

        return (
          <div className={`md-input ${this.state.active ? 'active' : ''} ${this.state.filled ? 'filled' : ''}`}>
            <label
              className="text-label"
              htmlFor="search"> Search </label>
            <input
              className="text-input"
              id="search"
              onClick={this.toggleActive}
              onChange={this.handleChange}
              value={this.props.searchInput}
              type="text"/>
              <div className="input-overlay" onClick={this.toggleActive}/>
          </div>

        )

    }

}

export default Select
