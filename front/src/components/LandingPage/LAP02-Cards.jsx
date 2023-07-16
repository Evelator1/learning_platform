import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import road from "../../assets/background-pics/road.jpg";
import "../../App.css";
import WelcomePageButton from "./CreateAccountButton";

function CardsPage() {
  return (
    <div className="container-fluid p-0 m-0 welcome-container vh-100">
      <div className="row m-0 p-0">
        <div className="col-12 m-0 p-0 d-flex flex-column justify-content-center align-items-center">
          <img
            src={road}
            alt="long road in hills"
            className="img-fluid"
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
            }}
          />
          <div className="container position-absolute ">
            <div className="row text-center row-cols-lg-4 row-cols-sm-2">
              <div className="col">
                <div className="card bg-green">
                  <div className="card-body">Enhance what you have learned</div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-yellow">
                  <div className="card-body">Master Coding Job Interviews</div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-pink">
                  <div className="card-body">Network with Other Graduates</div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-lightblue">
                  <div className="card-body">Explore Job Offers</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-center text-center">
                <WelcomePageButton
                  content={"Sign up for free"}
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

export default CardsPage;
