import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useParams, NavLink, Link, Navigate, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import ProfileInfoOffcanvas from "../settings/ProfileInfoOffcanvas";
import Avatar from "./Avatar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import WelcomePageButton from "../LandingPage/WelcomePageButton";
import WaveNavbar from "./WaveNavbar";
import { cols } from "../../colorSchema";
import "../../App.css";

export default function NavbarBS() {
  const { user, isLoading, logout } = useContext(AuthContext);
  
  return (
    <>
      <Navbar
        style={{
          zIndex: "2",
          height: "5rem",
          backgroundColor: cols.black,
          position: "fixed",
          top: "0",
          width: "100%",
        }}
      >
        <Container fluid>
          <Navbar.Brand
            href="/"
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontStyle: "italic",
            }}
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

          {!user && (
            <div className="d-flex flex-row align-items-center mx-5">
              <div className="d-flex gap-3">
                <WelcomePageButton
                  content={"Login"}
                  color={cols.lila}
                  linkTo={`/login`}
                  border-color={cols.lila}
                />
              </div>
            </div>
          )}

          {user && (
            <div className="d-flex flex-row align-items-center">
              <div className="d-flex gap-3">
                <WelcomePageButton
                  content={"Settings"}
                  color={cols.lila}
                  linkTo={`${user.username}/settings`}
                  border-color={cols.lila}
                />
                <WelcomePageButton
                  content={"Logout"}
                  color={cols.lila}
                  linkTo={"/logout"}
                  border-color={cols.lila}
                />
              </div>

              <Nav.Item
                className="d-flex align-items-center"
                style={{
                  width: { sm: "4rem", md: "13rem", alignItems: "end" },
                }}
              >
                <NavLink
                  to={`../${user.username}`}
                  className="d-flex align-items-center mx-4"
                  style={{
                    color: cols.white,
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  <Avatar user={user} />
                  <span className="ps-2 d-none d-xl-block">
                    {user.username}
                  </span>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </Nav.Item>
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
}
