import React, { Component } from 'react';
import filter from 'lodash/filter';

import SelectInput from  '../SelectInput';
import TextInput from  '../TextInput';

class Filter extends Component {

  constructor(props) {

    super(props);

    this.state = {
      searchInput: '',
      categoryInput: '',
      orderInput: '',
      activeCategory: ''
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleCategoryInput = this.handleCategoryInput.bind(this);
    this.handleOrderInput = this.handleOrderInput.bind(this);
  }

  handleSearchInput(value) {
    this.setState({searchInput: value},()=>{this.props.handleSearch(this.state.searchInput)});
  }
  handleCategoryInput(event) {
    this.setState({categoryInput: event}, ()=>{this.props.handleCategory(this.state.categoryInput)});
  }
  handleOrderInput(event) {
    this.setState({orderInput: event.target.value});
  }
  activateInput(event) {
    this.setState({orderInput: event.target.value});
  }

  render() {
    return(
      <div className="blog">

        <h1>
          Filter
        </h1>

        <div>

          <form onSubmit={e => { e.preventDefault(); }}>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              <div style={{width: '300px', position: 'relative'}}>
                <TextInput
                  onChange={this.handleSearchInput}
                />
              </div>

              <div style={{marginLeft: '50px', width: '300px'}}>
                <SelectInput
                  options={['All'].concat(this.props.categoryList)}
                  label="Category"
                  onChange={this.handleCategoryInput}
                  value={this.state.categoryInput}
                  id='select1'
                />
              </div>
            </div>

          </form>

        </div>

      </div>
    );
  }
}

export default Filter
