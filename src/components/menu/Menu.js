import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import {Grid} from '@material-ui/core'
import Card from '../../image/card.jpg'
import {Link} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import "./menu.css"




const PORT = 'http://localhost:3001/';

const Menu = (props) => {
  const[menuoption,setMenuoption]=useState("")
  const[board,setBoard]=useState("")
  const[id,setID] =useState("")
  useEffect((socket,variant)=>{
    socket=io(PORT)
    const id =props.match.params.id
    setID(id)
    console.log(id);
    socket.emit("getuser",id)
    socket.on("getmenu",(db)=>{
      const menulist = db.menuoption
      const boards = db.board
      
      setBoard(boards)
      setMenuoption(menulist)
    })
  },[])
  
  return (
    <div>
      <Navbar id={id&&id}/>
      <Grid
        container
        direction="row"
        // justify="center"
        alignItems="center"
        className="dashboard"
      >
        <div className="section__left">
          <div className="menuoption">
          {menuoption && menuoption.map((e,i)=>{
            return(
              <div key={i} className="menuoption__div">
                <Link to="/" className="link"><li className="menuoption__list">{e}</li></Link>
               </div> 
            )
          })}
          </div>
          <div className="teams"> 
            <div className="teams__list">
              <p className="teams__head">TEAMS</p>
              <p className="plus__button">+</p>
            </div>
            <div className="menuoption">
          {menuoption && menuoption.map((e,i)=>{
            return(
              <div key={i}  className="menuoption__div">
                <Link to="/" className="link"><li className="menuoption__list">{e}</li></Link>
               </div> 
            )
          })}
          </div>
          </div>
        </div>
        <div className="section__right">
          <div style={{padding:"14px 20px",display:"flex"}}>
            {board && board.map((e,i)=>{
              console.log(e,"llllll")

              return(
                <Link to={`/chat/${id}/${e}`} key={i} style={{margin:"10px"}}>
                  <div  className="card__div">
                    <div className="img__div">
                      <img src={Card} className="imgs" alt="" />
                    </div>
                    <div className="template">
                        <h4>{e}</h4>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Grid>
    </div>
  );
}
export default Menu
