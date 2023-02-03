import React from 'react'

function Important() {
  return (
    <div className="container">
      <div className="Title">
        <ion-icon name="star-outline"></ion-icon>
        <span> 중요</span>
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

export default Important
