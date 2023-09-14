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
import Favourite from "../dashboard/tabs/Favourite";
import { cols } from "../../colorSchema";
import "./PostsList.css";
import CommentsModal from "./CommentsModal";

import { json } from "react-router-dom";


function PostsList({ posts, setPosts, comments, setComments }) {
  const { user } = useContext(AuthContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  

  const handleLikeClick = async (postId) => {
    try {
      const response = await axiosClient.get(`/post/${postId}`);
      const currentLikers = response.data.likes;
      const flattenedLikers = currentLikers.flat();
    
      if (flattenedLikers.includes(user._id)) {
        await axiosClient.put(`/post/${postId}`, {
          $pull: { likes: user._id },
        });
      } else {
        await axiosClient.put(`/post/${postId}`, {
          $push: { likes: user._id },
        });
      }
    } catch (error) {
      console.error("Error while adding like:", error);
    }
  };


  const handleSaveClick = async (postId) => {
    try {
      const response = await axiosClient.get(`/post/${postId}`);
      const currentSavers = response.data.saves;
      if (Array.isArray(currentSavers)){
      const flattenedSavers = currentSavers.flat();
      if (flattenedSavers.includes(user._id)) {
        await axiosClient.put(`/post/${postId}`, {
          $pull: { saves: user._id },
        });
      } else {
        await axiosClient.put(`/post/${postId}`, {
          $push: { saves: user._id },
        });
      }
    } else {
      console.error("Error: response.data.saves is not an array.");
    }
      
    } catch (error) {
      console.error("Error while saving Post:", error);
    }
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
    <div style={{ width: "85%", marginLeft: "-2rem" }}>
      {posts.map((post) => (
        <Container key={post._id} className="postCard">
          <Row className="postHeader">
            <Col xs={10}>
              {post.author.profilePicture && (
                <Image
                  src={post.author.profilePicture}
                  alt="userImg"
                  className="userPicture"
                  roundedCircle
                />
              )}
              {post.author.username}
            </Col>
            <Col xs={2}>
              <Row className="postTime">{getFormattedDate(post.createdAt)}</Row>
            </Col>
            <Col xs={6}></Col>
          </Row>
          <Row>
            <blockquote className="blockquote mb-0 px-3">
              <p className="mt-3">{post.content}</p>
              {post.image && (
                <Image src={post.image} className="postImage"></Image>
              )}
            </blockquote>
          </Row>
          <Row className="likes_Comments_Counter">
            {post.likes.length > 0 ? (
              <Col className="likesCounter">
                <FontAwesomeIcon
                  icon={solidThumbsUp}
                  className="likeIconCounter"
                />{" "}
                {post.likes.length}
              </Col>
            ) : (
              ""
            )}
            <Col className="commentsTracker">
              {comments.filter((comment) => comment.onPost._id === post._id)
                .length > 0 ? (
                <a
                  href="/comments"
                  onClick={(event) => handleAllCommentsClick(post, event)}
                >
                  {
                    comments.filter(
                      (comment) => comment.onPost._id === post._id
                    ).length
                  }{" "}
                  Comments
                </a>
              ) : (
                ""
              )}
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
                  icon={
                    JSON.stringify(post.likes).includes(
                      JSON.stringify(user._id)
                    )
                      ? solidThumbsUp
                      : outlineThumbsUp
                  }
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
                href="/comments"
                onClick={(event) => handleAllCommentsClick(post, event)}
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
                  icon={
                     JSON.stringify(post.saves).includes(JSON.stringify(user._id))
                      ? solidStar
                      : outlineStar
                  }
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
