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
            style={{ fontFamily: "IBM Plex Mono italic", fontStyle: "italic" }}
          >
            <div>
              <div
                style={{
                  backgroundColor: cols.yellow,
                  height: "0.2rem",
                  position: "relative",
                  top: "3.1rem",
                }}
              ></div>
              <span
                style={{
                  color: cols.lila,
                  fontWeight: "700",
                  fontSize: "2.5rem",
                  letterSpacing: "2px",
                }}
              >
                CodeRoad{" "}
              </span>
            </div>
          </Navbar.Brand>

          {/* <Avatar user={user} /> */}
          {/* <ProfileInfoOffcanvas
            user={user}
            setShowInfo={setShowInfo}
            showInfo={showInfo}
          /> */}
          {user && (
            <div className="d-flex flex-row align-items-center">
              <NavLink
                to={`${user.username}/settings`}
                className="d-flex pe-5"
                style={{
                  color: cols.white,
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                <span className="d-none d-xl-block">Settings</span>
              </NavLink>

              <NavLink
                onClick={logout}
                className="d-flex"
                style={{
                  color: cols.white,
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                <span className="d-none d-xl-block pe-5">Logout</span>
              </NavLink>

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
                    fontSize: "1.2rem",
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