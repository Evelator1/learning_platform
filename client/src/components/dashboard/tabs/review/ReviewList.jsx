import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import Avatar from "../../../Navbar-Components/Avatar";
import { Button, Image, Container, Row, Col } from "react-bootstrap";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export default function ReviewList({ reviews }) {
  const { user } = useContext(AuthContext);

  function formatDate(date) {
    const now = new Date();
    const reviewDate = new Date(date);

    const diffInMilliseconds = now - reviewDate;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays === 0) {
      return "today";
    } else if (diffInDays === 1) {
      return "yesterday";
    } else if (diffInDays <= 10) {
      return `${diffInDays} days ago`;
    } else {
      // Format the review date in your desired way if older than 10 days
      const options = { year: "numeric", month: "long", day: "numeric" };
      return reviewDate.toLocaleDateString(undefined, options);
    }
  }

  return (
    <div className="d-flex-column justify-content-center mx-5">
      {reviews &&
        reviews.map((review) => {
          return (
            <Card key={review._id} style={{ width: "98%" }}>
              <Card.Header as="h5" className="w-100">
                <Row>
                  <Col className="col-lg-1 col-xs-2">
                    <Avatar user={review.author} />
                  </Col>
                  <Col className="col-lg-11 col-xs-10">
                    {review.author.username}
                    <p className="fs-6">{formatDate(review.createdAt)}</p>
                  </Col>
                </Row>

                <Card.Text className="fs-6 "> </Card.Text>
              </Card.Header>

              <Card.Body className="w-100 d-flex-column">
                <Container>

                <Card.Title as="h3"> {review.title}</Card.Title>
                <Card.Text as="p">{review.content}</Card.Text>

                </Container>
                <Container
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                  }}
                >
                  <ThumbUpOffAltIcon />
                  <ChatBubbleOutlineIcon />
                  <BookmarkBorderIcon />
                </Container>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}