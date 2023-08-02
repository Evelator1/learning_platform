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
        `/interviewAnswers/question/${questionId}`
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
          `/interviewAnswers/${answerId}/vote`,
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
            <Col xs={6}>
              <Image
                src={answer.author.profilePicture}
                style={{
                  height: "40px",
                  width: "40px",
                  marginRight: "13px",
                  marginLeft: "45px",
                }}
                roundedCircle
              ></Image>
              {answer.author.username}
            </Col>
            <Col style={{ textAlign: "end" }}>
              {" "}
              Created: <DateFormatter dateString={answer.createdAt} />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "30px",
              padding: "20px",
              marginBottom:"50px",
              borderBottom: "1px solid lightgray",
            }}
          >
            <Col
              xs={2}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "150px",
                padding: "0",
              }}
            >
              <FontAwesomeIcon
                icon={faCircleUp}
                onClick={() => handleVote(answer._id, "upvote")}
                style={{ height: "25px", margin: "0" }}
              />

              <h6 style={{ textAlign: "center" }}>{answer.votes} points</h6>

              <FontAwesomeIcon
                icon={faCircleDown}
                onClick={() => handleVote(answer._id, "downvote")}
                style={{ height: "25px", margin: "0" }}
              />
            </Col>
            <Col xs={9}>
              <p
                style={{
                  marginRight: "5px",
                  minHeight: "100px",
                  overflowWrap: "anywhere",
                }}
              >
                {answer.answerContent}
              </p>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
}
