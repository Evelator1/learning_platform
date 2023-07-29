import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { axiosClient } from "../../../../axiosClient";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./learningCards.css";
// import CategoryDropdown from "./CategoryDropdown";
// import GroupDropdown from "./GroupDropdown";

export default function NewLearningCard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [group, setGroup] = useState("");

  // const handleCategory = (category) => {
  //   setCategory(category);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newCard = await axiosClient.post(
        "http://localhost:3010/learningcards/createlearningcard",
        {
          question,
          answer,
          category,
          group,
        }
      );

      console.log(newCard.data);
      setQuestion("");
      setAnswer("");
      setCategory("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className="h5">Set the question for the card</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className="h5">Set the answer</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </Form.Group>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Technical question">Technical Question</option>
          <option value="Non-technical question">Non-technical Question</option>
        </select>

        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          <option value="">Select level of difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Hard">Hard</option>
        </select>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
