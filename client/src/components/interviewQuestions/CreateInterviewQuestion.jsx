import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateInterviewQuestion.css";
import { axiosClient } from "../../axiosClient";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { cols } from "../../colorSchema";

function CreateInterviewQuestion() {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState("");
  const [isTechnical, setIsTechnical] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      const question = await axiosClient.post(
        "http://localhost:3010/interviewQuestions/newQuestion",
        {
          content,
          isTechnical,
          author: user._id,
        }
      );
      console.log(question.data);

      setContent("");
      setIsTechnical(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      className="form "
      onSubmit={handleSubmit}
      style={{
        width: "55%",
        height: "auto",
        position: "relative",
        overflow: "scroll",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        backgroundColor: cols.lila,
        border: `2px solid ${cols.gray}`,
        borderRadius: "0.5rem",
        boxShadow: `10px 10px 5px  ${cols.gray}`,
      }}
    >
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className="h1">Interview Questions</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Share Job Interview Question with the community"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-5" id="formGridCheckbox">
        <Form.Check
          inline
          label="Technical"
          type="radio"
          name="group1"
          checked={isTechnical}
          onChange={() => setIsTechnical(true)}
          required
        />
        <Form.Check
          inline
          label="Non-Technical"
          type="radio"
          name="group1"
          checked={!isTechnical}
          onChange={() => setIsTechnical(false)}
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
