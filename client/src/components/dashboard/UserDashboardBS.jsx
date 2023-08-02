import { useContext } from "react";
import { useParams, NavLink, Link, Navigate, Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
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
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        style={{ backgroundColor: cols.black }}
      >
        <Row
          style={{
            position: "relative",
            top: "3rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: cols.black,
          }}
        >
          <Col
            xs={2}
            style={{
              height: "100vh",
              zIndex: 200,
              backgroundColor: cols.black,
            }}
          >
            <Nav
              className="flex-column"
              style={{
                flexDirection: "column",
                height: "100vh",
                backgroundColor: cols.lightBlack,
                position: "fixed",
                top: 0,
                padding: "1rem 1rem 1rem 1rem ",
                display: "flex",
              }}
            >
              <Navbar.Brand
                href="/"
                style={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontStyle: "italic",
                }}
                className="font-plex ps-2 pb-5"
              >
                <div>
                  <span
                    style={{
                      color: cols.lila,
                      fontWeight: "600",
                      fontSize: "2rem",
                      letterSpacing: "1px",
                    }}
                  >
                    <span
                      style={{
                        color: cols.yellow,
                        fontWeight: "600",
                        fontSize: "1.5rem",
                      }}
                    >
                      {"<"}
                    </span>
                    Road
                    <span
                      style={{
                        color: cols.yellow,
                        fontWeight: "600",
                        fontSize: "1.5rem",
                      }}
                    >
                      {" />"}
                    </span>
                  </span>
                </div>
              </Navbar.Brand>

              <div className="d-flex-column align-items-center">
                {userMenuOptions.map((option) => {
                  return (
                    <Nav.Item
                      key={option.name}
                      className="d-flex-column justify-content-center pb-3 pt-2"
                    >
                      <NavLink
                        to={`${option.linkTo}`}
                        className="d-flex"
                        style={{
                          color: cols.white,
                          textDecoration: "none",
                          fontSize: "1.2rem",
                        }}
                      >
                        <option.iconOutlined
                          style={{ fontSize: "1.6rem", marginRight: "1rem" }}
                        />
                        <span className="d-none d-xl-block">{option.name}</span>
                      </NavLink>
                    </Nav.Item>
                  );
                })}
              </div>
            </Nav>
          </Col>

          <Col
            xs={10}
            style={{
              backgroundColor: cols.black,
              overflow: "scroll",
              paddingBottom: "10rem",
              paddingTop: "2rem",
            }}
          >
            <Tab.Content>
              <Outlet />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}
