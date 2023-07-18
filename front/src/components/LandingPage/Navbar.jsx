import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function Navbar() {
  return (
    <nav className="navbar bg-black">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          GradBook
        </a>
        <div className="">
          <ul className="navbar-nav text-white d-flex flex-row">
            <li className="nav-item">Home</li>
            <li className="nav-item">Login</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
