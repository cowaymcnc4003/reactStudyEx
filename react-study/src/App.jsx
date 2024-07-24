// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartComponent from './component/StartComponent'
import Home from './component/Home'
import Main from './component/Main'
import RouterVal from './component/RouterVal'
import NotPound from './component/NotPound'

function App() {
  return (
    <>
      <StartComponent propData={"testProp"} />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/main" element={<Main></Main>} />
        <Route path="/routerVal/:id" element={<RouterVal></RouterVal>} />
        <Route path="*" element={<NotPound></NotPound>} />
      </Routes>
    </>
  )
}

export default App
