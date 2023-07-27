import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Fred from "../../assets/pics/Fred.jpg";
import Marie from "../../assets/pics/Marie_Foto_Kopie.jpg";
import Omar from "../../assets/pics/Omar.jpg";
import Footer from "../LandingPage/Footer";

function AboutUsPage() {
  return (
    // <div className="container-fluid p-0 m-0 welcome-container align-items-center d-flex flex-column justify-content-center vh-100 bg-black">
    //   <div className="row">
    //     <div className="col-12 text-white m-0 pb-5 align-items-center text-center">
    //       <h1>About Us</h1>
    //     </div>
    //   </div>
    <>
      <Container fluid style={{ backgroundColor: "#181d25" }}>
        <div className="row">
          <div className="col-12 m-0 pb-5 align-items-center text-center">
            <h2 className="display-4 font-mont fw-bold text-white">About Us</h2>
          </div>
        </div>
        <Row className="d-flex justify-content-around align-items-center vh-sm-100 vh-50 pb-5">
          <Col className="d-flex flex-column col-12 col-md-4 pt-4 pt-md-0 justify-content-center align-items-center">
            <Image
              src={Fred}
              roundedCircle
              style={{
                width: "10rem",
                height: "10rem",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
            <p className="text-white text-center pt-4 px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sit voluptatem possimus autem doloribus, saepe, aspernatur
              voluptatibus quis adipisci ad dolores corrupti modi necessitatibus
              ab! Nulla dicta autem tenetur quibusdam!
            </p>
          </Col>
          <Col className="d-flex flex-column col-12 col-md-4 pt-4 pt-md-0 justify-content-center align-items-center">
            <div className="rounded-circle ratio-1x1">
              <Image
                src={Marie}
                roundedCircle
                style={{
                  width: "10rem",
                  height: "10rem",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
              />
            </div>

            <p className="text-white text-center pt-4 px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sit voluptatem possimus autem doloribus, saepe, aspernatur
              voluptatibus quis adipisci ad dolores corrupti modi necessitatibus
              ab! Nulla dicta autem tenetur quibusdam!
            </p>
          </Col>
          <Col className="d-flex flex-column col-12 col-md-4 pt-4 pt-md-0 justify-content-center align-items-center">
            <Image
              src={Omar}
              roundedCircle
              style={{
                width: "10rem",
                height: "10rem",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
            <p className="text-white text-center pt-4 px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sit voluptatem possimus autem doloribus, saepe, aspernatur
              voluptatibus quis adipisci ad dolores corrupti modi necessitatibus
              ab! Nulla dicta autem tenetur quibusdam!
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

{
  /* <div className="col m-0 p-0 d-flex flex-md-row flex-column gap-5 text-center align-items-center">
          <div className="col-md-4">
            <div className="circle bg-pink d-flex flex-column m-0"></div>
            <p className="mt-5 text-white">The best page I have ever seen!</p>
          </div>
          <div className="col-md-4">
            <div className="circle bg-purple d-flex flex-column m-0"></div>
            <p className="mt-5 text-white">
              So great, I can't live without it anymore.
            </p>
          </div>
          <div className="col-md-4">
            <div className="circle bg-blue d-flex flex-column m-0"></div>
            <p className="mt-5 text-white">
              Awesome! Thank you Omar, Fred and Marie for creating this page!
            </p>
          </div>
        </div> */
}
{
  /* </div>
    </div> */
}

export default AboutUsPage;
