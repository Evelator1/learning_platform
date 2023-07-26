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
            <h4 className="col-sm-6 text-white text-center font-mont fw-light lh-base py-4">
              We are a platform for connecting with other coding bootcamp
              graduates, preparing for interviews and practicing what you have
              learned. <br></br>Join our community of likeminded coders who are
              embarking on this exciting journey into the tech world!
            </h4>
            <WelcomePageButton content={"Discover more"} color={"#d2bbee"} />
          </div>
          <div className="row h-50 d-flex align-items-center justify-content-center">
            <div className="col-12 col-lg-6 h-50 d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-white font-mont fw-bold pl-5">
                What can I do here?
              </h2>
            </div>
            <div className="col-12 col-lg-6 h-50 d-flex flex-column align-items-center justify-content-center">
              <Undraw1 style={{ width: "60%", height: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
