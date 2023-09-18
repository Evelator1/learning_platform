import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

import { Button, Card, Col, Container } from "react-bootstrap";

export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <Container className="col-7">
      <Card style={{ width: "100%", height: "100%", top: "0" }}>
        <Card.Header className="w-100 d-md-flex">
          <Col className="col-md-7 col-12">
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>Bootcamp: {user.bootcamp} </Card.Text>

          </Col>
          {/* <Col className="col-md-3">
            <Button variant="primary">Add as Friend</Button>
          </Col> */}
        </Card.Header>
        <Card.Body>
          <Card.Img
            variant="top"
            src={user.profilePicture}
            style={{ aspectRatio: "1/1", objectFit: "cover", width: "50%" }}
          />

          <Card.Text>{user.personalInfo}</Card.Text>
          <Card.Text>City: {user.city}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
