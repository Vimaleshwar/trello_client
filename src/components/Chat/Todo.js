import React,{useState,useEffect} from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CloseIcon from '@material-ui/icons/Close';
import io from "socket.io-client";


let socket;
const PORT = 'http://localhost:3001/';
function Todo(props) {
    const[input,setInput]=useState("")
    const[typemsg,setTypemsg]=useState(false)
    const[values,setValues]=useState("")
    const[nextcard,setNextcard]=useState("")
    const chatcardID = props.chatcardID
    console.log(chatcardID,"ppppppp")
   
    useEffect(() => {
        socket = io(PORT);
      }, [PORT,nextcard]);
    //   console.log(room)



      const addlist = (e)=>{
        e.preventDefault()
        console.log(socket)
      const rooms = props.room
      console.log(rooms)
        console.log(chatcardID)
        socket.emit("addcard",({values,rooms,chatcardID}))
       socket.on("cardadded",(boardname)=>{
           console.log(boardname)
           setNextcard(boardname)
           setTypemsg(false)
       })
        }
   
    // console.log(props,"llll")
    return (
        <div className="todos">
            {props.message && props.message.map((e,i)=>{
                console.log(e._id,"lllll")
                
                return(
                    <div style={{display:"flex"}} key={i}>
                    {e.msg.map((e,i)=>{
                        // console.log(e._id,"kkkkkk")
                        return(
                            <div key={e._id} id={e._id}>
                                <div className="todo__card">
                                    <div className="todo__heading">
                                        <h3 className="heading">
                                            {e.topic}
                                        </h3>
                                        <p className="icon">
                                            <MoreHorizIcon style={{fontSize:"16px"}}/>
                                        </p>
                                    </div>
                                    {e.message.map((e,i)=>{
                                        // setInput(e)
                                        console.log(e,"ooooo")
                                        return(  
                                        <div className="todo__input__card" key={e._id} id={e._id}>
                                            <input className="todo__input" onChange={(e)=>{console.log(e.target.value)}}  type="text" value={e.message} />
                                        </div>
                                        )
                                    })}
                                    
                                        <div className="todo__filled__card">
                                        <button  className="todo__filled__button">+ Add another list</button>
                                        <p className="icon">
                                            <LibraryBooksIcon style={{fontSize:"14px"}}/>
                                        </p>
                                    </div>
                                </div>
                                </div>
                        )
                    })}
                    </div>
                )
            })}
            
            
            {
            typemsg 
            ?
            <div>
                <div className="adding__lists">
                    <div className="type__msg">
                        <input type="text" className="type__input" value={values} onChange={(e)=>{setValues(e.target.value)}} />
                    
                    </div>
                    <div className="addlist">
                        <form onSubmit={addlist}>
                            <button  className="addlist__button">Add List</button>
                            <CloseIcon style={{fontSize:"26px",color:"#172b4d",marginLeft:"10px",marginTop:"8px"}}/>
                        </form>
                    </div>
                </div>    
            </div>
            :
            <div className="todo__empty__card">
                <button onClick={()=>{setTypemsg(true)}} className="todo__empty__button">+ Add another list</button>
            </div>
            }
        </div>

    )
}

export default Todo
