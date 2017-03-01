import React, { Component } from 'react'
import Cell from './Cell'
import './css/Board.css'

class Board extends Component {

  render () {
    console.log(this.props.thisGen)
    let fullBoard = []
    let Object_row = []
    for (var i = 0; i < this.props.numRows; i++) {
      Object_row = []
      for (var j= 0; j<this.props.numCols; j++) {
        Object_row.push(<Cell
          key={j + i*10}
          col={j}
          row={i}
          living={this.props.thisGen[i][j]}
          />)
      }
      fullBoard.push(<tr key={i}>{Object_row}</tr>)
    }
// added onClick toggleCell on tbody it propagates down
    return (
      <div className='component-board'>
        <table>

          <tbody onClick={this.props.toggleCell}>
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
