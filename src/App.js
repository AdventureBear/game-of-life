import React, { Component } from 'react';
import logo from './images/Game_of_life_animated_glider.gif';
import './css/App.css';
import ControlPanel from './ControlPanel'
import Board from './Board'
/*import Options from './Options'*/

class App extends Component {
  constructor(props){
    super(props)
    let startrows =13
    let startcols = 19

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
      thisGen: arr,
      running: false
    }
  }

  randomizeStart = () => {
    let arr = Array(this.state.rows).fill().map(()=>Array(this.state.cols).fill());
    for (let i=0; i<this.state.rows;i++) {
      for (let j=0; j<this.state.cols;j++){
        arr[i][j]=((Math.random() < 0.5))
      }
    }
    //console.log(arr)
    this.setState({
      thisGen: arr,
      generation: 0
    })
  }
  clearBoard = () => {
    let arr = this.state.thisGen
    for (let i=0; i<arr.length;i++) {
      for (let j=0; j<arr[0].length;j++){
        arr[i][j]=false
      }
    }
    let gen = 0
    this.pauseGame()
    this.setState({
        thisGen: arr,
        generation: gen,
        running: false
    })
  }

  toggleCell= (i,j)=> {
  console.log("toggle cell clicked", i, j)
    let arr = this.state.thisGen
    arr[i][j] = !arr[i][j]
    this.setState({
      thisGen: arr
    })
  }



  nextGeneration = () => {
    let arr = this.state.thisGen

    for (let i=0; i<arr.length;i++) {
      for (let j=0; j<arr[0].length;j++) {
        let count = 0

        // this logic is off a little
        // you should be able to do this with ternarys
        // something like this
        // let topLeft = (expression to check) ? if true return this : otherwise return this
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

        /*if (i>0) {
          if (j>0) {
            //diagonal up and left
            if(arr[i - 1][j - 1]){
              count +=1
            }
          }
            //directly above
          if(arr[i - 1][j]){
            count +=1
          }

          if (j<this.state.cols-1) {
            //diagonal up and right
            if(arr[i - 1][j + 1]){
              count +=1
            }
          }
        }
          if (j>0) {
            //directly left
            if(arr[i][j - 1]){
              count +=1
            }
          }

          if (j<this.state.cols-1) {
            //directly right
            if(arr[i][j + 1]){
              count +=1
            }
          }

        if (i<this.state.rows-1) {
          if (j>0) {
            //diagonal down and left
            if(arr[i + 1][j - 1]){
              count +=1
            }
          }
            //directly below

          if(arr[i + 1][j]){
            count +=1
          }

          if (j<this.state.cols-1) {
            //diagonal down and right
            if(arr[i + 1][j + 1]){
              count +=1
            }
          }
        }*/

        //Conways Rules
        //1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
        //2. Any live cell with two or three live neighbours lives on to the next generation.
        //3. Any live cell with more than three live neighbours dies, as if by overpopulation.
        //4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

        if (arr[i][j]) {
          //if cell is alive do these checks (rules 1,2,3)
          //if < 2 or > 3 cell dies, otherwise stays alive
          if (count<2||count>3) {
            arr[i][j] = false
            //console.log("Cell: "+ i + ","+ j +  " has "+ count+ " neighbors and will die")
          }
        }  else {
          //if cell is dead do this check (rule 4)
          //if exactly 3 cells, cell is born
          if (count===3) {
            arr[i][j] = true
            //console.log("Cell: "+ i + ","+ j +  " has "+ count+ " neighbors and will be born")
          }
        }


      }
    }

    let newGen = this.state.generation + 1
    this.setState({
          thisGen: arr,
          generation: newGen
        })
  }


  runGame=()=> {
    console.log("Clicked Run")
    if (this.state.running===false) {
      this.setState({ running: true })
      this.timerID = setInterval(
        () => this.nextGeneration(),
        250
      )
    }
  }

  pauseGame=()=> {
    if (this.state.running===true) {
      this.setState({ running: false })
      console.log("Clicked Pause")
      clearInterval(this.timerID)
    }
  }

  //changeSize = (delta) => {
  //  let i=this.state.rows + delta
  //  let j=this.state.cols + delta
  //  console.log("change size clicked", i,j)
  //
  //  if (i>10 && i<100) {
  //    console.log("making new array")
  //    let arr = Array(i).fill().map(()=>Array(j).fill());
  //
  //    for (let a=0; a<i;a++) {
  //      for (let b=0; b<j;b++){
  //        arr[a][b]=((Math.random() < 0.5))
  //      }
  //    }
  //    console.log(arr)
  //
  //    this.setState=({
  //
  //      thisGen: arr
  //
  //    })
  //
  //    console.log(this.state.rows)
  //  }
  //}


  reset = () => {
    console.log("reset size clicked")
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
            runGame={this.runGame}
            pauseGame={this.pauseGame}
            clearBoard={this.clearBoard}
            randomizeStart={this.randomizeStart}
            generation={this.state.generation}
            nextGen={this.nextGeneration}
            />
          <Board
            numRows={this.state.rows}
            numCols={this.state.cols}
            thisGen={this.state.thisGen}
            toggleCell={this.toggleCell}
            />
          {/*<Options
            changeSize={this.changeSize}
            reset={this.reset}
            />*/}

        </div>
      </div>
    );
  }
}

export default App;
