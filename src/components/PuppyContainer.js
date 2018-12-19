import React, { Component } from 'react'
import '../App.css';

import Puppy from './Puppy';

class PuppyContainer extends Component {
  render() {
    return (
      <div id="puppy-container">
        <h1>PUPPIES!!!</h1>
        {/* {map puppies} */}
      </div>
    )
  }
}

export default PuppyContainer