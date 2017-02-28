import React, { Component, PropTypes } from 'react'
import './css/Row.css'
import Cell from './Cell'

class Row extends Component {

    render(){
        let Object_row=[]
        for (var i = 0; i < this.props.numCols; i++) {
            console.log("building col: " + i)
            Object_row.push(<Cell key={i + this.props.thisRow*10} col={i} row={this.props.thisRow}/>)
        }
        return (
            <div className='component-row'>
                {Object_row}
            </div>
        )
    }
}

Row.propTypes = {
    thisRow: React.PropTypes.number,
    numCols: React.PropTypes.number
};

export default Row