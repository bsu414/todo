import React from 'react'
import './App.css'
import Layout from './layout'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Today from './today'
import Important from './important'
import Planned from './planned'
import AssignedToMe from './assignToMe'
import Flagged from './flagged'
import Inbox from './inbox'
const App = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path={'/'} element={<Navigate replace to="/today" />} />
        <Route path={'/today'} element={<Today />} />
        <Route path={'/important'} element={<Important />} />
        <Route path={'/planned'} element={<Planned />} />
        <Route path={'/assigned_to_me'} element={<AssignedToMe />} />
        <Route path={'/flagged'} element={<Flagged />} />
        <Route path={'/inbox'} element={<Inbox />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
