import React,{useState,useEffect} from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CloseIcon from '@material-ui/icons/Close';
import io from "socket.io-client";


let socket;
const PORT = 'https://trello-clone-be.herokuapp.com/';
function Todo(props) {
    
    const[typemsg,setTypemsg]=useState(false)
    const[values,setValues]=useState("")
    const[nextcard,setNextcard]=useState("")
const[input,setInput]=useState("")

    // const chatcardID = props.chatcardID
    // console.log(chatcardID,"ppppppp")
   const card =props.cards && props.cards
//    const cards=[...card]
//    console.log(cards)

    useEffect(() => {
        socket = io(PORT);
      }, [PORT,nextcard]);
      useEffect(()=>{
       
      },[values])
    //   console.log(props.cards,"kkk")
// const inpvalue = cards && cards.map((e)=>{
//     e.message.map(a=>{
//         return(<>
//             {a.message}
//             </>
//         )
       
//     })
// })




      const addlist = (e)=>{
        // e.preventDefault()
        // console.log(socket)
      const rooms = props.room
      console.log(rooms)
        // console.log(chatcardID)
        socket.emit("addcard",({values,rooms}))
       socket.on("cardadded",(boardname)=>{
           console.log(boardname)
           setNextcard(boardname)
           setTypemsg(false)
       })
        }
        const inputHandler = (e) =>{
            
            setInput(e.target.value)
        }
        // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //     const { target } = event;
        //     const { name, value } = target;
        //     event.persist();
        //     setValues({ ...values, [name]: value });
        //   };
    // console.log(props,"llll")
    return (
        <div className="todos">
            {props.cards && props.cards.map((e,i)=>{
    console.log(e,"lllll")
    
    return(
        <div style={{display:"flex"}} key={i}>
        {/* {e.message.map((e,i)=>{ */}
            {/* // console.log(e._id,"kkkkkk") */}
            {/* return( */}
                <div 
                // key={i} 
                // id={e._id}
                >
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
                            // console.log(e,"ooooo")
                            return(  
                            <div className="todo__input__card"
                             key={i}
                            //  id={e._id}
                             >
                                <input className="todo__input" onChange={inputHandler} name={e.message}  type="text" value={e.message} />
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
                    {/* ) */}
                {/* // })} */}
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
