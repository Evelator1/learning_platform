import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PostsList from "../../../InterviewQuestions/PostsList";
import CreatePostMask from "./CreatePostMask";
export default function PostsFeedTab() {
  return (
    <Container>
      <Row>
        <Col>
          <CreatePostMask />
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
}
