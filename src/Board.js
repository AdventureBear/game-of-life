import React, { Component } from 'react'
import Cell from './Cell'
import './css/Board.css'

class Board extends Component {

  render () {
    //console.log(this.props.thisGen)
    let fullBoard = []
    let Object_row = []
    for (var i = 0; i < this.props.numRows; i++) {
      Object_row = []
      for (var j= 0; j<this.props.numCols; j++) {
        Object_row.push(
          <Cell
          toggleCell={this.props.toggleCell}
          key={j + i*10}
          col={j}
          row={i}
          living={this.props.thisGen[i][j]}
          />)
      }
      fullBoard.push(<tr key={i}>{Object_row}</tr>)
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
  numCols: React.PropTypes.number,
  thisGen: React.PropTypes.array,
  living: React.PropTypes.bool,
  toggleCell: React.PropTypes.func
};

export default Board
