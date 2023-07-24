import React from 'react'
import { TodoItem } from './TodoItem'

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"
  }
  return (
    <div className='container' style={myStyle}>
        <h2 className='text-center my-3'>following are the todos</h2>
        {props.todos.length === 0? "no todos to display":
          props.todos.map((todo)=>{
            return (<>
            <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} /> 
            <hr/> 
            </>)
          })
        }
    </div>
  )
}

export default Todos