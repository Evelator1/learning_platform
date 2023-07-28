import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function Footer() {
  return (
    <div className="container-fluid position-absolute fixed vw-100 bg-purple font-mont m-0 d-flex flex-row justify-content-between align-items-center mb-4">
      <div className="col">
        <a className="text-decoration-none text-black" href="#">
          <h3>GradBook</h3>
        </a>
      </div>

      <div className="col d-flex flex-row justify-content-end align-items-center gap-5 pe-5">
        <ul className="list-unstyled d-flex flex-column m-0">
          <li className="nav-item">Contact</li>
          <li className="nav-item">FAQ</li>
          <li className="nav-item">About Us</li>
        </ul>
        <ul className="list-unstyled d-flex flex-column m-0">
          <li>Copyright</li>
          <li>Terms of Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
