import React, { useEffect, useState } from "react";
import { axiosClient } from "../../axiosClient";
import "./QuestionsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import {
  faCircleUp,
  faCircleDown,
  faCogs,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as mediumChecked } from "@fortawesome/free-regular-svg-icons";
import { Container, Col, Row, Image, Button,ButtonGroup } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import AnswerList from "./AnswerList";
import QuestionModal from "./AnswerModal";
import DateFormatter from "./DateFormatter";
import Dropdown from "react-bootstrap/Dropdown";

function QuestionsList({ data, loading, setData }) {
  const { user } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isTechnical, setIsTechnical] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const handleVote = async (questionId, voteType) => {
    try {
      const userId = user._id;

      await axiosClient.patch(
        `http://localhost:3010/interviewQuestions/${questionId}/vote`,
        { voteType, userId }
      );
      // Create a new array with updated votes
      const updatedData = data.map((question) =>
        question._id === questionId
          ? {
              ...question,
              votes:
                voteType === "upvote" ? question.votes + 1 : question.votes - 1,
            }
          : question
      );

      setData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No questions found.</div>;
  }

  const handleOpenModal = (question) => {
    setSelectedQuestion(question);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedQuestion(null);
    setShowModal(false);
  };

  const questionWithHighestVotes = data.reduce(
    (prevQuestion, currentQuestion) => {
      return currentQuestion.votes > prevQuestion.votes
        ? currentQuestion
        : prevQuestion;
    },
    data[0]
  );
  
  
  const handleFilterQuestions = (option) => {
    switch (option) {
      case "all":
        setIsTechnical(null); // Set isTechnical to null to show all questions
        setSelectedTechnology(null); // Reset the selected technology when changing the filter option
        break;
      case "technical":
        setIsTechnical(true);
        setSelectedTechnology(null); // Reset the selected technology when changing the filter option
        break;
      case "non-technical":
        setIsTechnical(false);
        setSelectedTechnology(null); // Reset the selected technology when changing the filter option
        break;
      default:
        setIsTechnical(null); // Set isTechnical to null to show all questions
        setSelectedTechnology(null); // Reset the selected technology when changing the filter option
        break;
    }
  };
  
  // let filteredData = data;
  // if (isTechnical !== null) {
  //   if (isTechnical) {
  //     if (selectedTechnology) {
  //       filteredData = data.filter((question) => {
  //         return (
  //           question.isTechnical === true &&
  //           question.technology === selectedTechnology
  //         );
  //       });
  //     } else {
  //       filteredData = data.filter((question) => question.isTechnical === true);
  //     }
  //   } else {
  //     filteredData = data.filter((question) => question.isTechnical === false);
  //   }
  // }

  let filteredData = data;
  if (selectedTechnology) {
    filteredData = data.filter((question) => {
      return (
        question.technology === selectedTechnology &&
        (isTechnical === null || question.isTechnical === isTechnical)
      );
    });
  } else if (isTechnical !== null) {
    filteredData = data.filter((question) => question.isTechnical === isTechnical);
  }


  return (
    <div style={{ display: "flex",flexDirection:"column"}}>
      <Dropdown required>
          <Dropdown.Toggle variant="dark" id="dropDownType">
            Question Type
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilterQuestions("all")}>all</Dropdown.Item>
            <Dropdown as={ButtonGroup}>
                    <Button variant="success" onClick={() => handleFilterQuestions("technical")}>Technical</Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setSelectedTechnology(null)}>
                        All
                      </Dropdown.Item>
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
      
            <Dropdown.Item onClick={() => handleFilterQuestions("non-technical")}>Non-Technical</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      <Container fluid className="interviewQuestionSection">
        <Row>
          {filteredData.map((question) => (
            <Row
              key={question._id}
              className={"questionCard"}
            >
              <Col xs={2}  className="questionRatingSection">
                <Row>
                  <Button
                    variant="link"
                    onClick={() => handleVote(question._id, "upvote")}
                  >
                    <FontAwesomeIcon
                      icon={faCircleUp}
                      className="arrowIcon"
                    />
                  </Button>
                </Row>
                <Row
                  className="votesCounter"
                >
                  <h6>{question.votes} points</h6>
                </Row>
                <Row>
                  <Button
                    variant="link"
                    onClick={() => handleVote(question._id, "downvote")}
                  >
                    <FontAwesomeIcon
                      icon={faCircleDown}
                      className="arrowIcon"
                    />
                  </Button>
                </Row>
              </Col>
              <Col xs={10}  className="questionContent">
                <Row
                  className="questionHeader"
                >
                  <Col xs={2} sm={2} md={2} lg={1}>
                    <Image
                      className="userPhoto"
                      src={question.author.profilePicture}
                      roundedCircle
                    />
                  </Col>
                  <Col xs={1} sm={1} md={1} lg={1} className="userName">
                    {question.author.username}
                  </Col>
                  <Col className="abc" xs={6}>
                    <h3 style={{ textAlign: "center" }}>
                      {question.isTechnical ? (
                        <FontAwesomeIcon icon={faCogs} />
                      ) : (
                        <FontAwesomeIcon icon={faLightbulb} />
                      )}
                    </h3>
                  </Col>
                  <Col>
                    <Row className="date" xs={2}>
                      Created: <DateFormatter dateString={question.createdAt} />
                    </Row>
                  </Col>
                </Row>
                <Row className="questionBody">
                  <h6>{question.content}</h6>
                </Row>
                <Row >
                  <Button 
                  className="showAnswers"
                    onClick={() => handleOpenModal(question)}
                  >
                    View Answers
                  </Button>
                </Row>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>

      {selectedQuestion && (
        <QuestionModal
          show={showModal}
          handleClose={handleCloseModal}
          question={selectedQuestion}
        />
      )}
    </div>
  );
}

export default QuestionsList;
