import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Container } from "react-bootstrap";
import { cols } from "../../../../colorSchema";


import JobDescription from "./JobDescription";
import JobLocation from "./JobLocation";
import JobSearchResultsOffCanvas from "./JobSearchResultsOffCanvas";

import TurnedInIcon from "@mui/icons-material/TurnedIn";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";
export default function SelectedAd({ jobs,filtered, show, setShow, handleShow }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [favourite, setFavourite] = useState(false); // State to keep track of the favourite icon

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    console.log(job);
  };

  const toggleIcon = () => {
    setFavourite(!favourite);
  };

  const getTimeDifference = (timestamp) => {
    const currentTime = Date.now() / 1000;
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

  return  (
    <>
<JobSearchResultsOffCanvas
  jobs={jobs}
  filtered={filtered}
  handleShow={handleShow}
  show={show}
  setShow={setShow}
  handleJobSelect={handleJobSelect}
/>
   {selectedJob&& <div
      style={{
        width: "75%",
        height: "auto",
        position: "relative",
        top: "3rem",
        left: "5rem",
        overflow: "scroll",
        margin: 0,
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        backgroundColor: cols.white,
        border: `2px solid ${cols.gray}`,
        borderRadius: "0.5rem",
        boxShadow: `10px 10px 5px  ${cols.black}`,
      }}
    >
      <Container>
        <Row>

          <Col className="d-flex-row justify-content-between">
            {selectedJob && (
              <div>
                <div onClick={toggleIcon}>
                  {favourite ? <TurnedInIcon /> : <TurnedInNotIcon />}
                </div>
                <h3>{selectedJob.job_title}</h3>

                <Row>
                  <Col>
                    <img
                      src={selectedJob.employer_logo}
                      alt={selectedJob.employer_name}
                      style={{ width: "3rem" }}
                    />
                    <p>
                      {selectedJob.employer_name} - {selectedJob.job_city}
                    </p>
                  </Col>
                  <Col>
                    {selectedJob.job_apply_link && (
                      <Link to={selectedJob.job_apply_link} target="_blank">
                        <Button>Apply Now</Button>
                      </Link>
                    )}
                  </Col>
                </Row>

                <hr />

                <Row>
                  <Col>
                    <p>
                      <AccessTimeIcon /> -{" "}
                      {getTimeDifference(selectedJob.job_posted_at_timestamp)} -{" "}
                      <WorkIcon /> {selectedJob.job_employment_type}
                    </p>
                  </Col>
                  {/* <Col>
                    {selectedJob.job_latitude && (
                      <JobLocation lat={52.0} lon={13.0} />
                    )}
                  </Col> */}
                </Row>

                <hr />
                <JobDescription selectedJob={selectedJob} />
                <hr />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>}
    </>
  );
}
