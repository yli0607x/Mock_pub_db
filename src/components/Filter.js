import React, { Component } from 'react';
import '../App.css';

class Filter extends Component {
  render() {
    return (
      <div style={{margin: "auto", width: "450px"}}>
        <input 
          onChange={this.props.handleChange}
          value={this.props.term}
          type="text"
          placeholder="search by name and/or breed"
          style={{width: "250px"}}
        />
        Good boiz only
        <input 
          type="checkbox"
          onChange={this.props.handleTypeChange}
        />
      </div>
    )
  }
}

export default Filter;