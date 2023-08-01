import React from 'react'
import QuestionsList from './QuestionsList'
import CreateInterviewQuestion from "./CreateInterviewQuestion"
function InterviewQuestionsDashboard() {
  return (
    <div style={{marginLeft:"-10rem"}} >
        <CreateInterviewQuestion />
        <QuestionsList />
    </div>
  )
}

export default InterviewQuestionsDashboard