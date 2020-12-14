import React from 'react'
import {Grid} from '@material-ui/core';
import MenuItems from './MenuItems'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';


const InsideDrawer = () => {
    return (
        <div className="drawer__div">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="menu__div"
            >
                <h3 className="menu__btn">Menu</h3>
            </Grid>
            <Grid 
                className="menu__div2"
            >
                <MenuItems icons={<StarBorderOutlinedIcon style={{fontSize:"20px",color: "#42526e"}}/>} boards={"About This Board"}/>
                <MenuItems icons={<StarBorderOutlinedIcon style={{fontSize:"20px",color: "#42526e"}}/>} boards={"Change Background"}/>
                <MenuItems icons={<StarBorderOutlinedIcon style={{fontSize:"20px",color: "#42526e"}}/>} boards={"Search Cards"}/>
                <MenuItems icons={<StarBorderOutlinedIcon style={{fontSize:"20px",color: "#42526e"}}/>} boards={"Stickers"}/>
                <MenuItems icons={<StarBorderOutlinedIcon style={{fontSize:"20px",color: "#42526e"}}/>} boards={"More"}/>
            </Grid>
        </div>
    )
}

export default InsideDrawer
