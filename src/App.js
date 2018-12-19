import React, { Component } from 'react';
//import logo from './logo.svg';
import Filter from './components/Filter';
import PuppyContainer from './components/PuppyContainer';
import PuppyDetails from './components/PuppyDetails';
import './App.css';

const API = "http://localhost:3000/pups"

class App extends Component {

  state={
    puppys:[], 
    currentPuppy: {}, 
    term: "",
    type: false
  }

  componentDidMount(){
    fetch(API)
      .then(r=>r.json())
      .then(puppyArray=>{
        //console.log("fetch", puppyArray)
        this.setState({
          puppys: puppyArray
        })
      })
  }

  handleClick = (event, id) => {
    const currentPuppy = this.state.puppys.find(puppy => puppy.id === id)
    this.setState({ currentPuppy })
  }

  handleChange = (event) => {
    this.setState({ term: event.target.value })
  }


  filteredpuppys = () =>{
    if (this.state.type){
      const goodPuppyList = this.state.puppys.filter(pup => pup.isGoodDog === true)
      return goodPuppyList
    } else {
    const puppyList = this.state.puppys.filter(puppyObj =>{
      return puppyObj.name.toLowerCase().includes(this.state.term)
    }) 
    return puppyList
  }
  }

  handleToggle = (event, id) => {
    let currentPuppy = this.state.puppys.find(puppy => puppy.id === id)
    //const pupIndex = currentPuppy.index 
    currentPuppy = {...currentPuppy, isGoodDog: !currentPuppy.isGoodDog}
    //console.log(currentPuppy.isGoodDog)
    const puppys = this.state.puppys.map(puppyObj => puppyObj.id === currentPuppy.id ? currentPuppy : puppyObj)
      this.setState({ puppys })
    // const newPuppies = [...this.state.puppys]
    // newPuppies.splice(pupIndex, 1, currentPuppy)
    // //console.log(newPuppies[0])
    // this.setState({
    //   puppys: newPuppies
    // })
  }

  //map find the puppy, if the index match, return new puppy, 

  handleTypeChange = (event) => {
    //console.log(event.target.checked)
    this.setState({
      type: event.target.checked
    })
  }
  render() {
    //console.log(this.state.term)
    return (
      <div>
        <h1 id="header">Puppy DB</h1>
        <Filter handleChange={this.handleChange} term={this.state.term} handleTypeChange={this.handleTypeChange} />
        <div id="app-container">
          <PuppyContainer puppys={this.filteredpuppys()} handleClick={this.handleClick} handleToggle={this.handleToggle}/>
          <PuppyDetails puppy={this.state.currentPuppy}/>
        </div>
      </div>
    );
  }
}

export default App;
