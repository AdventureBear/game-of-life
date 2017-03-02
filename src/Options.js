import React, { Component } from 'react'
import './css/Options.css'

class Options extends Component {
    incSize=()=>{
        this.props.changeSize(+10)
    }
    decSize=()=>{
        this.props.changeSize(-10)
    }
    render(){
        return (
            <div className='component-options'>
                <div id='size-options'>
                    Board Size:
                    <button onClick={this.incSize}>+10</button>
                    <button onClick={this.decSize}>-10</button>
                    <button onClick={this.props.reset}>Reset</button>
                </div>
                <div id='speed'>
                    Game Options:
                    <button>Faster</button>
                    <button>Slower</button>
                    <button>Step</button>
                </div>
                <div id='speed'>
                    Add Life:
                    <button>Still Life</button>
                    <button>Oscillator</button>
                    <button>Spaceship</button>
                </div>
            </div>
        )
    }
}

Options.propTypes = {
    changeSize: React.PropTypes.func,
    reset: React.PropTypes.func
};

export default Options