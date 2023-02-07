/* eslint-disable prettier/prettier */
/* eslint-disable */
import React, { useState, useCallback, useRef } from 'react'
import InputLayout from './InputLayout'
import './today.css'
import TodoList from './TodoList'
type Lists = {
  id:number,
  title:string,
  checked:boolean,
}
const Today = () => {
  const [list, setList] = useState<Lists[]>([]);
  const [newTodo, setNewTodo] = useState({
    id: new Date().getTime(),
    title: "",
    checked: false,
});
  const day = () => {
    const now = new Date()
    const todayYear = now.getFullYear()
    const todayMonth = now.getMonth() + 1
    const todayDay = now.getDate()
    const week = ['일', '월', '화', '수', '목', '금', '토']
    const dayOfWeek = week[now.getDay()]
    return (
      todayYear + '.' + todayMonth + '.' + todayDay + ' (' + dayOfWeek + ')'
    )
  }
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'ABC',
      checked: true
    },
    {
      id: 2,
      text: 'DEF',
      checked: false
    }
  ])
  const nextId = useRef(3)
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    setTodos(todos => todos.concat(todo))
    nextId.current++
    
  },
  []
  )
  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(
      todo => todo.id !== id
    ))
  }, [])
  const onToggle = useCallback(id => {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }, [])
  
  return (
    <div className="container">
      <div className="Title">
        <span>{day().slice(0, 9)}</span>
        <span>{day().slice(9, 13)}</span>
      </div>
      <div className="base">
        <InputLayout onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </div>
    </div>
  )
}

export default Today
