import React, { useState, useEffect } from "react";
import { axiosClient } from "../../../../axiosClient";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CreateReview from "./CreateReview";
import ReviewList from "./ReviewList";

export default function ShareReviewsTab() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axiosClient
      .get("/reviews")
      .then((response) => {
        setReviews(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Row className="mx-lg-4 col-lg-10 col-md-10 col-sm-12">
        <Col>
          <CreateReview />
          <ReviewList reviews={reviews} />
        </Col>
      </Row>
    </Container>
  );
}
