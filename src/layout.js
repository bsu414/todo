import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  const list = document.querySelectorAll('.list')
  function activeLink() {
    list.forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
  }
  list.forEach((item) => item.addEventListener('click', activeLink))
  return (
    <div className="App">
      <header>To Do</header>
      <div className="Con">
        <div className="navigation">
          <ul>
            <li className="list active">
              <Link to="/today">
                <span className="icon">
                  <ion-icon name="sunny-outline"></ion-icon>
                </span>
                <span className="title">오늘 할일</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/important">
                <span className="icon">
                  <ion-icon name="star-outline"></ion-icon>
                </span>
                <span className="title">중요</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/planned">
                <span className="icon">
                  <ion-icon name="calendar-outline"></ion-icon>
                </span>
                <span className="title">계획된 일정</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/assigned_to_me">
                <span className="icon">
                  <ion-icon name="person-outline"></ion-icon>
                </span>
                <span className="title">나에게 할당됨</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/flagged">
                <span className="icon">
                  <ion-icon name="flag-outline"></ion-icon>
                </span>
                <span className="title">플래그가 지정된 전자 메일</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/inbox">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">작업</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Layout
