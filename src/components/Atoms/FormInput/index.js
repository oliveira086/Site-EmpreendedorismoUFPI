import React from 'react'
import './styles.css'

function FormInput (props) {
    const style = {
        width: props.width + 'vw',
        
    }
    const styleFlag = {
        width: (props.width / 3) + 'vw'
    }

    const styleInput = {
        border: '#000 1px solid'
    }

    if (props.required) {
        return (
            <div id="container-main-formInput" style={style}>
                <div id="line-flags">
                    <div id="container-flag-formInput" style={styleFlag}>
                        <span>{props.title}</span>
                    </div>

                    <div id="flag-required-formInput"></div>

                </div>
                
                <div id="container-input-formInput" style={styleInput}>
                    <input type={props.type} id="input-formInput" placeholder={props.placeHolder}></input>
                </div>
    
            </div>
        )
    }
    else {
        return (
            <div id="container-main-formInput" style={style}>
                <div id="container-flag-formInput" style={styleFlag}>
                    <span>{props.title}</span>
                </div>
                <div id="container-input-formInput" style={styleInput}>
                    <input id="input-formInput" placeholder={props.placeHolder}></input>
                </div>
    
            </div>
        )
        
    }
}

export default FormInput