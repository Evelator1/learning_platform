import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { axiosClient } from "../../axiosClient";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane as faPaperPlaneTop } from "@fortawesome/free-solid-svg-icons";
import "./CreateInterviewAnswer.css"


function CreateInterviewAnswer({questionId}) {
  const { user } = useContext(AuthContext);
  const [answerContent, setAnswerContent] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const answer = await axiosClient.post(
        "http://localhost:3010/interviewAnswers/newAnswer",
        {
          answerContent,
          author: user._id,
          question:questionId
        }
      );
      
    //   onAddAnswer(answer.data);
      setAnswerContent("");
      setIsTechnical(false);
      setSelectedTechnology('')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="answerForm" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control
          className="formTextArea"
          as="textarea"
          rows={3}
          placeholder="Share with us your possible Answer"
          value={answerContent}
          onChange={(e) => setAnswerContent(e.target.value)}
          required
        />
      </Form.Group>
        <FontAwesomeIcon
          icon={faPaperPlaneTop}
          onClick={handleSubmit}
          className="submitAnswerIcon"
        />
      
    </Form>
  );
}

export default CreateInterviewAnswer;
