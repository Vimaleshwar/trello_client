import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import {Grid,Modal} from '@material-ui/core'
import Card from '../../image/card.jpg'
import {Link} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import Boardimg from '../../image/board.svg'

import "./menu.css"




const PORT = 'http://localhost:3001/';
let socket;
const Menu = (props) => {
  const[menuoption,setMenuoption]=useState("")
  const[board,setBoard]=useState("")
  const[addboard,setAddboard]=useState(true)
  const[template,setTemplate]=useState("")
  const[id,setID] =useState("")
  const[teamname,setTeamname]=useState("")
  const[teamdescription,setTeamdescription]=useState("")
  const [adc,setadc]=useState("")
  useEffect(()=>{
    socket=io(PORT)
    const id =props.match.params.id
    setID(id)
    console.log(id);
    socket.emit("getuser",id)
    socket.on("getmenu",(db)=>{
      const menulist = db.menuoption
      const boards = db.board
      const template = db.templates
      setBoard(boards)
      setMenuoption(menulist)
      setTemplate(template)
    })
  },[PORT,adc])
  useEffect(()=>{

  },[adc])
  const addTeam = (e) =>{
    e.preventDefault()
    const team = {
      teamdescription,
      teamname
    }
    setadc(teamname)
    setAddboard(false)
    socket.emit("newcard",team)
    socket.on("boardadded",teamname)
    
  }

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
              <p className="plus__button" onClick={()=>setAddboard(true)}>+</p>
              <Modal
          open={addboard}
          onClose={()=>{setAddboard(false)}}
        > 
          {/* <Modalcomp/> */}
          <Grid
            container
            direction="row"
            // justify="center"
            alignItems="center"
            className="modal"
          >
            <Grid className="boardside">
              <div className="board__inputs">
                <div className="modal__heading">
                  <h3 className="head">Let's Build a Team</h3>
                  <p className="description">Boost your productivity by making it easier for everyone to access boards in one location.</p>
                </div>
                <div className="team__divs">
                  <h6 className="name">Team Name</h6>
                  <input type="text" className="name__input" value={teamname} onChange={(e)=>setTeamname(e.target.value)} />
                  <p className="mild__text">This is the name of your company,team or organization</p>
                </div>
                <div className="team__divs">
                <h6 className="name">Team Type</h6>
                  <select className="templates" defaultValue="" id="cars">
                  <option value="">Choose...</option>
                    {
                      template && template.map((e,i)=>{
                        return(
                    <option key={i} value={`${e}`}>{e}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className="team__divs">
                <h6 className="name">Team Description <span>Optional</span></h6>
                <textarea rows="8" cols="50" placeholder="Our team organizes everything here"  value={teamdescription} onChange={(e)=>setTeamdescription(e.target.value)}>

                </textarea>
                <p className="mild__text">Get your members on board with a few words about your team.</p>
                </div>
                <div>
                  <button onClick={addTeam} className="continue__btn">Continue</button>
                </div>
              </div>
            </Grid>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="imgside">
              <img src={Boardimg} alt="image"/>
            </Grid>
          </Grid>
        </Modal>
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
