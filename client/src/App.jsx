import { useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import UserDashboard from './components/dashboard/UserDashboard'
import Navbar from './components/Navbar'
import PostFeed from './components/dashboard/PostFeed'
import 'bootstrap/dist/css/bootstrap.min.css'

import { axiosClient } from './axiosClient'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/signup' element={<Signup/>}> </Route>
      <Route path='/home/:id' element={<UserDashboard/>}> </Route>
      {/* <Route path='/your-feed' element={<UserDashboard/>}> </Route> */}
    </Routes>
    </>
  )
}

export default App