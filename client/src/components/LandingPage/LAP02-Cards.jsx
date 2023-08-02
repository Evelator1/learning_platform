import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
// import { cardsMenu } from "../../../src/cardsMenu";
import WelcomePageButton from "./WelcomePageButton";
import Card from "react-bootstrap/Card";
import { ReactComponent as Windows } from "../../assets/pics/windows.svg";
import { ReactComponent as Wave2 } from "../../assets/background-pics/wave2.svg";

function CardsPage() {
  return (
    <>
      <div
        className="container-fluid pt-5 pb-5 d-flex flex-column align-items-center justify-content-center bg-purple"
        id="discover-more"
      >
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <h2 className="font-mont fw-bold card-section-h2 display-6">
              What can I do here?
            </h2>
            <h6 className="font-mont">
              Learn more about our amazing features here
            </h6>
          </div>
        </div>
        <div className="row pb-5 pt-5 mt-0">
          <div className="col pb-3 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front text-white bg-black2 font-plex d-flex align-items-center justify-content-center">
                  <h4>Network with other graduates</h4>
                </div>
                <div className="flip-card-back fs-5 bg-black2  border border-black p-3 font-plex d-flex flex-column align-items-center justify-content-center">
                  See what others have posted and create your own feed with news
                  and articles.
                </div>
              </div>
            </div>
          </div>
          <div className="col pb-3 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front text-white bg-black2 font-plex d-flex align-items-center justify-content-center">
                  <h4>Explore job offers</h4>
                </div>
                <div className="flip-card-back fs-5 bg-black2 border border-purple p-3 font-plex d-flex flex-column align-items-center justify-content-center">
                  Our integrated job board lets you discover the latest job
                  opportunities.
                </div>
              </div>
            </div>
          </div>
          <div className="col pb-3 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front text-white bg-black2 font-plex d-flex align-items-center justify-content-center">
                  <h4>Master coding job interviews</h4>
                </div>
                <div className="flip-card-back fs-5 bg-black2 border border-purple p-3 font-plex d-flex flex-column align-items-center justify-content-center">
                  Browse through interview questions other users have posted and
                  let them know what you have been asked in your interview.
                </div>
              </div>
            </div>
          </div>
          <div className="col pb-3 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front text-white bg-black2 font-plex d-flex align-items-center justify-content-center">
                  <h4>Enhance your learning</h4>
                </div>
                <div className="flip-card-back fs-5 bg-black2 border border-purple p-3 font-plex d-flex flex-column align-items-center justify-content-center">
                  Practice for your next interview or freshen up your coding
                  knowledge with customized learning cards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsPage;
