import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import WelcomePageButton from "./CreateAccountButton";

function UserFeedbackPage() {
  return (
    <div className="container-fluid p-0 m-0 welcome-container align-items-center d-flex flex-column justify-content-center vh-100 bg-pink">
      <div className="row">
        <div className="col-12 m-0 pb-5 align-items-center text-center">
          <h1>User Feedback</h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col m-0 p-0 d-flex flex-md-row flex-column gap-5 text-center align-items-center">
          <div className="col-md-4">
            <div className="circle bg-lightblue d-flex flex-column m-0">
              <p className="m-0">The best page I have ever seen!</p>
              <p className="text-small mt-2 mb-0">Anita, Berlin</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="circle bg-yellow d-flex flex-column m-0">
              <p className="m-0">So great, I can't live without it anymore.</p>
              <p className="text-small mt-2 mb-0">Peter, Amsterdam</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="circle bg-green d-flex flex-column m-0">
              <p className="m-0">
                Awesome! Thank you Omar, Fred and Marie for creating this page!
              </p>
              <p className="text-small mt-2 mb-0">Louise, Berlin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFeedbackPage;
