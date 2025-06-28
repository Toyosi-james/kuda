import React from 'react'
import Header from "./static/Header"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Personal from './pages/personal'
import Business from './pages/Business'
import Company from './pages/Company'
import Help from './pages/Help'

const App = () => {
  return (
    <div>
  <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Personal' element={<Personal/>}/>
          <Route path='/Business' element={<Business/>}/>
          <Route path='/Company' element={<Company/>}/>
          <Route path='/Help' element={<Help/>}/>
        </Routes>
  </BrowserRouter>
    

    </div>
  )
}

export default App
