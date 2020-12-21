import React,{useState,useEffect} from 'react'
import Dropdown from './Dropdown'
import Button from './Button'
import Card from '../../image/card.jpg'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Drawer from './drawer'


const BoardNav = ({chatroom}) => {
    const[val,setVal] =useState("")
    console.log(chatroom)
    useEffect(()=>{
    setVal(chatroom)

    })

    return (
        <div className="nav">
            <div className="nav__left">
                {/* <Dropdown/> */}
                <Button text={"Board"}/>
                <div className="chatroom__div">
                    <input type="text" onChange={(e)=>setVal(e.target.value)}  className="chatroom" value={val}/>
                </div>
                <Button text={<StarBorderOutlinedIcon style={{fontSize:"18px"}}/>}/>
                <Button text="general"/>
                <Button text="Team Visible"/>
                <Button text="Invite"/>
            </div>
            <div className="nav__right">
                <Button text="Butler"/>
                <Drawer/>
            </div>
        </div>
    
    )
}
export default BoardNav
