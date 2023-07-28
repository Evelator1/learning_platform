import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { userMenuOptions } from "../../userMenuOptions.js";
import { cols } from "../../colorSchema";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";


export default function WelcomeUserPage() {
  const { user, isLoading } = useContext(AuthContext);
  console.log(user,"the user being passed to the WELCOME, the userProfile data returned if cookie lives")

  const hoverStyle = {
    textDecoration: "none",
    color: cols.black,
    "&:hover": {
      color: cols.white,
      backgroundColor: cols.yellow,
      borderRadius: "2rem",
    },
  };


  return (
    user && (
      <div
        className=" position-fixed overflow-auto vh-100 overflow-scroll d-flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: cols.white,

        }}
      >
        <Container
          fluid
          className="w-100 py-0 d-flex-column justify-content-center align-items-center"
        >

        <h1 className="fs-3 mt-5 pt-5 text-center position-relative" style={{ color: cols.black }}>
          Welcome {user.username}!
        </h1>
          <Row className="justify-content-around">
            {userMenuOptions.map((option) => (
              <Col
                key={option.name}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="my-5"
              >
                <Card className="text-light color-dark" style={hoverStyle}>
                  <Link
                    to={`../../${user.username}/${option.linkTo}`}
                    className="text-decoration-none"
                  >
                    <Card.Body className="d-flex-column align-items-center justify-content-center">
                      <Card.Title
                        as="h5"
                        className="d-flex align-items-center justify-content-center gap-2 text-decoration-none"
                        style={{ color: cols.black, height: "12rem" }}
                      >
                        <option.iconOutlined />
                        <span>{option.name}</span>
                      </Card.Title>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  );
}
