import React,{useState} from 'react'


// const inputdisable =(e)=>{
//     e.target.disabled = false
// }
const Input = ({updateTodo,msg,i,topics}) =>{
    const[message,setmessage]=useState(msg)
    return(
        <div className="todo__input__card"
            key={i}
        >
            <input className="todo__input" type="text"  onKeyPress={(e)=>updateTodo(e,message,topics,i)} onChange={(e)=>setmessage(e.target.value)} value={message} />
        </div>
    )
}
export default Input