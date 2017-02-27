import React, { Component, PropTypes } from 'react'
import './css/Row.css'
import Cell from './Cell'

class Row extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let Object_row=[]
        for (var i = 0; i < this.props.numCols; i++) {
            Object_row.push(<Cell col={i} row={this.props.thisRow}/>)
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