import React, { Component } from 'react'
import './css/Cell.css'

class Cell extends Component {
  // took out onclick toggle cell and set it to the tablebody
  // benefit to this is that you dont hafta call onclick for all the cells
  // made an id for each cell created that reflects its index
  // "_" this is to seperate the row from col for later split("_")
    renderLive() {
        return (
          <td id={this.props.row + "_"+ this.props.col} className='component-cell alive'>
              <span></span>
          </td>
        )
    }
    renderDormant () {
        return (
          <td id={this.props.row + "_"+ this.props.col} className='component-cell dormant'>
              <span></span>
          </td>
        )
    }
    render() {
        if (this.props.living) {
            return this.renderLive()

        } else {
            return this.renderDormant()
        }
    }
}


Cell.propTypes = {
    living: React.PropTypes.bool,
    row: React.PropTypes.number,
    col: React.PropTypes.number,
    toggleCell: React.PropTypes.func
};
export default Cell
