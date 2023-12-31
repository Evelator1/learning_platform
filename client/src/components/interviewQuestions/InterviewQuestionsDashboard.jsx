import React,{useState,useEffect} from 'react'
import QuestionsList from './QuestionsList'
import CreateInterviewQuestion from "./CreateInterviewQuestion"
import { axiosClient } from '../../axiosClient';


function InterviewQuestionsDashboard() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axiosClient.get(
        "/interviewQuestions"
      );
      setData(response.data);
      setLoading(false); 
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
  
  };
   useEffect(() => {
    fetchData();
  }, [data]);
  const handleAddQuestion = (newQuestion) => {
    setData([...data, newQuestion]);
  };

  return (
    <div style={{marginLeft:"-10rem"}} >
        <CreateInterviewQuestion onAddQuestion={handleAddQuestion} />
        <QuestionsList data={data}  loading={loading} setLoading={setLoading} setData={setData} />

    </div>
  )
}

export default InterviewQuestionsDashboard