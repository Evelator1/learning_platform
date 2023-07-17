import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import WelcomeUserPage from "./WelcomeUserPage";
import CreateMask from "./CreateMask";
import PostsList from "../InterviewQuestions/PostsList"
import UserBadge from "./UserBadge";
import LeftMenu from "./LeftMenu";
export default function UserDashboard() {
  const [wishWelcome, setWishWelcome] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const userId = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3010/users/${userId.id}`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // axiosClient.get("/auth/profile ")
  console.log(userInfo.userWishWelcome);

  return (
    <div className="container-fluid  m-0 p-0">
      {userInfo.userWishWelcome ? (
        <WelcomeUserPage userInfo={userInfo}  className="m-0 p-0 vh-100 d-flex col-12"/>
      ) : (
        <Container className="m-0 p-0 vh-100 d-flex col-12">
          <Row className="d-flex justify-content-center align-items-start">
            <Col md={2} className="p-0">
              <LeftMenu />
            </Col>
            <Col md={7} className="p-0">
              <CreateMask />
              <PostsList />
            </Col>
            <Col md={3} className="p-0">
              <UserBadge userInfo={userInfo}/>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
