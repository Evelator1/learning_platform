import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
// import { cardsMenu } from "../../../src/cardsMenu";
import WelcomePageButton from "./CreateAccountButton";
import Card from "react-bootstrap/Card";
import { ReactComponent as Windows } from "../../assets/pics/windows.svg";

function CardsPage() {
  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center bg-black2">
        <div className="row mh-25 pb-0 mb-0 h-md-60 h-25">
          <div className="col-md-6 h-25 d-flex align-items-center justify-content-around">
            <h2 className="text-white font-mont fw-bold pl-5">
              What can I do here?
            </h2>
          </div>
          <div className="col-md-6 h-25 d-flex align-items-center justify-content-around">
            <Windows className="w-50 vh-25" />
          </div>
        </div>
        <div className="row pb-5 pt-0 mt-0">
          <div className="col pb-3 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-purple font-plex d-flex align-items-center justify-content-center">
                  <h4>Enhance my learning</h4>
                </div>
                <div className="flip-card-back bg-black2 border p-3 font-plex d-flex flex-column align-items-center justify-content-center">
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
                  <h4>Master Coding Job Interviews</h4>
                </div>
                <div className="flip-card-back bg-purple font-plex d-flex flex-column align-items-center justify-content-center">
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
                  <h4>Network with Other Graduates</h4>
                </div>
                <div className="flip-card-back bg-purple font-plex d-flex flex-column align-items-center justify-content-center">
                  Connect with fellow coders and chat with them in real-time.
                </div>
              </div>
            </div>
          </div>
          <div className="col pb-3 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-purple font-plex d-flex align-items-center justify-content-center">
                  <h4>Explore Job Offers</h4>
                </div>
                <div className="flip-card-back bg-purple font-plex d-flex flex-column align-items-center justify-content-center">
                  An integrated job board let's you discover job opportunities.
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
