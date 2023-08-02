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
import {
  Container,
  Col,
  Row,
  Image,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import AnswerList from "./AnswerList";
import QuestionModal from "./AnswerModal";
import DateFormatter from "./DateFormatter";
import Dropdown from "react-bootstrap/Dropdown";
import { cols } from "../../colorSchema";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";

function QuestionsList({ data, loading, setData }) {
  const { user } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isTechnical, setIsTechnical] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [savedQuestion, setSavedQuestion] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleVote = async (questionId, voteType) => {
    try {
      const userId = user._id;

      await axiosClient.patch(`/interviewQuestions/${questionId}/vote`, {
        voteType,
        userId,
      });
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
    setSelectedQuestionId(question._id);
    setSelectedQuestion(question);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedQuestion(null);
    setShowModal(false);
  };

  const handleSaveQuestion = (questionId) => {
    setSelectedQuestionId(questionId);
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

  let filteredData = data;
  if (selectedTechnology) {
    filteredData = data.filter((question) => {
      return (
        question.technology === selectedTechnology &&
        (isTechnical === null || question.isTechnical === isTechnical)
      );
    });
  } else if (isTechnical !== null) {
    filteredData = data.filter(
      (question) => question.isTechnical === isTechnical
    );
  }

  return (
    <div
      className="questionListSection"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Dropdown className="filterDropDown" required>
        <Dropdown.Toggle variant="dark" id="dropDownType">
          Filter by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterQuestions("all")}>
            all
          </Dropdown.Item>
          <Dropdown as={ButtonGroup}>
            <Button
              className="filterQuestionsBtn"
              variant="dark"
              onClick={() => handleFilterQuestions("technical")}
            >
              Technical
            </Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />

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
              <Dropdown.Item
                onClick={() => setSelectedTechnology("javascript")}
              >
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

          <Dropdown.Item onClick={() => handleFilterQuestions("non-technical")}>
            Non-Technical
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Container className="interviewQuestionSection">
        <Row>
          {filteredData.map((question) => (
            <Row key={question._id} className="questionCard">
              {/* <Col xs={10} className="questionContent"> */}
              <Row className="questionHeader">
                <Col xs={7}>
                  <Image
                    className="userPhoto"
                    src={question.author.profilePicture}
                    roundedCircle
                  />
                  {question.author.username}
                </Col>

                <Col xs={4}>
                  <Row className="cardHeaderRight">
                    <strong>
                      Created: <DateFormatter dateString={question.createdAt} />
                    </strong>
                  </Row>
                  <Row className="cardHeaderRight">
                    {question.isTechnical === true
                      ? "Type: Technical"
                      : "Type: Non-Technical"}
                  </Row>
                  <Row className="cardHeaderRight">
                    {question.technology !== null && (
                      <>Technology: {question.technology}</>
                    )}
                  </Row>
                </Col>
                <Col xs={1}>
                  <div
                    onClick={() => handleSaveQuestion(question._id)}
                    className="saveQuetionIcon"
                  >
                    {selectedQuestionId === question._id ? (
                      <TurnedInIcon />
                    ) : (
                      <TurnedInNotIcon />
                    )}
                  </div>
                </Col>
              </Row>
              <Row className="questionBody">
                <Col xs={2} className="questionRatingSection">
                  <Row>
                    <FontAwesomeIcon
                      icon={faCircleUp}
                      className="upArrowIcon"
                      onClick={() => handleVote(question._id, "upvote")}
                    />
                  </Row>
                  <Row className="votesCounter">
                    <h6 className="counterText">{question.votes} points</h6>
                  </Row>
                  <Row>
                    <FontAwesomeIcon
                      icon={faCircleDown}
                      className="downArrowIcon"
                      onClick={() => handleVote(question._id, "downvote")}
                    />
                  </Row>
                </Col>
                <Col>
                  <h5 className="questionText">{question.content}</h5>
                </Col>
              </Row>
              <Row className="questionFooter">
                <Button
                  className="showAnswers"
                  onClick={() => handleOpenModal(question)}
                >
                  View Answers
                </Button>
              </Row>
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
