import React, { Component } from 'react'
import './css/Row.css'
import Cell from './Cell'

class Row extends Component {

    render(){
        console.log("in row.js")
        let Object_row=[]
        for (var i = 0; i < this.props.numCols; i++) {
            console.log("building cell: " + (i+this.props.thisRow*10) )
            Object_row.push(<Cell key={i + this.props.thisRow*10} col={i} row={this.props.thisRow}/>)
        }
        return (
            <tr className='component-row'>
                {Object_row}
            </tr>
        )
    }
}

Row.propTypes = {
    thisRow: React.PropTypes.number,
    numCols: React.PropTypes.number
};

export default Row