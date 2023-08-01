import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col,Row,Button, Image } from "react-bootstrap";
import { faCogs, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import AnswerList from './AnswerList';
import CreateInterviewAnswer from './CreateInterviewAnswer';

const AnswerModal = ({ show, handleClose, question }) => {
  const { author, content} = question;

  return (
    <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Col xs={2} sm={2} md={2} lg={2}>
          <Image className="userPhoto" src={author.profilePicture} roundedCircle />
        </Col>
        <Col xs={1} sm={1} md={2} lg={2} className="userName">
          {author.username}
        </Col>
      </Modal.Header>
      <Modal.Body >
        <Row style={{maxHeight:"200px",marginLeft:"50px"}}>
          Question:
          <h6 style={{marginLeft:"100px"}}>{content}</h6>
        </Row>
      </Modal.Body>
      <hr/>
      <Modal.Body style={{maxHeight:"400px", overflowY:"scroll"}}>
        <Row className="questionBo">
          <AnswerList questionId={question._id}/>
        </Row>
      </Modal.Body>
      <Modal.Footer >
        
          <CreateInterviewAnswer questionId={question._id} />
        
      </Modal.Footer>
    </Modal>
  );
};

export default AnswerModal;
