import React from 'react'
import {Grid} from '@material-ui/core';
import Nature1 from '../../image/nature1.jpg'
import Nature2 from '../../image/nature2.jpg'
import Card from '../../image/card.jpg'

const img = [Nature2,Nature2,Nature2,Nature2,Nature2,Nature2]

const MenuItems=({boards,icons}) =>{
    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            className="menu__items"
        >
            {boards === "Change Background" ?
            <>
            <div className="image__div">
                <img className="icon__img" src={Nature2} alt="" />
            </div>
            <p className="menu__list">{boards}</p>
            <div className="backimg__div">
                {img.map((e)=>{
                    return(
                    <div className="image__div_change">
                    <img className="icon__img_change" src={e} alt="" />
                </div>
                    )
                })
                }

            </div>
            </>
            :
            <>
            <p className="menu__icon">{icons}</p>
            <p className="menu__list">{boards}</p>
            </>
            }
    
        </Grid>
    )
}

export default MenuItems
