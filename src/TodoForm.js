import React, { useRef, useState } from 'react'

const TodoForm = ({ onAdd }) => {
  const textRef = useRef('') // 입력후 input에 focus()해주기 위해 설정
  const [text, setText] = useState('') // 사용자로부터 받은 입력값 상태

  const changeInput = (e) => {
    const { value } = e.target
    setText(value)
  }

  const onSubmit = (e) => {
    e.preventDefault() // submit후에 새로고침을 방지하기 위해 꼭 필요하다

    if (!text) return // 입력값이 없으면 실행되지 않는다
    onAdd(text)
    setText('') // input란을 다시 공란으로 만든다
    textRef.current.focus() // input란에 포커스
  }

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} ref={textRef} />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
