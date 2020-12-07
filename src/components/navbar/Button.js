import React from 'react'
import {Link} from 'react-router-dom'

function Button(props) {
    return (
        <>
        {props.url
        ?
        <Link className="link" to={props.url}>
        <div className="btn__div">
            <button className="nav__btn">{props.icon} {props.name === undefined ? null : <span className="nav__name">{props.name}</span>}</button>
        </div>
        </Link> : 
        <div className="btn__div">
        <button className="nav__btn">{props.icon} {props.name === undefined ? null : <span className="nav__name">{props.name}</span>}</button>
        </div>
    }
        </>
    )
}

export default Button
