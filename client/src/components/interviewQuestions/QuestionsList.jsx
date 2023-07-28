import React, { useEffect, useState } from "react";
import { axiosClient } from "../../axiosClient";
import "./QuestionsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import {faCircleUp,faCircleDown,} from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as mediumChecked } from "@fortawesome/free-regular-svg-icons";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function QuestionsList() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axiosClient.get(
        "http://localhost:3010/interviewQuestions"
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
  }, []);

  const handleVote = async (questionId, voteType) => {
    try {
      const userId = user._id;

      await axiosClient.patch(
        `http://localhost:3010/interviewQuestions/${questionId}/vote`,
        { voteType, userId }
      );
      fetchData();
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

  function getFormattedDate(dateString) {
    const currentDate = new Date();
    const date = new Date(dateString);

    if (isSameDay(currentDate, date)) {
      return "Today";
    } else if (isSameDay(getYesterday(currentDate), date)) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString("en-GB");
    }
  }

  function isSameDay(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  function getYesterday(date) {
    const yesterday = new Date(date);
    yesterday.setDate(date.getDate() - 1);
    return yesterday;
  }

  return (
    <div style={{display:"flex"}}>
      <Container fluid className="interviewQuestionSection">
        <Row>
          {data.map((question, index) => (
            <Row
              key={question._id}
              className={"questionCard"}
              style={{
                border: `3px solid ${
                  question.votes > 0 && index === 0
                    ? "var(--best-color)"
                    : question.votes > 0 && index !== 0
                    ? "var(--useful-color)"
                    : question.votes < 0 && index !== 0
                    ? "var(--useless-color)"
                    : "var(--normal-color)"
                }`,
              }}
            >
              <Col xs={2} md={1} className="questionRatingSection">
                <Row>
                  <Button
                    variant="link"
                    onClick={() => handleVote(question._id, "upvote")}
                  >
                    <FontAwesomeIcon
                      icon={faCircleUp}
                      className="arrowIcon"
                      style={{
                        color:
                          question.votes > 0 && index === 0
                            ? "var(--best-color)"
                            : question.votes > 0 && index !== 0
                            ? "var(--useful-color)"
                            : question.votes < 0 && index !== 0
                            ? "var(--useless-color)"
                            : "var(--normal-color)",
                      }}
                    />
                  </Button>
                </Row>
                <Row
                  className="votesCounter"
                  style={{
                    color:
                      question.votes > 0 && index === 0
                        ? "var(--best-color)"
                        : question.votes > 0 && index !== 0
                        ? "var(--useful-color)"
                        : question.votes < 0 && index !== 0
                        ? "var(--useless-color)"
                        : "var(--normal-color)",
                  }}
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
                      style={{
                        color:
                          question.votes > 0 && index === 0
                            ? "var(--best-color)"
                            : question.votes > 0 && index !== 0
                            ? "var(--useful-color)"
                            : question.votes < 0 && index !== 0
                            ? "var(--useless-color)"
                            : "var(--normal-color)",
                      }}
                    />
                  </Button>
                </Row>
              </Col>
              <Col xs={10} md={11} className="questionContent">
                <Row
                  className="questionHeader"
                  style={{
                    backgroundColor:
                      question.votes > 0 && index === 0
                        ? "var(--best-color)"
                        : question.votes > 0 && index !== 0
                        ? "var(--useful-color)"
                        : question.votes < 0 && index !== 0
                        ? "var(--useless-color)"
                        : "var(--normal-color)",
                  }}
                >
                  <Col xs={2} sm={2} md={2} lg={1}>
                    <Image
                      className="userPhoto"
                      src={question.author.profilePicture}
                      roundedCircle
                    />
                  </Col>
                  <Col xs={3} sm={2} md={2} lg={2} className="userName">
                    {question.author.username}
                  </Col>
                  <Col className="abc" xs={5}>
                    <h5 style={{ height: "10px" }}>
                      {question.isTechnical ? "Technical" : "Non-Technical"}{" "}
                      Question
                    </h5>
                  </Col>
                  <Col>
                    <Row className="date" xs={2}>
                      Created: {getFormattedDate(question.createdAt)}
                    </Row>
                  </Col>
                </Row>
                <Row className="questionBody">
                  <Row className="type">
                    <h5 style={{ height: "10px" }}>
                      {question.isTechnical ? "Technical" : "Non_Technical"}{" "}
                      Question:
                    </h5>
                  </Row>
                  <Row className="type">
                    <h6>{question.content}</h6>
                  </Row>
                </Row>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>
      <div className="colorAmpel">
        <div className="colorIndicator" style={{backgroundColor:"var(--best-color)"}}>Best</div>
        <div className="colorIndicator" style={{backgroundColor:"var(--useful-color)"}}>Useful</div>
        <div className="colorIndicator" style={{backgroundColor:"var(--useless-color)"}}>Useless</div>
      </div>
    </div>
  );
}

export default QuestionsList;
