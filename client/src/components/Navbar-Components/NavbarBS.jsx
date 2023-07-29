import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";
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

const {user, isLoading}= useContext(AuthContext)



  return (
    <>
      <Navbar
        style={{ zIndex: "2", height: "4rem", backgroundColor: cols.black, position:"fixed", top:"0", width:"100%" }}
      >
        <Container fluid >
          <Navbar.Brand
            href="/"
            style={{ fontFamily: "IBM Plex Mono italic", fontStyle: "italic" }}
          >
            
            <div
              style={{
                backgroundColor: cols.yellow,
                height: "0.2rem",
                position: "relative",
                top: "2.2rem",
              }}
            ></div>
            <span
              style={{
                color: cols.lila,
                fontWeight: "700",
                fontSize: "1.8rem",
                letterSpacing: "2px",
              }}
            >
CodeRoad            </span>
          </Navbar.Brand>

            {/* <Avatar user={user} /> */}
          {/* <ProfileInfoOffcanvas
            user={user}
            setShowInfo={setShowInfo}
            showInfo={showInfo}
          /> */}
        </Container>


      </Navbar>
    </>
  );
}
