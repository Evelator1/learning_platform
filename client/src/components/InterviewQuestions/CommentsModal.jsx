import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import PostCommentsList from './CommentsList'; // Correct letter casing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as outlineThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faComment} from '@fortawesome/free-regular-svg-icons';
import {faStar as outlineStar}from '@fortawesome/free-regular-svg-icons';
import {faStar as solidStar}from '@fortawesome/free-solid-svg-icons';

import './CommentsModal.css';


function CommentsModal({ selectedPost, isOpen, onClose }) {

  

  if (!selectedPost) return null;
  return (
    <Modal show={isOpen} onHide={onClose} >
      <Modal.Header closeButton>
        <Modal.Title>{selectedPost.author.username}'s Post</Modal.Title>
      </Modal.Header>
      <div className='modalContants'>
        <Modal.Header className='postOfTheCommentSection'>
          <Container>
            <Row>
              <Col xs={1}>
                <Image src={selectedPost.author.profilePicture} height={50} width={50} roundedCircle/>
              </Col>
              <Col xs={1} className='posterName'>
                {selectedPost.author.username}
              </Col>
            </Row>
            <Row>
              <p>{selectedPost.content}</p>
            </Row>
            <Row className='likes_Comments_Counter'>
              <Col className='likesCounter'>
                  <FontAwesomeIcon icon={solidThumbsUp}  />
                  15
              </Col>
              <Col className='commentsTracker'>
                <a>3 Comments</a>
              </Col>

            </Row>
          </Container>
          
        </Modal.Header>
        <Modal.Body className='customModalBody'>
          <Container>
          <Row className='likes_Comments_Save'>
                <Col xs={4} className='d-flex LCS'>
                  <Button
                    className={`likeButton ${selectedPost.likeChecked ? 'likeChecked' : ''}`}
                    onClick={() => handleLikeClick(selectedPost._id)}
                  >
                    <FontAwesomeIcon
                      icon={selectedPost.likeChecked ? solidThumbsUp : outlineThumbsUp}
                      className={`LikeIconAction ${selectedPost.likeChecked ? 'likeChecked' : ''}`}
                    />
                    <span className={`ml-6 likeButtonText ${selectedPost.likeChecked ? 'likeChecked' : ''}`}>
                      Like
                    </span>
                  </Button>
                </Col>
                <Col xs={4} className='d-flex LCS'>
                  <Button
                    className={`commentButton ${selectedPost.commentChecked ? 'commentChecked' : ''}`}
                    onClick={() => handleCommentClick(selectedPostpost._id)}
                  >
                    <FontAwesomeIcon
                      icon={faComment}
                      className={`commentIconAction ${selectedPost.commentChecked ? 'commentChecked' : ''}`}
                    />
                    <span className={`ml-6 commentButtonText ${selectedPost.commentChecked ? 'commentChecked' : ''}`}>
                      Comment
                    </span>
                  </Button>
                </Col>
                <Col xs={4} className='d-flex LCS'>
                  <Button
                    className={`saveButton ${selectedPost.saveChecked ? 'saveChecked' : ''}`}
                    // onClick={() => handleSaveClick(post._id)}
                  >
                    <FontAwesomeIcon
                      icon={selectedPost.saveChecked?solidStar:outlineStar}
                      className={`saveIconAction ${selectedPost.saveChecked ? 'saveChecked' : ''}`}
                    />
                    <span className={`ml-6 saveButtonText ${selectedPost.saveChecked ? 'saveChecked' : ''}`}>
                      Save
                    </span>
                  </Button>
                </Col>
            </Row>
            </Container>
          <PostCommentsList post={selectedPost} />
        </Modal.Body>
      </div> 
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CommentsModal;
