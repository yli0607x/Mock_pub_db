import React, { Component } from 'react';
import logo from './logo.svg';
import Filter from './components/Filter';
import PuppyContainer from './components/PuppyContainer';
import PuppyDetails from './components/PuppyDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="header">Puppy DB</h1>
        <Filter />
        <div id="app-container">
          <PuppyContainer />
          <PuppyDetails />
        </div>
      </div>
    );
  }
}

export default App;
