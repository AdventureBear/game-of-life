import React, { Component } from 'react';
import logo from './images/Game_of_life_animated_glider.gif';
import './css/App.css';
import ControlPanel from './ControlPanel'
import Board from './Board'
import Options from './Options'

class App extends Component {
  constructor(props){
    super(props)
    let startrows =10
    let startcols = 10

    let arr = Array(startrows).fill().map(()=>Array(startcols).fill());
    for (let i=0; i<startrows;i++) {
      for (let j=0; j<startcols;j++){
        arr[i][j]=((Math.random() < 0.5))
      }
    }

    this.state={
      generation: 0,
      rows: startrows,
      cols: startcols,
      thisGen: arr
    }
    console.log(this.state.thisGen)
  }
  randomizeStart = () => {
    let arr = Array(this.state.rows).fill().map(()=>Array(this.state.cols).fill());
    for (let i=0; i<this.state.rows;i++) {
      for (let j=0; j<this.state.cols;j++){
        arr[i][j]=((Math.random() < 0.5))
      }
    }
    console.log(arr)
    this.setState({
      thisGen: arr
    })
  }
  clearBoard = () => {
    let arr = this.state.thisGen
    for (let i=0; i<arr.length;i++) {
      for (let j=0; j<arr[0].length;j++){
        arr[i][j]=false
      }
    }
    this.setState({
        thisGen: arr
    })
  }

  toggleCell = (i,j) => {
  console.log("toggle cell clicked", i, j)
  //  let arr = this.state.thisGen
  //  arr[i][j] = !arr[i][j]
  //  this.setState({
  //    thisGen: arr
  //  })
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Game of Life</h2>
        </div>
        <div className="App-intro">
          <ControlPanel
            clearBoard={this.clearBoard}
            randomizeStart={this.randomizeStart}
            generation={this.state.generation}
            />
          <Board
            numRows={this.state.rows}
            numCols={this.state.cols}
            thisGen={this.state.thisGen}
            toggleCell={this.toggleCell}
            />
          <Options />
        </div>
      </div>
    );
  }
}

export default App;
