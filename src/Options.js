import React, { Component, PropTypes } from 'react'
import './css/Options.css'

class Options extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-options'>
                <h1>Options</h1>
            </div>
        )
    }
}

Options.propTypes = {

};

export default Options