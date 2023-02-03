import React from 'react'
import './today.css'

function Today() {
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
  return (
    <div className="container">
      <div className="Title">
        <span>{day().slice(0, 9)}</span>
        <span>{day().slice(9, 13)}</span>
      </div>
      <div className="base">
        <form className="baseAdd">
          <ion-icon name="add-circle-outline"></ion-icon>
          <input
            id="baseAddInput"
            name="Task"
            className="baseAddInput"
            placeholder="작업 추가"
            type="text"
            maxLength="255"
          />
        </form>
        <div className="TodoTask"></div>
      </div>
    </div>
  )
}

export default Today
