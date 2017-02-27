import React, { Component, PropTypes } from 'react'
import './css/ControlPanel.css'

class ControlPanel extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-controlpanel'>
                <h1>ControlPanel</h1>
            </div>
        )
    }
}

ControlPanel.propTypes = {

};

export default ControlPanel