import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./CommentList.css";
import { axiosClient } from "../../axiosClient";

function PostCommentsList({ post, newComment }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosClient.get(`/comments/posts/${post._id}`);
        setComments([...result.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [post._id, newComment]);

  return (
    <>
      {comments.map((comment) => (
        <Container key={comment._id}>
          <Row>
            <Col lg={2} md={2} sm={2} className="commenterImg">
              <Image
                src={comment.author.profilePicture}
                height={43}
                width={43}
                roundedCircle
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
              />
            </Col>
            <Col lg={10} md={10} sm={10} className="commentBlock">
              <Row className="commenterName">{comment.author.username}</Row>
              <Row style={{ overflowWrap: "anywhere" }}>{comment.content}</Row>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
}

export default PostCommentsList;
