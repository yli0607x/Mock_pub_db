import React, { Component } from 'react'
import '../App.css';
import Puppy from './Puppy';

class PuppyContainer extends Component {

  renderOnePuppy = () => {
    return this.props.puppys.map(puppy => (
      <Puppy puppy={puppy} key={puppy.id} handleClick={this.props.handleClick} handleToggle={this.props.handleToggle}/>
    ))
  }

  render() {
    //console.log("inside container props", this.props.puppys)
    return (
      <div id="puppy-container">
        <h1>PUPPIES!!!</h1>
        {this.renderOnePuppy()}
      </div>
    )
  }
}

export default PuppyContainer