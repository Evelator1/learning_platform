import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './components/InterviewQuestions/PostsList'
import PostForm from "./components/InterviewQuestions/PostForm";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const loggedInUserId = "64b16a37e3011f8fe3953b66";

  return (
    <>
      <PostForm loggedInUserId={loggedInUserId} />
      <PostsList/>
    </>
  )
}

export default App
