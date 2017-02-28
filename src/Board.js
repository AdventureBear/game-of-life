import React, { Component, PropTypes } from 'react'
import Row from './Row'
import './css/Board.css'

class Board extends Component {

  render () {
    let fullBoard = []
    for (var i = 0; i < this.props.numRows; i++) {
      console.log("building row: " + i)
      fullBoard.push(<Row thisRow={i} numCols={this.props.numCols} />)
    }

    return (
      <div className='component-board'>
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
  numRows: React.PropTypes.number,
  numCols: React.PropTypes.number
};

export default Board
