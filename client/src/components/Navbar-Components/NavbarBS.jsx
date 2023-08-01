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

import WaveNavbar from "./WaveNavbar";
import { cols } from "../../colorSchema";
import "../../App.css";

export default function NavbarBS() {
  const { user, isLoading, logout } = useContext(AuthContext);
  console.log(user);
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
            className="font-plex"
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

          {user && (
            <div className="d-flex flex-row align-items-center">

              <Button
                to={`${user.username}/settings`}

                className="d-flex pe-5"
                style={{
                  color: cols.white,
                  textDecoration: "none",
                  fontSize: "1rem",
                  width: "5.8rem",
                  backgroundColor: cols.lila,
                  borderColor: cols.lila,
                  marginRight: "1.5rem",
                }}
              >
                <span className="d-none d-xl-block">Settings</span>
              </Button>

              <Button
                onClick={logout}
                className="d-flex"
                style={{
                  color: cols.white,
                  textDecoration: "none",
                  fontSize: "1rem",
                  width: "5rem",
                  backgroundColor: cols.lila,
                  borderColor: cols.lila,
                  marginRight: "3.5rem",
                }}
              >
                <span className="d-none d-xl-block pe-5">Logout</span>
              </Button>

              <Nav.Item
                className="d-flex align-items-center"
                style={{
                  width: { sm: "4rem", md: "13rem", alignItems: "end" },
                }}
              >
                <NavLink
                  to={`../${user.username}`}
                  className="d-flex align-items-center"
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
