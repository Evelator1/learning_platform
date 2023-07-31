import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateInterviewQuestion.css";
import { axiosClient } from "../../axiosClient";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCogs,faLightbulb} from "@fortawesome/free-solid-svg-icons";

function CreateInterviewQuestion() {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState("");
  const [isTechnical, setIsTechnical] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(user);
    try {
      const question = await axiosClient.post("http://localhost:3010/interviewQuestions/newQuestion", {
      content,
      isTechnical,
      author:user._id
    });
      console.log(question.data);
      setContent("");
      setIsTechnical(null);
    } catch (error) {
      console.log(error);
    }
   
  };
  
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className="h1">Interview Questions</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Share with us your Interview Question"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-5" id="formGridCheckbox">
        <Form.Check
        className="mx-6"
          inline
          label={
            <>
              Technical <FontAwesomeIcon icon={faCogs} />
            </>
          } 
          type="radio"
          name="group1"
          value="true" // Set the value to a string representation of the boolean
          checked={isTechnical === "true"} // Compare with string value
          onChange={(e) => setIsTechnical(e.target.value)} // Store the value as a string
          required
        />
        <Form.Check
          inline
          label={
            <>
              Non-Technical <FontAwesomeIcon icon={faLightbulb} />
            </>
          }   
          type="radio"
          name="group1"
          value="false" // Set the value to a string representation of the boolean
          checked={isTechnical === "false"} // Compare with string value
          onChange={(e) => setIsTechnical(e.target.value)} // Store the value as a string
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateInterviewQuestion;
