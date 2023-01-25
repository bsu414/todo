import React from 'react'
import './App.css'
import Layout from './layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './main'
import Today from './today'
function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/today'} element={<Today />} />
        <Route path={'/today'} element={<Today />} />
        <Route path={'/today'} element={<Today />} />
        <Route path={'/today'} element={<Today />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
