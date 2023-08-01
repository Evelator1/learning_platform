import React, { useState, useEffect } from "react";
import { axiosClient } from "../../axiosClient";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";
import DateFormatter from "./DateFormatter";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";


export default function AnswerList({ questionId }, props) {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const fetchData = async (req, res) => {
    try {
      const response = await axiosClient.get(
        `http://localhost:3010/interviewAnswers/question/${questionId}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleVote = async (answerId, voteType) => {
      try {
        const userId = user._id;

        await axiosClient.patch(
          `http://localhost:3010/interviewAnswers/${answerId}/vote`,
          { voteType, userId }
        );
        fetchData();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
      {data.map((answer) => (
        <Container key={answer._id}>
          <Row>
            <Col xs={1}>
              <Row>
                <Button
                  variant="link"
                  onClick={() => handleVote(answer._id, "upvote")}
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
                <h6>{answer.votes} points</h6>
              </Row>
              <Row style={{ marginBottom: "40px" }}>
                <Button
                  variant="link"
                  onClick={() => handleVote(answer._id, "downvote")}
                >
                  <FontAwesomeIcon
                    icon={faCircleDown}
                    className="arrowIcon"
                  />
                </Button>
              </Row>
            </Col>
            <Col xs={11} md={11} className="answerContent">
              <Row
                className="answerHeader"
                        >
                <Col xs={1}>
                  <Image
                    src={answer.author.profilePicture}
                    style={{ height: "30px", width: "30px" }}
                    roundedCircle
                  ></Image>
                </Col>
                <Col>{answer.author.username}</Col>
                <Col style={{ textAlign: "end" }}>
                  {" "}
                  Created: <DateFormatter dateString={answer.createdAt} />
                </Col>
              </Row>
              <Row style={{ marginTop: "20px", paddingLeft: "30px" }}>
                <p>{answer.answerContent}</p>
              </Row>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
}
