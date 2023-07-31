import React from 'react'
import QuestionsList from './QuestionsList'
import CreateInterviewQuestion from "./CreateInterviewQuestion"


function InterviewQuestionsDashboard() {
  return (
    <div>
        <CreateInterviewQuestion />
        <QuestionsList />
    </div>
  )
}

export default InterviewQuestionsDashboard