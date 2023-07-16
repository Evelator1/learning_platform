import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import welcomeStart from "../../assets/background-pics/sunset.jpg";
import "../../App.css";
import WelcomePageButton from "./CreateAccountButton";

function WelcomePage() {
  return (
    <div className="container-fluid p-0 m-0 welcome-container vh-100">
      <div className="row m-0 p-0">
        <div className="col-12 m-0 p-0 d-flex flex-column justify-content-center align-items-center">
          <img
            src={welcomeStart}
            alt="Person in front of Sunset"
            className="img-fluid"
            style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          />
          <div className="overlay-text position-absolute text-center">
            <h1 className="text-white">Welcome to GradBook</h1>
            <WelcomePageButton content={"Sign up for free"} color={"red"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
