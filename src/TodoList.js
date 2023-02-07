import React from 'react'
import TodoItem from './TodoItem'
import './Todo.css'

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className={'TodoList'}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default TodoList
