import React,{useState} from 'react'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CloseIcon from '@material-ui/icons/Close';





const Anothercard = ({i,addtodo})=>{
    // const [edit, setEdit] = useState(false)
const[add,setadd]= useState(false)
const [values, setValues] = useState("")
    return(
        <>
        {add ? 
            <div className="adding__lists">
            <div className="type__msg">
                <input type="text" className="type__input" value={values} onChange={(e) => { setValues(e.target.value) }} />
            </div>
            <div className="addlist">
                    <button onClick={(e)=>addtodo(e,setadd,i,values)} className="addlist__button">Add List</button>
                    <CloseIcon onClick={() => setadd(true)} style={{ fontSize: "26px", color: "#172b4d", marginLeft: "10px", marginTop: "8px" }} />
            </div>
        </div>
            :
            <div className="todo__filled__card" >
            <button className="todo__filled__button" onClick={() => setadd(true)} id={i}  >+ Add another card</button>
            <p className="icon">
                <LibraryBooksIcon style={{ fontSize: "14px" }} />
            </p>
        </div>}
        </>
    )
}
export default React.memo(Anothercard)