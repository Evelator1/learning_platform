import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import { undraw1 } from "../../assets/pics/undraw_1.svg";
import "../../App.css";
import WelcomePageButton from "./CreateAccountButton";
import Navbar from "../LandingPage/Navbar";
import { ReactComponent as Undraw1 } from "../../assets/pics/undraw_1.svg";

function WelcomePage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid h-100 p-0 m-0 bg-black2">
        <div className="row m-0 p-0">
          <div className="col-12 m-0 d-flex flex-column align-items-center justify-content-center pt-5 pb-3">
            <h1 className="text-white text-center font-mont fw-bold display-1">
              Welcome to CodeRoad
            </h1>
          </div>
        </div>
        <div className="row d-flex flex-row align-items-center justify-content-center text-center ps-md-5">
          <div className="col-12 col-lg-7 text-white text-center font-mont ps-md-5">
            <h4 className="fw-light lh-base welcome-text ps-5">
              We are a platform for connecting with other coding bootcamp
              graduates, preparing for interviews and practicing what you have
              learned. <br></br>Join our community of likeminded coders who are
              embarking on this exciting journey into the tech world!
            </h4>
          </div>

          <div className="col-lg-5 h-50 d-flex flex-column align-items-center justify-content-center text-center pt-5 pe-5 ps-5 ps-md-0">
            <Undraw1 style={{ width: "80%", height: "50%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center p-5">
            <WelcomePageButton content={"Discover more"} color={"#d2bbee"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
