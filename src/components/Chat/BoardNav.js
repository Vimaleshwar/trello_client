import React from 'react'
import Dropdown from './Dropdown'
import Button from './Button'
import Card from '../../image/card.jpg'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const BoardNav = (props) => {
    return (
        <div className="nav">
            <div className="nav__left">
                {/* <Dropdown/> */}
                <Button text={"Board"}/>
                <div className="chatroom__div">
                    <h3 className="chatroom">{props.chatroom}</h3>
                </div>
                <Button text={<StarBorderOutlinedIcon style={{fontSize:"18px"}}/>}/>
                <Button text="general"/>
                <Button text="Team Visible"/>
                <Button text="Invite"/>
            </div>
            <div className="nav__right">
                <Button text="Butler"/>
                <Button text="Show More"/>
            </div>
        </div>
    
    )
}
export default BoardNav
