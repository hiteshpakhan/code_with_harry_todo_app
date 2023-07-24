import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h2>ID: {todo.id}</h2>
      <h2>TITLE: {todo.title}</h2>
      <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
  )
}
