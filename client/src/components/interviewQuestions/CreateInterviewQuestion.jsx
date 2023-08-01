import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateInterviewQuestion.css";
import { axiosClient } from "../../axiosClient";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

function CreateInterviewQuestion({ onAddQuestion }) {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState("");
  const [isTechnical, setIsTechnical] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const question = await axiosClient.post(
        "http://localhost:3010/interviewQuestions/newQuestion",
        {
          content,
          isTechnical,
          author: user._id,
          technology:isTechnical?selectedTechnology:""
        }
      );
      
      onAddQuestion(question.data);
      setContent("");
      setIsTechnical(null);
      setSelectedTechnology('')
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
        <Dropdown required>
          <Dropdown.Toggle variant="dark" id="dropDownType">
            Question Type
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setIsTechnical(true)}>
              Technical
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setIsTechnical(false)}>
              Non-Technical
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        {isTechnical && (
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropDownCategory">
              Question Technology
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedTechnology("node")}>
                node
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTechnology("express")}>
                express
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTechnology("react")}>
                react
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTechnology("javascript")}>
                javascript
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTechnology("html")}>
                html
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTechnology("css")}>
                css
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTechnology("sql")}>
                sql
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTechnology("mysql")}>
                mysql
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTechnology("mongodb")}>
                mongodb
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTechnology("bootstrap")}>
                bootstrap
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTechnology("other")}>
                other
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
        
      </Form.Group>
        <Button variant="primary" type="submit" className="submitBtn">
          Submit
        </Button>
        
      
      
    </Form>
  );
}

export default CreateInterviewQuestion;
