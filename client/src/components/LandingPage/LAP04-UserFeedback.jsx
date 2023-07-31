import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../App.css";
import { ReactComponent as Wave } from "../../assets/background-pics/wave3.svg";
import { ReactComponent as Wave2 } from "../../assets/background-pics/wave2.svg";
import Woman1 from "../../assets/pics/woman1.jpg";
import Woman2 from "../../assets/pics/woman2.jpg";
import Woman3 from "../../assets/pics/woman3.jpg";
import Woman4 from "../../assets/pics/woman4.jpg";
import Woman5 from "../../assets/pics/woman5.jpg";
import Man1 from "../../assets/pics/man1.jpg";
import Man2 from "../../assets/pics/man2.jpg";
import Man3 from "../../assets/pics/man3.jpg";
import Man4 from "../../assets/pics/man4.jpg";

function UserFeedbackPage() {
  return (
    <>
      <div className="row bg-black2">
        <Wave />
      </div>
      <div className="container-fluid p-0 m-0 welcome-container align-items-center d-flex flex-column justify-content-center min-vh-50 bg-purple">
        <div className="row">
          <div className="col-12 m-0 pb-5 align-items-center text-center ">
            <h2 className="display-4 pt-5 font-mont fw-bold">User Feedback</h2>
          </div>
        </div>

        <div className="row pb-5 d-flex justify-content-center">
          <div
            id="carouselExampleControls"
            class="carousel carousel-dark slide"
            // data-bs-interval="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="cards-wrapper">
                  <div className="card pt-3" style={{ width: "15rem" }}>
                    <img
                      src={Woman1}
                      alt="Blonde Woman"
                      className="card-img-top"
                      style={{ width: "10rem" }}
                    />
                    <div className="card-body">
                      <p className="card-text m-0 font-plex text-center">
                        The best page, I love it!
                      </p>
                      <p className="card-text text-small mt-2 mb-0 font-mont text-center">
                        Anita, Berlin
                      </p>
                    </div>
                  </div>
                  <div className="card pt-3" style={{ width: "15rem" }}>
                    <img
                      src={Man2}
                      alt="Man smiling"
                      className="card-img-top"
                      style={{ width: "10rem" }}
                    />
                    <div className="card-body">
                      <p className="card-text m-0 font-plex text-center">
                        It helped me feel less lost.
                      </p>
                      <p className="card-text text-small mt-2 mb-0 font-mont text-center">
                        John, Lisbon
                      </p>
                    </div>
                  </div>
                  <div className="card pt-3" style={{ width: "15rem" }}>
                    <img
                      src={Woman2}
                      alt="Brunette Woman"
                      className="card-img-top"
                      style={{ width: "9rem" }}
                    />
                    <div className="card-body">
                      <p className="card-text m-0 font-plex text-center">
                        I like the different features it offers.
                      </p>
                      <p className="card-text text-small mt-2 mb-0 font-mont text-center">
                        Luisa, Cologne
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="cards-wrapper">
                  <div className="card pt-3" style={{ width: "15rem" }}>
                    <img
                      src={Man1}
                      alt="Man with glasses"
                      className="card-img-top"
                      style={{ width: "10rem" }}
                    />
                    <div className="card-body">
                      <p className="card-text m-0 font-plex text-center">
                        You can even post photos to your feed!
                      </p>
                      <p className="card-text text-small mt-2 mb-0 font-mont text-center">
                        Carl, Vienna
                      </p>
                    </div>
                  </div>
                  <div className="card pt-3" style={{ width: "15rem" }}>
                    <img
                      src={Woman3}
                      alt="Brunette Woman"
                      className="card-img-top"
                      style={{ width: "10rem" }}
                    />
                    <div className="card-body">
                      <p className="card-text m-0 font-plex text-center">
                        Great features and so easy to navigate.
                      </p>
                      <p className="card-text text-small mt-2 mb-0 font-mont text-center">
                        Milla, London
                      </p>
                    </div>
                  </div>
                  <div className="card pt-3" style={{ width: "15rem" }}>
                    <img
                      src={Man3}
                      alt="Brunette man with glasses"
                      className="card-img-top"
                      style={{ width: "10rem" }}
                    />
                    <div className="card-body">
                      <p className="card-text m-0 font-plex text-center">
                        Love the learning card feature!
                      </p>
                      <p className="card-text text-small mt-2 mb-0 font-mont text-center">
                        Hans, Stockholm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="cards-wrapper">
                  <div className="card pt-3" style={{ width: "15rem" }}>
                    <img
                      src={Woman4}
                      alt="Brunette Woman in front of window"
                      className="card-img-top"
                      style={{ width: "10rem" }}
                    />
                    <div className="card-body">
                      <p className="card-text m-0 font-plex text-center">
                        I use it daily!
                      </p>
                      <p className="card-text text-small mt-2 mb-0 font-mont text-center">
                        Cynthia, Frankfurt
                      </p>
                    </div>
                  </div>
                  <div className="card pt-3" style={{ width: "15rem" }}>
                    <img
                      src={Man4}
                      alt="Blonde Woman"
                      className="card-img-top"
                      style={{ width: "10rem" }}
                    />
                    <div className="card-body">
                      <p className="card-text m-0 font-plex text-center">
                        Come join and enjoy the community.
                      </p>
                      <p className="card-text text-small mt-2 mb-0 font-mont text-center">
                        Phil, Berlin
                      </p>
                    </div>
                  </div>
                  <div className="card pt-3" style={{ width: "15rem" }}>
                    <img
                      src={Woman5}
                      alt="Brunette Woman in field"
                      className="card-img-top"
                      style={{ width: "10rem" }}
                    />
                    <div className="card-body">
                      <p className="card-text m-0 font-plex text-center">
                        I stay in touch with my friends here!
                      </p>
                      <p className="card-text text-small mt-2 mb-0 font-mont text-center">
                        Luisa, Cologne
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
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
