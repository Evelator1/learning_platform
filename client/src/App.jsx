import { useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import UserDashboard from './components/dashboard/UserDashboard'
import WelcomeUserPage from './components/dashboard/WelcomeUserPage'
import 'bootstrap/dist/css/bootstrap.min.css'

import { axiosClient } from './axiosClient'

function App() {
const [userInfo,setUserInfo]=useState()
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/login' element={<Login setUserInfo={setUserInfo}/>}> </Route>
      <Route path='/signup' element={<Signup setUserInfo={setUserInfo}/>}> </Route>
      <Route path='/welcome/:username' element={<WelcomeUserPage userInfo={userInfo}/>}> </Route>
      <Route path='/:username' element={<UserDashboard/>}> </Route>
    </Routes>
    </>
  )
}

export default App
