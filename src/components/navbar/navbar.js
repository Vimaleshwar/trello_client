import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import trellonav from '../../image/trellonav.png'
import Button from './Button'
import "./navbar.css"

function Navbar({id}) {
    return (
        <div className="navbar">
            <div className="nav__left">
                <Button  icon={<AppsIcon style={{ fontSize: 20 }}/>}/>
                <Button url={`/dashboard/${id}`} icon={<HomeOutlinedIcon style={{ fontSize: 20 }}/>}/>
                <Button icon={<DashboardIcon style={{ fontSize: 20 }}/>} name={"Boards"}/>
                <div className="input__btn">
                    <input type="text" className="nav__input" />
                </div>                
            </div>
            <div className="nav__img">
                <img src="trello_nav" alt="trello" />
            </div>
            <div className="nav__right">
                <Button icon={<AddIcon  style={{ fontSize: 20 }}/>}/>
                <Button icon={<InfoOutlinedIcon style={{ fontSize: 20 }}/>}/>
                <Button icon={<NotificationsNoneIcon style={{ fontSize: 20 }}/>}/>
                <div className="name__avatar">
                        V
                </div>
            </div>
        </div>
    )
}

export default Navbar
