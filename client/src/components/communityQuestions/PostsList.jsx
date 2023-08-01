import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as outlineThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { axiosClient } from "../../axiosClient";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { cols } from "../../colorSchema";
import "./PostsList.css";
import CommentsModal from "./CommentsModal";
// import PostCommentsList from "./CommentsList";

function PostsList({ posts, setPosts }) {
  const { user } = useContext(AuthContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLikeClick = (postId) => {
    setPosts((prevData) =>
      prevData.map((post) =>
        post._id === postId ? { ...post, likeChecked: !post.likeChecked } : post
      )
    );
  };
  const handleCommentClick = (postId) => {
    setPosts((prevData) =>
      prevData.map((post) =>
        post._id === postId
          ? { ...post, commentChecked: !post.commentChecked }
          : post
      )
    );
  };
  const handleSaveClick = (postId) => {
    setPosts((prevData) =>
      prevData.map((post) =>
        post._id === postId ? { ...post, saveChecked: !post.saveChecked } : post
      )
    );
  };

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

  const handleAllCommentsClick = (post, event) => {
    event.preventDefault(), setSelectedPost(post);
    setModalIsOpen(true);
  };

  return (
    <div>
      {posts.map((post) => (
        <Container
          key={post._id}
          className="postCard"
          style={{ boxShadow: `10px 10px 5px  ${cols.gray}` }}
        >
          <Row className="postHeader">
            <Col xs={2}>
              {post.author.profilePicture && (
                <Image
                  src={post.author.profilePicture}
                  alt="userImg"
                  className="userPicture"
                  roundedCircle
                />
              )}
            </Col>
            <Col xs={2}>
              <Row className="userName">{post.author.username}</Row>
              <Row className="postTime">{getFormattedDate(post.createdAt)}</Row>
            </Col>
            <Col xs={6}></Col>
          </Row>
          <Row>
            <blockquote className="blockquote mb-0">
              <p>{post.content}</p>
              {post.image && (
                <Image src={post.image} className="postImage"></Image>
              )}
            </blockquote>
          </Row>
          <Row className="likes_Comments_Counter">
            <Col className="likesCounter">
              <FontAwesomeIcon
                icon={solidThumbsUp}
                className="likeIconCounter"
              />{" "}
              15
            </Col>
            <Col className="commentsTracker">
              <a
                href="/comments"
                onClick={(event) => handleAllCommentsClick(post, event)}
              >
                All Comments
              </a>
            </Col>
          </Row>
          <Row className="likes_Comments_Save">
            <Col xs={4} className="d-flex LCS">
              <Button
                className={`likeButton ${
                  post.likeChecked ? "likeChecked" : ""
                }`}
                onClick={() => handleLikeClick(post._id)}
              >
                <FontAwesomeIcon
                  icon={post.likeChecked ? solidThumbsUp : outlineThumbsUp}
                  className={`LikeIconAction ${
                    post.likeChecked ? "likeChecked" : ""
                  }`}
                />
                <span
                  className={`ml-6 likeButtonText ${
                    post.likeChecked ? "likeChecked" : ""
                  }`}
                >
                  Like
                </span>
              </Button>
            </Col>
            <Col xs={4} className="d-flex LCS">
              <Button
                className={`commentButton ${
                  post.commentChecked ? "commentChecked" : ""
                }`}
                onClick={() => handleCommentClick(post._id)}
              >
                <FontAwesomeIcon
                  icon={faComment}
                  className={`commentIconAction ${
                    post.commentChecked ? "commentChecked" : ""
                  }`}
                />
                <span
                  className={`ml-6 commentButtonText ${
                    post.commentChecked ? "commentChecked" : ""
                  }`}
                >
                  Comment
                </span>
              </Button>
            </Col>
            <Col xs={4} className="d-flex LCS">
              <Button
                className={`saveButton ${
                  post.saveChecked ? "saveChecked" : ""
                }`}
                onClick={() => handleSaveClick(post._id)}
              >
                <FontAwesomeIcon
                  icon={post.saveChecked ? solidStar : outlineStar}
                  className={`saveIconAction ${
                    post.saveChecked ? "saveChecked" : ""
                  }`}
                />
                <span
                  className={`ml-6 saveButtonText ${
                    post.saveChecked ? "saveChecked" : ""
                  }`}
                >
                  Save
                </span>
              </Button>
            </Col>
          </Row>
        </Container>
      ))}
      <CommentsModal
        selectedPost={selectedPost}
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </div>
  );
}

export default PostsList;
