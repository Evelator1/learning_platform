import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function ProfileInfoOffcanvas( {user, showInfo, setShowInfo}) {
  const handleCloseSettings = () => setShowInfo(false);

  return (
    <>

      <Offcanvas show={showInfo} onHide={handleCloseSettings} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{user && user.username}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
