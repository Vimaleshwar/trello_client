import React, { useState, useEffect } from "react";
import io from 'socket.io-client'
import Navbar from '../navbar/navbar'
import BoardNav from './BoardNav'
import Dropdown from './Dropdown'
import Todo from './Todo'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CloseIcon from '@material-ui/icons/Close';
let socket;
const PORT = 'http://localhost:3001/';

const Chat = (props) => {
    const [db, setDB] = useState("")
    const [room, setRoom] = useState("")

    const [edit, setEdit] = useState("false")

    /////
    const [changeing, setChangeing] = useState(false)
    const [newtodo, setNewtodo] = useState(false)
    const [typemsg, setTypemsg] = useState(false)
    const [values, setValues] = useState("")
    const [nextcard, setNextcard] = useState("")
    const [input, setInput] = useState("")
    ///////





    // const[roommessage,setRoommessage]=useState("")
    const [chatcardID, setChatcardID] = useState("")
    useEffect(() => {
        socket = io(PORT)
        const chatroom = props.match.params.chatroom
        setRoom(chatroom)
        const id = props.match.params.id
        // console.log(id,chatroom)
        socket.emit("join", (chatroom))
        socket.on("oldmessage", (boardDetails) => {
            setChatcardID(boardDetails)
            setDB(boardDetails)
            // setRoommessage(messages)
        })
    }, [PORT, changeing])
    useEffect(() => {
        socket = io(PORT);
    }, []);


    ///////
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

    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const addtodo = (i) => {
        console.log(i,",")
        setEdit("true")
    }
    /////////




    return (
        <div className="background__image">
            <Navbar
            //  id={id&&id}
            />
            <div className="nav__2">
                <BoardNav chatroom={room} />
                {/* <Todo room={room}
       cards={db.cards}
       chatcardID={chatcardID}
       /> */}


                <div className="todos">
                    {db.cards && db.cards.map((e, i) => {

                        // console.log(e.message.length,"lllll")
                        return (
                            <div style={{ display: "flex" }} key={i}>
                                <div
                                >
                                    <div className="todo__card">
                                        <div className="todo__heading">
                                            <h3 className="heading">
                                                {e.topic}
                                            </h3>
                                            <p className="icon">
                                                <MoreHorizIcon style={{ fontSize: "16px" }} />
                                            </p>
                                        </div>
                                        {e.message.map((e, i) => {

                                            return (
                                                <div className="todo__input__card"
                                                    key={i}
                                                >
                                                    <input className="todo__input" onChange={inputHandler} name={e.message} type="text" value={e.message} />
                                                </div>
                                            )
                                        })}
                                        {e.message.length === 0 ?
                                            <div id={i} edit={edit}>
                                                {edit === "true" ?
                                                    <div>
                                                        <div className="adding__lists">
                                                            <div className="type__msg">
                                                                <input type="text" className="type__input" value={values} onChange={(e) => { setValues(e.target.value) }} />
                                                            </div>
                                                            <div className="addlist">
                                                                <form onSubmit={addlist}>
                                                                    <button className="addlist__button">Add List</button>
                                                                    <CloseIcon style={{ fontSize: "26px", color: "#172b4d", marginLeft: "10px", marginTop: "8px" }} />
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="todo__filled__card" >
                                                        <button className="todo__filled__button" id={i} onClick={()=>setEdit("true")}>+ Add a new card</button>
                                                        <p className="icon">
                                                            <LibraryBooksIcon style={{ fontSize: "14px" }} />
                                                        </p>
                                                    </div>
                                                }

                                            </div>
                                            :
                                            <div id={i} edit={"false"}>
                                                <div className="todo__filled__card" >
                                                    <button className="todo__filled__button" id={i} onClick={()=>setEdit("true")}>+ Add another card</button>
                                                    <p className="icon">
                                                        <LibraryBooksIcon style={{ fontSize: "14px" }} />
                                                    </p>
                                                </div>
                                            </div>}

                                    </div>
                                </div>
                            </div>
                        )
                    })}


                    {
                        typemsg
                            ?
                            <div>
                                <div className="adding__lists">
                                    <div className="type__msg">
                                        <input type="text" className="type__input" value={values} onChange={(e) => { setValues(e.target.value) }} />

                                    </div>
                                    <div className="addlist">
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



                {/* /////////////// */}


            </div>
        </div>
    );
}

export default Chat;
