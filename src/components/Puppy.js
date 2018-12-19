import React, { Component } from 'react'

class Puppy extends Component {
  render() {
    //console.log("inside puppy prop", this.props)
    return (
      <div onClick={event => this.props.handleClick(event, this.props.puppy.id)}>
        <div>Name: {this.props.puppy.name}</div>
        <div>Breed: {this.props.puppy.breed}</div>
        <div>GoodPup?: {this.props.puppy.isGoodDog? "true" : "false"}</div>
        <button onClick={event => this.props.handleToggle(event, this.props.puppy.id)}>Toggle pup goodness</button>
        <hr></hr>
      </div>
    )
  }
}

export default Puppy;