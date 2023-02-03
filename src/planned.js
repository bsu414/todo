import React from 'react'

function Plan() {
  return (
    <div className="container">
      <div className="Title">
        <ion-icon name="calendar-outline"></ion-icon>
        <span> 계획된 일정</span>
      </div>
      <div className="base">
        <div className="baseAdd">
          <ion-icon name="add-circle-outline"></ion-icon>
          <input
            id="baseAddInput"
            className="baseAddInput"
            placeholder="작업 추가"
            type="text"
            maxLength="255"
          />
        </div>
      </div>
    </div>
  )
}

export default Plan
