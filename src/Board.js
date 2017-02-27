import React, { Component, PropTypes } from 'react'
import Row from './Row'
import './css/Board.css'

class Board extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rows: 10,
      cols: 10
    }
  }

  render () {

    let fullBoard = []

    for (var i = 0; i < this.state.rows; i++) {
      fullBoard.push(<Row thisRow={i} numCols={this.state.cols} />)
    }
    return (
      <div className='component-board'>
        <h1>Board</h1>
        <table>
          <tbody>
          {fullBoard}
          </tbody>
        </table>
      </div>
    )

  }

}

Board.propTypes = {

};

export default Board
