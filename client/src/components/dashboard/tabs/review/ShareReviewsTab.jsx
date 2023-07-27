import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CreateReview from "./CreateReview"
import ReviewList from "./ReviewList"

export default function ShareReviewsTab() {
  return (
    <Container>
    <Row>
      <Col>
        <CreateReview />
        <ReviewList />
      </Col>
    </Row>
  </Container>
  );
}
