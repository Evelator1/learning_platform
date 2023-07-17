import React, { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment} from '@fortawesome/free-regular-svg-icons';


function PostCommentsList({ post }) {
  const [comments, setComments] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`http://localhost:3010/comment/${post._id}`);
        const jsonData = await result.json();
        setComments(jsonData); // Set the comments for the current post directly.
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [post._id]);

  // Function to handle opening the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Row className='likes_Comments_Counter'>
        <Col className='likesCounter'>
          <FontAwesomeIcon icon={solidThumbsUp} className='likeIconCounter' /> 15
        </Col>
        <Col className='commentsTracker'>
          <Button className={`commentButton ${post.commentChecked ? 'commentChecked' : ''}`} onClick={openModal}>
            <FontAwesomeIcon icon={faComment} className={`commentIconAction ${post.commentChecked ? 'commentChecked' : ''}`} />
            <span className={`ml-6 commentButtonText ${post.commentChecked ? 'commentChecked' : ''}`}>Comment</span>
          </Button>
        </Col>
      </Row>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Post and Comments Modal"
      >
        {/* Render the post content here */}
        <h2>{post.author.username}</h2>
        <p>{post.content}</p>
        <h3>Comments:</h3>
        {/* Render the comments here */}
        {comments.map((comment) => (
          <div key={comment._id}>
            <Image src={comment.author.profilePicture} height={43} width={43} roundedCircle/>
            <h5>{comment.author.username}</h5>
            <p>{comment.content}</p>
          </div>
        ))}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default PostCommentsList;
