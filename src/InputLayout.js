import React, { useState, useCallback } from 'react'

const InputLayout = ({ onInsert }) => {
  const [value, setValue] = useState('')
  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  const onSubmit = useCallback(
    (e) => {
      onInsert(value)
      setValue('')
      e.preventDefault()
    },
    [onInsert, value]
  )
  return (
    <form className="baseAdd" onSubmit={onSubmit}>
      <ion-icon name="add-circle-outline"></ion-icon>
      <input
        id="baseAddInput"
        name="Task"
        className="baseAddInput"
        placeholder="작업 추가"
        type="text"
        maxLength="255"
        value={value}
        onChange={onChange}
      />
    </form>
  )
}

export default InputLayout
