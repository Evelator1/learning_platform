import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import WelcomePageButton from "./CreateAccountButton";
import { ReactComponent as Wave } from "../../assets/background-pics/wave3.svg";
import { ReactComponent as Wave2 } from "../../assets/background-pics/wave2.svg";

function UserFeedbackPage() {
  return (
    <>
      <div className="row bg-black2" style={{ paddingTop: "50vh" }}>
        <Wave />
      </div>
      <div className="container-fluid p-0 m-0 welcome-container align-items-center d-flex flex-column justify-content-center min-vh-50 bg-purple">
        <div className="row">
          <div className="col-12 m-0 pb-5 align-items-center text-center ">
            <h2 className="text-white pt-5 font-mont fw-bold">User Feedback</h2>
          </div>
        </div>

        <div className="row pb-5 d-flex justify-content-center">
          <div className="col-8 col-md-4 col-sm-12 d-flex justify-content-center">
            <div className="circle border-radius bg-black2 d-flex flex-column m-3 aspect-ratio-1x1 justify-content-center align-items-center">
              <p className="m-0 text-white font-plex text-center">
                The best page I have ever seen!
              </p>
              <p className="text-small mt-2 mb-0 text-white font-mont">
                Anita, Berlin
              </p>
            </div>
          </div>
          <div className="col-8 col-md-4 col-sm-12 d-flex justify-content-center">
            <div className="circle bg-blue d-flex flex-column m-3 text-center text-white">
              <p className="m-0 text-white font-plex text-center">
                So great, I can't live without it anymore.
              </p>
              <p className="text-small mt-2 mb-0 font-mont">Peter, Amsterdam</p>
            </div>
          </div>
          <div className="col-8 col-md-4 col-sm-12 d-flex justify-content-center">
            <div className="circle bg-pink d-flex flex-column m-3 text-center p-2">
              <p className="m-0 text-white font-plex text-center">
                Awesome! Thank you Omar, Fred and Marie for creating this page!
              </p>
              <p className="text-small mt-2 mb-0 text-white font-mont">
                Louise, Berlin
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-black2">
        <Wave2 />
      </div>
    </>
  );
}

export default UserFeedbackPage;
