import React, { useState, useEffect } from "react";
import io from 'socket.io-client'
import Navbar from '../navbar/navbar'
import BoardNav from './BoardNav'
import Dropdown from './Dropdown'
import Todo from './Todo'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import Input from './input'
import Newcard from './Newcard'
import Anothercard from './Anothercard'
let socket;
const PORT = 'https://trello-clone-be.herokuapp.com/';

const Chat = (props) => {
    const [db, setDB] = useState("")
    const [room, setRoom] = useState("")
    const [edit, setEdit] = useState(false)
    const [values, setValues] = useState("")
    const [changeing, setChangeing] = useState(false)
    const [newtodo, setNewtodo] = useState(false)
    const [typemsg, setTypemsg] = useState(false)
    const [nextcard, setNextcard] = useState("")
    const [input, setInput] = useState("")
    // const[roommessage,setRoommessage]=useState("")
    const [chatcardID, setChatcardID] = useState("")
    // const[inpdisabled,setInpdisabled]=useState(true)
    useEffect(() => {
        socket = io(PORT)
        const chatroom = props.match.params.chatroom
        console.log(chatroom,"consol")
        setRoom(chatroom)
        const id = props.match.params.id
        socket.emit("join", (chatroom))
        socket.on("oldmessage", (boardDetails) => {
            setChatcardID(boardDetails)
            setDB(boardDetails)
        })
    }, [PORT, changeing])
    useEffect(() => {
        socket = io(PORT);
    }, []);
    const updateTodo =(e,message,topics,i)=>{
        let values = e.target.value
        if(e.key === "Enter"){
            console.log(message)
            const updates ={
                topics,message,i,room
            }
            socket.emit("updatetodo",updates)

        }
        socket.on("todoupdated",(updatemsg)=>{
        values=updatemsg

        })
    }
    const addlist = (e) => {
        setTypemsg(false)

        e.preventDefault()
        console.log(socket)
        console.log(room)
        socket.emit("addcard", ({ values, room }))
        setChangeing(!changeing)
        setValues("")
        socket.on("cardadded", (boardname) => {

            console.log(boardname)
            setNextcard(boardname)
        })
    }
    const addnewtodo = (e,setEdits,i,values)=>{
        setEdits(false)
        console.log(room)
        const addtodo = {
            values,room,i
        }
        socket.emit("addtodo",addtodo)
        setChangeing(!changeing)
    }
    const addtodo = (e,setadd,i,values)=>{
        
        setadd(false)
        console.log(room)
        const addtodo = {
            values,room,i
        }
        socket.emit("addtodo",addtodo)
        setChangeing(!changeing)
    }
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    return (
        <div className="background__image">
            <Navbar
            // room={room}
            //  id={id&&id}
            />
            <div className="nav__2">
                <BoardNav 
                chatroom={room} 
                />
                {/* <Todo room={room}
       cards={db.cards}
       chatcardID={chatcardID}
       /> */}
        <div className="todos">
            {db.cards && db.cards.map((e, i) => {
                const topics= e.topic
                return (
                    <div style={{ display: "flex" }} key={i}>
                        <div
                        >
                            <div className="todo__card">
                                <div className="todo__heading">
                                    <h3 className="heading">
                                        {topics}
                                    </h3>
                                    <p className="icon">
                                        <MoreHorizIcon style={{ fontSize: "16px" }} />
                                    </p>
                                </div>
                                {e.message.map((e, i) => {
                                    return (
                                        <Input topics={topics} updateTodo={updateTodo} msg={e.message} i={i}/>
                                    )
                                })}
                                {e.message.length === 0 ?
                                    <div id={i}>
                                        <Newcard addnewtodo={addnewtodo} i={i}/>
                                    </div>
                                    :
                                    <div id={i}>
                                        <Anothercard addtodo={addnewtodo} i={i} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
            {
                typemsg
                    ?
                    <div>
                        <div className="adding__list">
                            <div className="type__msg">
                                <input type="text" className="type__input" value={values} onChange={(e) => { setValues(e.target.value) }} />

                            </div>
                            <div className="addl">
                                <form onSubmit={addlist}>
                                    <button className="addlist__button">Add List</button>
                                    <CloseIcon style={{ fontSize: "26px", color: "#172b4d", marginLeft: "10px", marginTop: "8px" }} />
                                </form>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="todo__empty__card">
                        <button onClick={() => { setTypemsg(true) }} className="todo__empty__button">+ Add another list</button>
                    </div>
            }
        </div>
            </div>
        </div>
    );
}

export default Chat;
