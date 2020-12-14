import React from 'react'
import {Grid} from '@material-ui/core';


const MenuItems=({boards,icons}) =>{
    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            className="menu__items"
        >
            <p className="menu__icon">{icons}</p>
    <p className="menu__list">{boards}</p>
        </Grid>
    )
}

export default MenuItems
