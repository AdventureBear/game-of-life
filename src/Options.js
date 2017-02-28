import React, { Component, PropTypes } from 'react'
import './css/Options.css'

class Options extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-options'>
                <div id='size-options'>
                    Board Size:
                    <button>+10</button>
                    <button>-10</button>
                    <button>Rest</button>
                </div>
                <div id='speed'>
                    Board Size:
                    <button>Faster</button>
                    <button>Slower</button>
                    <button>Step</button>
                </div>
            </div>
        )
    }
}

Options.propTypes = {

};

export default Options