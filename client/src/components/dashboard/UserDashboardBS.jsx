import { useParams, NavLink, Link,Navigate, Outlet } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { userMenuOptions } from "../../userMenuOptions";
import { cols } from "../../colorSchema";
import Avatar from "../Navbar-Components/Avatar";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";

export default function UserDashboardBS() {
  const params = useParams();
  const { isLoading, user } = useContext(AuthContext);

  // if (isLoading) {
  //   return <p> loading...</p>;
  // }

  // if (!isLoading && !user) {
  //   return <Navigate to="/login" />;
  // }

  // if (!isLoading && user) {
  return  (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100vw",
          }}
        >
          <Col sm={4} style={{ height: "100vh", zIndex: 1 }}>
            <Nav
              className="flex-column h-100"
              style={{
                backgroundColor: cols.black,
                position: "fixed",
                top: "0",
                padding: "5rem 2rem 2rem 2rem ",
                display: " flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                {userMenuOptions.map((option) => {
                  return (
                    <Nav.Item key={option.name} className="d-flex-column pt-4">
                      <NavLink
                        to={`${option.linkTo}`}
                        className="d-flex gap-3"
                        style={{
                          color: cols.white,
                          textDecoration: "none",
                          fontSize: "1.2rem",
                        }}
                      >
                        <option.iconOutlined style={{ fontSize: "1.6rem" }} />
                        <span className="d-none d-md-block">
                          {" "}
                          {option.name}
                        </span>
                      </NavLink>
                    </Nav.Item>
                  );
                })}
              </div>

              {/* USER PROFILE SETTINGS ___------______-------__________------____ */}
              <Nav.Item
                className="d-flex-column pt-3"
                style={{
                  width: { sm: "4rem", md: "13rem" },
                }}
              >
                <NavLink
                  to={"/"}
                  className="d-flex gap-3"
                  style={{ color: cols.white, textDecoration: "none" }}
                >
                  <Avatar />
                </NavLink>
                <NavLink
                  to={`settings/account`}
                  className="d-flex gap-3"
                  style={{ color: cols.white, textDecoration: "none" }}
                >
                  <span className="d-none d-md-block"> settings</span>
                </NavLink>
                <NavLink
                  to={"/logout"}
                  className="d-flex gap-3"
                  style={{ color: cols.white, textDecoration: "none" }}
                >
                  <span className="d-none d-md-block"> Logout</span>
                </NavLink>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={8}>
            {/* <div>something</div> */}
            <Tab.Content>
              <Outlet />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
  //}
}
