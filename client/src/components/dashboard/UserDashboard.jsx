import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { axiosClient } from "../../axiosClient";

import CreatePostMask from "./CreatePostMask";
import PostsList from "../communityQuestions/PostsList";
import UserBadge from "./UserBadge";
import LeftMenu from "./LeftMenu";
import { cols } from "../../colorSchema";


export default function UserDashboard({ userInfo, setUserInfo }) {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axiosClient
      // .get(`http://localhost:3010/users/${params.username}`) //user route
      .get(`http://localhost:3010/auth/profile`) //auth route
      .then((response) => {
        setUserInfo(response.data);
        if (response.data.username === params.username) {
          console.log("match!");
        } else {
          navigate(`/login`);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div style={{ paddingTop: "8rem",zIndex:"9999"  }} className="mt-0 mt-md-3 mt-lg-5 container-fluid  vw-100">
        {userInfo && (
          <Container  fluid style={{ background: cols.white, overflowY: "auto", width:"100vw", margin:"0", }}>
            <Row className="vw-100 d-flex justify-content-around mx-3" >
             
              <Col md={2} sm={0}   xs={0} className="p-0">
                <LeftMenu userInfo={userInfo} />
              </Col>


              <Col md={7} sm={12}  xs={12}  className="p-0 d-flex flex-column justify-content-center align-items-center"
              >
                <CreatePostMask userInfo ={userInfo} />
                <PostsList userInfo ={userInfo} />
              </Col>

              <Col md={3} sm={0}  xs={0} className="p-0">
                <UserBadge userInfo={userInfo} />
              </Col>

            </Row>
          </Container>
        )}
      </div>
    </>
  );
}
