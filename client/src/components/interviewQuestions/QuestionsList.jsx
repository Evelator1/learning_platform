import React, { useState, useEffect } from "react";
import { axiosClient } from "../../axiosClient";
import "./QuestionsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import QuestionModal from "./AnswerModal";
import DateFormatter from "./DateFormatter";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import QuestionsFilter from "../interviewQuestions/QuestionsFilter";
import { json } from "react-router-dom";

function QuestionsList({ data, loading, setData, isFavoritesSection,savedQuest }) {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isTechnical, setIsTechnical] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [showFilter, setshowFilter] = useState("filterShowed");
  const [savedQuestions, setSavedQuestions]=useState([])

  useEffect(() => {
    let filteredQuestions = [...data];

    if (selectedTechnology) {
      filteredQuestions = filteredQuestions.filter(
        (question) =>
          question.technology === selectedTechnology &&
          (isTechnical === null || question.isTechnical === isTechnical)
      );
    } else if (isTechnical !== null) {
      filteredQuestions = filteredQuestions.filter(
        (question) => question.isTechnical === isTechnical
      );
    }

    setFilteredData(filteredQuestions);
  }, [data, selectedTechnology, isTechnical]);

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

  

  const handleSaveQuestion = async (questionId) => {
    try {
      const response = await axiosClient.get(`/interviewQuestions/${questionId}`);
      const currentSavers = response.data.saves;
  
      if (Array.isArray(currentSavers)) {
        const flattenedSavers = currentSavers.flat();
        if (flattenedSavers.includes(user._id)) {
          // User already saved the question, so unsave it
          await axiosClient.put(`/interviewQuestions/${questionId}`, {
            $pull: { saves: user._id },
          });
          
        } else {
          // User hasn't saved the question, so save it
          await axiosClient.put(`/interviewQuestions/${questionId}`, {
            $push: { saves: user._id },
          });
        }
  
        // Update the savedQuestions state after making the API call
      }
    } catch (error) {
      console.error("Error while saving Question:", error);
    }
  };
  

  

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

  const questionWithHighestVotes = data.reduce(
    (prevQuestion, currentQuestion) => {
      return currentQuestion.votes > prevQuestion.votes
        ? currentQuestion
        : prevQuestion;
    },
    data[0]
  );

  return (
    <div
      className="questionListSection"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {!isFavoritesSection && (
      <div className={showFilter ? "filterShowed" : "filterHidden"}>
      <QuestionsFilter
      
        data={data}
        setFilteredData={setFilteredData}
        handleFilterQuestions={handleFilterQuestions}
        setSelectedTechnology={setSelectedTechnology}
      />
      </div>
      )}
      <Container className="interviewQuestionSection">
        <Row>
          {filteredData.map((question) => (
            <Row key={question._id} className="questionCard">
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
                    {question.technology !== "" && (
                      <>Technology: {question.technology}</>
                    )}
                  </Row>
                </Col>
                <Col xs={1}>
                  <div
                    onClick={() => handleSaveQuestion(question._id)}
                    className="saveQuetionIcon"
                  >
                     {JSON.stringify(question.saves).includes(JSON.stringify(user._id)) ? 
                      <TurnedInIcon />
                     : 
                      <TurnedInNotIcon />
                    }
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
