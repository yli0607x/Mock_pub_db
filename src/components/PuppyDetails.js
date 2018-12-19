import React, { Component } from 'react';
import '../App.css';

class PuppyDetails extends Component {
  render() {
    //console.log("inside details", this.props)
    return (
      <div id="detail-container">
        <h1>{this.props.puppy.name}</h1>
        <h3>{this.props.puppy.breed}</h3>
        <img height="300" src={this.props.puppy.image} alt={this.props.puppy.name} />
      </div>
    )
  }
}

export default PuppyDetails;