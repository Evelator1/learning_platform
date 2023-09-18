import React, { useState,useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import PostCommentsList from "./CommentsList"; // Importing the component to display comments
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as outlineThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane as faPaperPlaneTop } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import "./CommentsModal.css"; // Importing custom CSS for the component
import { axiosClient } from "../../axiosClient"; // Importing the axios client for API requests

function CommentsModal({ selectedPost, isOpen, onClose }) {
  
  

  const { user } = useContext(AuthContext);
  // State to manage the comment input
  const [comment, setComment] = useState("");

  // State to track the newly added comment
  const [newComment, setNewComment] = useState();
  const [comments, setComments] = useState([]);

  // Function to handle creating a new comment
  const handleCreateComment = async () => {
    try {
      // Make the POST request to create the comment
      const commentResponse = await axiosClient.post("/comments/newComment", {
        author: user._id,
        content: comment,
        onPost: selectedPost._id,
      });
  
      // Extract the comment ID from the response
      // const commentId = commentResponse.data._id;
      // console.log("gggg",commentId);
  
      // Make the PUT request to update the post with the comment ID
      // await axiosClient.put(`/post/${selectedPost._id}`, {
      //   $push: {comment: commentId},
      // });
  
      // Handle the response, e.g., show a success message or update the UI
      // console.log("Comment successfully created and added to the post.");
      
      setComment(""); // Clear the comment input after submitting
      setNewComment(commentResponse.data); // Save the newly added comment to the state
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error creating and adding comment:", error);
    }
  };
  
  useEffect(() => {
    if (selectedPost) {
      // Fetch comments when the selected post changes
      axiosClient.get(`/comments/posts/${selectedPost._id}`).then((result) => {
        setComments(result.data);
      });
    }
  }, [selectedPost,newComment]);

  // Function to update the comment state when the user types in the textarea
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Return null if no post is selected (no modal content to show)
  if (!selectedPost) return null;

  return (
    <Modal show={isOpen} onHide={onClose} className="commentModal">
      {/* Modal Header */}
      <Modal.Header closeButton>
        <Modal.Title>{selectedPost.author.username}'s Post</Modal.Title>
      </Modal.Header>

      <div className="modalContants">
        {/* Post content and details */}
        <Modal.Header className="postOfTheCommentSection">
          <Container>
            <Row>
              <Col xs={1}>
                <Image
                  src={selectedPost.author.profilePicture}
                  height={50}
                  width={50}
                  roundedCircle
                />
              </Col>
              <Col xs={1} className="posterName">
                {selectedPost.author.username}
              </Col>
            </Row>
            <Row>
              <p className="mt-4">{selectedPost.content}</p>
            </Row>
            <Row className="likes_Comments_Counter">
              {
                selectedPost.likes.length > 0?
                <Col className="likesCounter">
                <FontAwesomeIcon icon={solidThumbsUp} />
                {" "}{selectedPost.likes.length}
              </Col>:
              ""
              }
              {
                comments.length > 0 ?
                <Col className="commentsTracker">
                <a>{comments.length} Comments</a>
              </Col>:
              "No comments yet! Be the first!"
              }
            </Row>
          </Container>
        </Modal.Header>

        {/* Modal Body */}
        <Modal.Body className="customModalBody">
          <Container>
            {/* Like, Comment, and Save buttons */}
            <Row className="likes_Comments_Save">
              {/* ... (Button elements for Like, Comment, and Save) ... */}
            </Row>
          </Container>

          {/* Display the list of comments */}
          <PostCommentsList post={selectedPost} newComment={newComment} />
        </Modal.Body>
      </div>

      {/* Modal Footer */}
      <Modal.Footer className="modalFooter">
        {/* Textarea for user to input a comment */}
        <Form.Control
          as="textarea"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Leave a comment here"
        />

        {/* Send button (paper plane icon) to submit the comment */}
        <FontAwesomeIcon
          icon={faPaperPlaneTop}
          onClick={handleCreateComment}
          className="commentIcon"
        />
      </Modal.Footer>
    </Modal>
  );
}

export default CommentsModal;
