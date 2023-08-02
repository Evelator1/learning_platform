import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { cols } from "../../colorSchema";
import { ReactComponent as Undraw4 } from "../../assets/pics/Undraw4.svg";

function Footer() {
  return (
    <div className="container-fluid position-absolute fixed vw-100 h-25 bg-purple font-mont m-0 d-flex flex-row justify-content-between align-items-center mb-4">
      <div className="col">
        <a className="text-decoration-none" href="#">
          <div
            href="/"
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontStyle: "italic",
            }}
            className="font-plex ps-2"
          >
            <div>
              <span
                style={{
                  color: cols.black,
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
          </div>
        </a>
      </div>

      <div className="col d-flex flex-column justify-content-center align-items-end pe-5">
        <div>
          <p className="fw-bold">Company</p>
          <ul className="list-unstyled d-flex flex-column m-0">
            <li className="nav-item">About Us</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">News</li>
          </ul>
        </div>
      </div>
      <div className="col d-flex flex-column justify-content-center align-items-center pe-5">
        <div>
          <p className="fw-bold">Services</p>
          <ul className="list-unstyled d-flex flex-column m-0">
            <li className="nav-item">Legal</li>
            <li className="nav-item">Terms of use</li>
            <li className="nav-item">Cookie Policy</li>
          </ul>
        </div>
      </div>
      <div className="col d-flex flex-column justify-content-center align-items-start">
        <div>
          <p className="fw-bold">Users</p>
          <ul className="list-unstyled d-flex flex-column m-0">
            <li className="nav-item">Register</li>
            <li className="nav-item">Login</li>
            <li className="nav-item">FAQ</li>
          </ul>
        </div>
      </div>
      <Undraw4 style={{ width: "15%", height: "60%" }} />
    </div>
  );
}

export default Footer;
