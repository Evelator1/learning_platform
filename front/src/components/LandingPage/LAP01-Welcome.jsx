import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import welcomeStart from "../../assets/background-pics/sunset.jpg";
// import undraw1 from "../../assets/pics/undraw1.svg";
import "../../App.css";
import WelcomePageButton from "./CreateAccountButton";
import Navbar from "../LandingPage/Navbar";
import { ReactComponent as Undraw1 } from "../../assets/pics/undraw_1.svg";

function WelcomePage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0 m-0 bg-black2">
        <div className="row m-0 p-0 vh-50 vh-sm-100 pt-5">
          <div className="col-md-6 col-12 order-lg-last order-md-last m-0 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-white text-center font-mont fw-bold">
              Welcome to GradBook
            </h1>
            <WelcomePageButton content={"Discover more"} color={"blue"} />
          </div>
          <div className="col-md-6 p-0 vh-100 col-12 d-flex flex-column align-items-center justify-content-start">
            <Undraw1 style={{ width: "80vw" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
