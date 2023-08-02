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
          technology: isTechnical ? selectedTechnology : "",
        }
      );

      onAddQuestion(question.data);
      setContent("");
      setIsTechnical(null);
      setSelectedTechnology("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="createQuestionForm" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className="h2">Interview Questions</Form.Label>
        <Form.Control
          className="formTextArea"
          as="textarea"
          rows={4}
          placeholder="Share Job Interview Question with the community"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-5" id="formButtons">
        <Dropdown required>
          <Dropdown.Toggle variant="dark" id="dropDownType">
            Question Type
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropDownCategory">
                Technical
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("node"), setIsTechnical(true);
                  }}
                >
                  node
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("express"), setIsTechnical(true);
                  }}
                >
                  express
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("react"), setIsTechnical(true);
                  }}
                >
                  react
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("javascript"), setIsTechnical(true);
                  }}
                >
                  javascript
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("html"), setIsTechnical(true);
                  }}
                >
                  html
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("css"), setIsTechnical(true);
                  }}
                >
                  css
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("sql"), setIsTechnical(true);
                  }}
                >
                  sql
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("mysql"), setIsTechnical(true);
                  }}
                >
                  mysql
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("mongodb"), setIsTechnical(true);
                  }}
                >
                  mongodb
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("bootstrap"), setIsTechnical(true);
                  }}
                >
                  bootstrap
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedTechnology("other"), setIsTechnical(true);
                  }}
                >
                  other
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown.Item onClick={() => setIsTechnical(false)}>
              Non-Technical
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="primary" type="submit" className="submitBtn">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default CreateInterviewQuestion;
