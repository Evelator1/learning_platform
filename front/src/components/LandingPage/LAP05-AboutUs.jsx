import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Omar from "../../assets/pics/mickey.jpeg";

function AboutUsPage() {
  return (
    // <div className="container-fluid p-0 m-0 welcome-container align-items-center d-flex flex-column justify-content-center vh-100 bg-black">
    //   <div className="row">
    //     <div className="col-12 text-white m-0 pb-5 align-items-center text-center">
    //       <h1>About Us</h1>
    //     </div>
    //   </div>
    <Container fluid style={{ backgroundColor: "#181d25" }}>
      <Row className="d-flex justify-content-around align-items-center vh-100">
        <Col className="d-flex flex-column col-12 col-md-4 justify-content-center align-items-center">
          <Image src={Omar} roundedCircle style={{ width: "10rem" }} />
          <p className="text-white">kdsmxycjxkljlkdldsklf</p>
        </Col>
        <Col className="d-flex flex-column col-12 col-md-4 justify-content-center align-items-center">
          <Image src={Omar} roundedCircle style={{ width: "10rem" }} />
          <p className="text-white">kdsmxycjxkljlkdldsklf</p>
        </Col>
        <Col className="d-flex flex-column col-12 col-md-4 justify-content-center align-items-center">
          <Image src={Omar} roundedCircle style={{ width: "10rem" }} />
          <p className="text-white">kdsmxycjxkljlkdldsklf</p>
        </Col>
      </Row>
    </Container>
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
