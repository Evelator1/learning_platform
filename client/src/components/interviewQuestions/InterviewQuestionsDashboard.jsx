import React from 'react'
import QuestionsList from './QuestionsList'
import CreateInterviewQuestion from "./CreateInterviewQuestion"

function InterviewQuestionsDashboard({userInfo}) {
  return (
    <div>
        <CreateInterviewQuestion userInfo={userInfo}/>
        <QuestionsList userInfo={userInfo}/>
    </div>
  )
}

export default InterviewQuestionsDashboard