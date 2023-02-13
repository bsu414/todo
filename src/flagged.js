import React, { useState, useCallback, useRef, useEffect } from 'react'
import InputLayout from './InputLayout'
import './todolayout.css'
import TodoList from './TodoList'

function Flagged() {
  const todosInStorage = localStorage.getItem('todos')
  const parsedTodos = todosInStorage ? JSON.parse(todosInStorage) : []
  const [todos, setTodos] = useState(parsedTodos)
  const nextId = useRef(3)
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    setTodos((todos) => todos.concat(todo))
    nextId.current++
  }, [])
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }, [])
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="container">
      <div className="Title">
        <ion-icon name="flag-outline"></ion-icon>
        <span> 플래그가 지정된 전자메일</span>
      </div>
      <div className="base">
        <InputLayout onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </div>
    </div>
  )
}

export default Flagged
