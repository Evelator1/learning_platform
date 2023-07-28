import { useState } from "react";

import { useForm } from "react-hook-form";
import {
  Row,
  Col,
  Form,
  Card,
  InputGroup,
  Button,
  Container,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import JobSearchResults from "./JobSearchResults";
import { cols } from "../../../../colorSchema";
import { queryResults } from "./tempResult";

import TurnedInIcon from "@mui/icons-material/TurnedIn";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";

export default function JobAd() {
  const [show, setShow] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [favourite, setFavourite] = useState(false); // State to keep track of the icon
  const handleShow = () => setShow(!show);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log("something searchs", data.JobSearchQuery);
    reset();
  }

  const handleJobSelect = (job) => {
    setSelectedJob(job); // Store the selected job in the state
  };

  const toggleIcon = () => {
    setFavourite(!favourite); // Toggle the state between true and false
  };

  const getTimeDifference = (timestamp) => {
    const currentTime = Date.now() / 1000; // Convert current time to seconds
    const difference = currentTime - timestamp;
    const secondsInADay = 86400; // 60 seconds * 60 minutes * 24 hours
    const secondsInAWeek = secondsInADay * 7;
    const secondsInAMonth = secondsInADay * 30;

    if (difference < secondsInADay) {
      return `${Math.floor(difference / 3600)} hours ago`;
    } else if (difference < secondsInAWeek) {
      return `${Math.floor(difference / secondsInADay)} days ago`;
    } else if (difference < secondsInAMonth) {
      return `${Math.floor(difference / secondsInAWeek)} weeks ago`;
    } else {
      return `${Math.floor(difference / secondsInAMonth)} months ago`;
    }
  };

  return (
    <div
      style={{
        width: "75%",
        height: "100vh",
        position: "relative",
        top: "1rem",
        left: "5rem",
        overflow: "scroll",
        margin: 0,
        padding: "0rem",
        display: "flex",
        justifyContent: "start",
        backgroundColor: cols.lila,
        border: "2px solid black",
      }}
    >
      <Container>
        <Row
          style={{
            width: "24rem",
            position: "fixed",
            top: "4.5rem",
            zIndex: "4",
          }}
        ></Row>

        <Row>
          <Col className="col-10">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputGroup>
                <Form.Control
                  type="post"
                  placeholder="example: Web Developer in Berlin"
                  {...register("JobSearchQuery", {
                    required: "empty Posts are not allowed",
                  })}
                  // onKeyPress={handleKeyPress} // Add the key press event handler
                />

                <InputGroup.Text id="basic-addon1">
                  <SearchIcon />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </Col>

          <Col className="col-lg-2 col-md-8">
            <Button variant="primary" onClick={handleShow}>
              Results
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
           
          </Col>
        </Row>
        <Row>
          <JobSearchResults
            handleShow={handleShow}
            show={show}
            setShow={setShow}
            queryResults={queryResults}
            handleSelect={handleJobSelect}
          />

          <Col className="d-flex-row justify-content-between border border-success">
            <Row className="d-flex flex-direction-row justify-content-between"></Row>
            {selectedJob && (
              <div>
                {/* here i want to switch between TurnedIn and TurnedInNot */}
                <div onClick={toggleIcon}>
                  {favourite ? <TurnedInIcon /> : <TurnedInNotIcon />}
                </div>
                <h3>{selectedJob.job_title}</h3>
                <img
                  src={selectedJob.employer_logo}
                  alt={selectedJob.employer_name}
                  style={{ width: "3rem" }}
                />
                <p>
                  {selectedJob.employer_name} - {selectedJob.job_city}
                </p>
                <hr />
                <p>
                  <AccessTimeIcon /> -{" "}
                  {getTimeDifference(selectedJob.job_posted_at_timestamp)} -{" "}
                  <WorkIcon /> {selectedJob.job_employment_type}
                </p>

                <hr />
                <p>{selectedJob.job_description}</p>
                <hr />
                {/* Display other properties as needed */}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
