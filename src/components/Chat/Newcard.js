import React, { useState } from 'react'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CloseIcon from '@material-ui/icons/Close';

const Newcard = ({ i,addlist,addnewtodo }) => {
    const [edits, setEdits] = useState(false)
    const [values, setValues] = useState("")
    return (
        <>
        {
            edits ?
                <div>
                    < div className = "adding__lists" >
                        <div className="type__msg">
                            <input type="text" className="type__input" value={values} onChange={(e) => { setValues(e.target.value) }} />
                        </div>
                        <div className="addlist">
                                <button className="addlist__button" onClick={(e)=>addnewtodo(e,setEdits,i,values)} type="submit">Add List</button>
                                <div style={{marginTop:"8px"}}>
                                <CloseIcon style={{color: "#6b778c", fontSize: "26px", color: "#172b4d", marginLeft: "10px",cursor:"pointer" }} onClick={()=>setEdits(false)} />
                                </div>
                        </div>
                    </div >
                </div >
            :
                <div className="todo__filled__card" >
                    <button className="todo__filled__button" onClick={() => setEdits(true)} id={i} >+ Add a new card</button>
                    <p className="icon">
                        <LibraryBooksIcon style={{ fontSize: "14px" }} />
                    </p>
                </div>
        }
        </>

    )
}
export default React.memo(Newcard)