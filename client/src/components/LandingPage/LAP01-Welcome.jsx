import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import { undraw1 } from "../../assets/pics/undraw_1.svg";
import "../../App.css";
import WelcomePageButton from "./WelcomePageButton";

import { ReactComponent as Undraw1 } from "../../assets/pics/undraw_1.svg";
import { ReactComponent as Undraw3 } from "../../assets/pics/undraw3.svg";
import { ReactComponent as Wave } from "../../assets/background-pics/wave3.svg";

import { cols } from "../../colorSchema";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function WelcomePage() {
  const { user } = useContext(AuthContext);

  return (
    <>

      <div className="container-fluid h-100 pt-5 me-0 bg-black2 mt-5 pe-0">
        <div className="row d-flex flex-row align-items-center justify-content-center text-center mt-5 ">
          <div className="col-lg-7 text-white font-mont  d-flex flex-column justify-content-start align-items-center gap-3">
            <h1 className="text-white font-mont fw-bold display-5 mb-3">

              Welcome to CodeRoad
            </h1>
            <p className="fw-light lh-base welcome-text w-75">
              We are a platform for connecting with other coding bootcamp
              graduates, preparing for interviews and practicing what you have
              learned. <br></br>Join our community of likeminded coders who are
              embarking on this exciting journey into the tech world!
            </p>
            <div className="d-flex gap-3">
              <WelcomePageButton
                content={"Discover"}
                color={cols.lila}
                linkTo={"/"}
                border-color={cols.lila}
              />
              <WelcomePageButton
                content={"Sign up"}
                color={cols.lila}
                linkTo={"/signup"}
                border-color={cols.lila}
              />
            </div>
          </div>

          <div className="col-lg-5 h-50 p-0 m-0 overlow-hidden d-flex flex-column align-items-center justify-content-center text-center">
            <Undraw3 style={{ width: "70%" }} />
          </div>
          <div className="row p-0 m-0">
            <Wave style={{ width: "100%", padding: "0" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
