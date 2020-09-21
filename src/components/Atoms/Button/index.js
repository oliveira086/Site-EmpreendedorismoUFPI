import React from 'react'
import './styles.css'

function Button (props) {
    console.log(props)

    const style = {
        width: props.width + 'vw',
        fontSize: props.size + 'px'
    };

    return (
        <div id="container-main-button" style={style}>
            {props.content}
        </div>
    )
}

export default Button
