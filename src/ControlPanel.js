import React, { Component, PropTypes } from 'react'
import './css/ControlPanel.css'

class ControlPanel extends Component {

    render(){
        return (
            <div className='component-controlpanel'>
                <div id='controls'>
                    <button>Run</button>
                    <button>Pause</button>
                    <button>Clear</button>
                </div>
                <div id='generation'>
                    Generation: {this.props.generation}
                </div>
            </div>
        )
    }
}

ControlPanel.propTypes = {
    generation: React.PropTypes.number
};

export default ControlPanel