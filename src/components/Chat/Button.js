import React from 'react'

import './chat.css'

const Button = (props) => {
    return (
        <div>
            <div className="board__navbutton">
                <button className="nav__button">{props.text}</button>
            </div>
        </div>
    )
}

export default Button
