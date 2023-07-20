import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { axiosClient } from "../../axiosClient";

import CreatePostMask from "./CreatePostMask";
import PostsList from "../InterviewQuestions/PostsList";
import UserBadge from "./UserBadge";
import LeftMenu from "./LeftMenu";
import { cols } from "../../colorSchema";
export default function UserDashboard({ userInfo, setUserInfo }) {
  const params = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   axiosClient
  //     .get(`http://localhost:3010/users/${params.username}`) //user route
  //   //  .get(`http://localhost:3010/auth/profile`) //auth route
  //     .then((response) => {
  //       setUserInfo(response.data);
  //       if (response.data.username === params.username) {
  //         console.log("match!");
  //       } else {
  //         navigate(`/login`);
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <>
      <div style={{ paddingTop: "8rem",zIndex:"9999"  }} className=" mt-0 mt-md-3 mt-lg-5 container-fluid  vw-100">
        {userInfo && (
          <Container style={{ background: cols.white, overflowY: scroll }}>
            <Row className="vw-75 d-flex justify-content-between">
              <Col md={1} xs={0}className="p-0">
                <LeftMenu userInfo={userInfo} />
              </Col>

              <Col  md={8} xs={12}  className="p-0 d-flex flex-column justify-content-center align-items-center"
              >
                <CreatePostMask />
                <PostsList />
              </Col>

              <Col md={3} className="p-0">
                <UserBadge userInfo={userInfo} />
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </>
  );
}