import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jungle from "../../assets/background-pics/jungle.jpg";
import "../../App.css";
import WelcomePageButton from "./CreateAccountButton";

function JunglePage() {
  return (
    <div className="container-fluid p-0 m-0 welcome-container vh-100">
      <div className="row m-0 p-0">
        <div className="col-12 m-0 p-0 d-flex flex-column justify-content-center align-items-center">
          <img
            src={jungle}
            alt="Many leaves of plants"
            className="img-fluid"
            style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          />
          <div className="container position-absolute ">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6 text-center">
                <div className="card p-5 p-md-5 bg-yellow jungle-opacity">
                  <div className="card-body">
                    <h1 className="mb-0 mb-md-0 ">
                      Welcome to the Coding Jungle
                    </h1>
                  </div>
                </div>
                <WelcomePageButton
                  content={"Try it for free"}
                  color={"blue"}
                  textColor={"yellow"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JunglePage;
