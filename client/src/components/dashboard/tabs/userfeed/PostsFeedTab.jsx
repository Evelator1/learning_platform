import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PostsList from "../../../communityQuestions/PostsList";
import CreatePostMask from "./CreatePostMask";
import { cols } from "../../../../colorSchema";
export default function PostsFeedTab() {
  return (
    <Container style={{ backgroundColor: cols.black }}>
      <Row className="mx-lg-5 col-lg-8 col-md-10 col-sm-12">
        <Col>
          <CreatePostMask />
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
}
