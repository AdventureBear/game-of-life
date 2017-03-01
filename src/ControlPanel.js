import React, { Component } from 'react'
import './css/ControlPanel.css'

class ControlPanel extends Component {

    render(){
        return (
            <div className='component-controlpanel'>
                <div id='controls'>
                    <button>Run</button>
                    <button>Pause</button>
                    <button onClick={this.props.nextGen}>Step</button>
                    <button onClick={this.props.clearBoard}>Clear</button>
                    <button onClick={this.props.randomizeStart}>Random</button>
                </div>
                <div id='generation'>
                    Generation: {this.props.generation}
                </div>
            </div>
        )
    }
}

ControlPanel.propTypes = {
    randomizeStart: React.PropTypes.func,
    clearBoard: React.PropTypes.func,
    generation: React.PropTypes.number,
    nextGen: React.PropTypes.func
};

export default ControlPanel