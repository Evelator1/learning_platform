import { useContext } from "react";
import { useParams, NavLink, Link, Navigate, Outlet } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Avatar from "../Navbar-Components/Avatar";
import { userMenuOptions } from "../../userMenuOptions";
import { cols } from "../../colorSchema";
import { AuthContext } from "../../context/AuthProvider.jsx";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function UserDashboardBS() {
  const params = useParams();
  const { isLoading, user } = useContext(AuthContext);

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100vw",
            paddingTop:"3rem",
            backgroundColor:cols.yellow
          }}
        >
          <Col xs={2} style={{ height: "100vh", zIndex: 1 }}>
            <Nav
              className="flex-column"
              style={{
                flexDirection:"column",
                height:"100vh",
                backgroundColor: cols.black,
                position: "fixed",
                top: "0",
                padding: "5rem 2rem 2rem 2rem ",
                display: " flex",
                justifyContent: "space-between",
                overflow:"scroll"
              }}
            >
              <div>
                {userMenuOptions.map((option) => {
                  return (
                    <Nav.Item key={option.name} className="d-flex-column pt-4">
                      <NavLink
                        to={`${option.linkTo}`}
                        className="d-flex"
                        style={{
                          color: cols.white,
                          textDecoration: "none",
                          fontSize: "1.2rem",
                        }}
                      >
                        <option.iconOutlined style={{ fontSize: "1.6rem" }} />
                        <span className="d-none d-xl-block">
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
                  width: { sm: "4rem", md: "13rem", alignItems: "end" },
                }}
              >
                <NavLink
                  to={`../${user.username}`}
                  className="d-flex fs-4"
                  style={{ color: cols.white, textDecoration: "none" }}
                >
                  <Avatar />
                  <span className="d-none d-xl-block">  {user.username}</span>

                 
                </NavLink>

                <NavLink
                  to={`settings/account`}
                  className="d-flex  fs-4"
                  style={{ color: cols.white, textDecoration: "none" }}
                >
                  <SettingsIcon />
                  <span className="d-none d-xl-block"> settings</span>
                </NavLink>

                <NavLink
                  to={"/logout"}
                  className="d-flex  fs-4"
                  style={{ color: cols.white, textDecoration: "none" }}
                >
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                  <LogoutIcon />
                  <span className="d-none d-xl-block"> Logout</span>
                </NavLink>
              </Nav.Item>
            </Nav>
          </Col>

          <Col xs={10}>
            {/* <div>something</div> */}
            <Tab.Content>
              <Outlet />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}
