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
    <Modal show={show} onHide={handleClose} size="xl" style={{height:"100%"}} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton style={{height:"70px"}}>
        <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center"}}>
          <Image className="userPhoto" src={author.profilePicture} roundedCircle />
          {author.username}
        </div>
      </Modal.Header>
      <div style={{overflowY:"scroll",marginBottom:"120px"}}>
        <Modal.Body >
          <Row style={{height:"150px",marginLeft:"50px",paddingTop:"15px"}}>
            Question:<h6  style={{height:"80px"}}>{content}</h6>
          </Row>
        </Modal.Body>
        <hr/>
        <Modal.Body style={{height:"200px"}}>
          <Row style={{marginLeft:"50px",marginBottom:"20px"}}>
          Answers:
          </Row>
          <Row className="questionBo"  >
            <AnswerList questionId={question._id}  />
          </Row>
        </Modal.Body>
      </div>
      
      <Modal.Footer style={{position:"absolute",bottom:"0px",width:"100%",height:"150px",backgroundColor:"white"}}>
        
          <CreateInterviewAnswer questionId={question._id} />
        
      </Modal.Footer>
    </Modal>
  );
};

export default AnswerModal;
