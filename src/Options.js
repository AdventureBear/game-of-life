import React, { Component, PropTypes } from 'react'
import './css/Options.css'

class Options extends Component {

    render(){
        return (
            <div className='component-options'>
                <div id='size-options'>
                    Board Size:
                    <button>+10</button>
                    <button>-10</button>
                    <button>Reset</button>
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



export default Options