import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [todoid, setTodoid] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!todoid || !desc){
            alert("id or title can not be blank");
        }else{
            props.addTodo(todoid, desc);
            setTodoid("");
            setdesc("");
        }
    }
    return (
        <div className='container'>
            <h2 className='text-center p-3'>Add ToDo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="todoid" className="form-label">ToDo id</label>
                    <input type="text" value={todoid} onChange={(e)=>{setTodoid(e.target.value)}} className="form-control" id="todoid" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">ToDo Title</label>
                    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add ToDo</button>
            </form>
        </div>
    )
}
