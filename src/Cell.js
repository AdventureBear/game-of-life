import React, { Component, PropTypes } from 'react'
import './css/Cell.css'

class Cell extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <td className='component-cell'>
                <span></span>
            </td>
        )
    }
}

Cell.propTypes = {

};

export default Cell