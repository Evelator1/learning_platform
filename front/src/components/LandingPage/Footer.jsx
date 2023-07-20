import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function Footer() {
  return (
    <div className="container-fluid vw-100 bg-blue m-0 d-flex flex-row justify-content-between align-items-center">
      <a className="" href="#">
        GradBook
      </a>
      <div className="col d-flex flex-row gap-5">
        <ul className="list-unstyled d-flex flex-column">
          <li className="nav-item">Contact</li>
          <li className="nav-item">FAQ</li>
          <li className="nav-item">About Us</li>
        </ul>
        <ul className="list-unstyled d-flex flex-column">
          <li>Copyright Information</li>
          <li>Terms of Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
