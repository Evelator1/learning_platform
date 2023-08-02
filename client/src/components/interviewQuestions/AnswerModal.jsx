import React from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Button, Image } from "react-bootstrap";
import { faCogs, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import AnswerList from "./AnswerList";
import CreateInterviewAnswer from "./CreateInterviewAnswer";

const AnswerModal = ({ show, handleClose, question }) => {
  const { author, content } = question;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      style={{ height: "100%" }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ height: "70px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            className="userPhoto"
            src={author.profilePicture}
            roundedCircle
          />
          {author.username}
        </div>
      </Modal.Header>

      <Modal.Body style={{marginBottom:"50px",overflow: "scroll",maxHeight:"450px"}}>
        <Row style={{ marginLeft: "50px", paddingTop: "15px" }}>
          Question:
          <h6
            style={{
              overflowWrap: "anywhere",
              minHeight: "100px",
              marginTop: "15px",
            }}
          >
            {content}
          </h6>
        </Row>

        <hr />
        <Row
          style={{
            marginLeft: "50px",
            marginBottom: "20px",
            position: "relative",
          }}
        >
          Answers:
        </Row>
        <Row>
          <h6
            style={{
              overflowWrap: "anywhere",
              minHeight: "120px",
              marginTop: "15px"
            }}
          >
            <AnswerList questionId={question._id} />
          </h6>
        </Row>
      </Modal.Body>

      <Modal.Footer
        style={{
          position: "absolute",
          bottom: "0px",
          width: "100%",
          height: "150px",
          backgroundColor: "white",
        }}
      >
        <CreateInterviewAnswer questionId={question._id} />
      </Modal.Footer>
    </Modal>
  );
};

export default AnswerModal;
