import { useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/signup' element={<Signup/>}> </Route>
    </Routes>
    </>
  )
}

export default App
