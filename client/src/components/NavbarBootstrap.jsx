import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function Navbar() {
  return (
    <nav className="navbar bg-black2 font-mont">
      <div className="container-fluid">
        <a className="text-decoration-none text-white" href="#">
          <h3>GradBook</h3>
        </a>
        <div className="d-flex flex-row justify-content-between align-items-center gap-5">
          <button type="button" className="btn btn-primary">
            Login
          </button>
          <ul className="navbar-nav text-white gap-5 d-flex flex-row align-items-center">
            <li className="nav-item">Home</li>
            <li className="nav-item">FAQ</li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;