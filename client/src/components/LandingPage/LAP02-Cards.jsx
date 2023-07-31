import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
// import { cardsMenu } from "../../../src/cardsMenu";
import WelcomePageButton from "./WelcomePageButton";
import Card from "react-bootstrap/Card";
import { ReactComponent as Windows } from "../../assets/pics/windows.svg";

function CardsPage() {
  return (
    <>
      <div className="container-fluid pt-5 d-flex flex-column align-items-center justify-content-center bg-black2">
        <div className="row d-flex align-items-center justify-content-center p-md-5">
          <div className="col-12">
            <h2 className="text-white font-mont fw-bold p-md-5 pb-md-0 card-section-h2 display-6">
              What can I do here?
            </h2>
          </div>
        </div>
        <div className="row pb-5 pt-5 mt-0">
          <div className="col pb-3 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-purple font-plex d-flex align-items-center justify-content-center">
                  <h4>Enhance your learning</h4>
                </div>
                <div className="flip-card-back bg-black2 border border-purple p-3 font-plex d-flex flex-column align-items-center justify-content-center">
                  With our custom made learning cards you can easily practice
                  for your next interview or freshen up your coding knowledge.
                </div>
              </div>
            </div>
          </div>
          <div className="col pb-3 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-purple font-plex d-flex align-items-center justify-content-center">
                  <h4>Master coding job interviews</h4>
                </div>
                <div className="flip-card-back bg-black2 border border-purple p-3 font-plex d-flex flex-column align-items-center justify-content-center">
                  Browse through interview questions other users have posted and
                  let others know what you have been asked.
                </div>
              </div>
            </div>
          </div>
          <div className="col pb-3 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-purple font-plex d-flex align-items-center justify-content-center">
                  <h4>Network with other graduates</h4>
                </div>
                <div className="flip-card-back bg-black2 border border-purple p-3 font-plex d-flex flex-column align-items-center justify-content-center">
                  See what others have posted and create your own feed with news
                  and articles.
                </div>
              </div>
            </div>
          </div>
          <div className="col pb-3 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-purple font-plex d-flex align-items-center justify-content-center">
                  <h4>Explore job offers</h4>
                </div>
                <div className="flip-card-back bg-black2 border border-purple p-3 font-plex d-flex flex-column align-items-center justify-content-center">
                  An integrated job board lets you discover the latest job
                  opportunities.
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
