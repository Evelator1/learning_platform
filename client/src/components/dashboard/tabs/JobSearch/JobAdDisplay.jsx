import { useState } from "react";
import { useForm } from "react-hook-form";
import { cols } from "../../../../colorSchema";
import axios from "axios";
import { tempResult } from "./tempResult";
import {
  Row,
  Col,
  Form,
  Card,
  InputGroup,
  Button,
  Container,
} from "react-bootstrap";
import JobSearchResultsOffCanvas from "./JobSearchResultsOffCanvas";
import JobLocation from "./JobLocation";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";

export default function JobAdDisplay() {
  const [show, setShow] = useState(false);
  const [jobs, setJobs] = useState(tempResult);
  const [selectedJob, setSelectedJob] = useState(null);
  const [favourite, setFavourite] = useState(false); // State to keep track of the favourite icon
  const [searchStatus, setSearchStatus] = useState("completed");

  const handleShow = () => setShow(!show);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const fetchJobs = async (data) => {
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: data.JobSearchQuery,
        page: "1",
        num_pages: "10",
      },
      headers: {
        "X-RapidAPI-Key": "12fe5a7697mshe6caf281041db58p1fd5e2jsn2d268fc62743",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setJobs(response.data);
      console.log(response.data, "is the result of the query");
      setSearchStatus("completed");
    } catch (error) {
      console.error(error);
      setSearchStatus("completed");
    }
    // axios
    //   .request(options)
    //   .then((response) => {
    //     setJobs(response.data.data);
    //     console.log(response.data.data,"is the result of the query");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  function onSubmit(data) {
    setSearchStatus("searching"); // Set the search status to "searching"
    fetchJobs(data);
    console.log("you are  searching for: ", data.JobSearchQuery);
    reset();
  }

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    console.log(job)
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

  return (
    <>
      <div
        style={{
          width: "75%",
          height: "auto",
          position: "relative",
          top: "1rem",
          left: "5rem",
          overflow: "scroll",
          margin: 0,
          padding: "1rem",
          display: "flex",
          justifyContent: "start",
          backgroundColor: cols.lila,
          border: `2px solid ${cols.gray}`,
          borderRadius: "0.5rem",
        }}
      >
        <Container>
          <h1>Search For Jobs</h1>

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
              <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="post"
                    placeholder="example: Web Developer in Berlin"
                    {...register("JobSearchQuery", {
                      required: "empty Posts are not allowed",
                    })}
                    style={{ zIndex: "1" }}
                  />
                  <Button
                    type="submit"
                    variant="outline-secondary"
                    style={{ zIndex: "1", backgroundColor: cols.white }}
                  >
                    {" "}
                    <SearchIcon />
                  </Button>
                </InputGroup>
              </Form>
              {searchStatus === "searching" && <p>Searching...</p>}
            </Col>

            <Col className="col-lg-2 col-md-8">
              {jobs && jobs.data.length > 0 && (
                <Button variant="primary" onClick={handleShow}>
                  Results
                </Button>
              )}
            </Col>
          </Row>

          {/* <Row>
            <Col>jcädjnfjkdnögvadfjk</Col>
          </Row> */}
          <Row>
            <JobSearchResultsOffCanvas
              handleShow={handleShow}
              show={show}
              setShow={setShow}
              jobs={jobs}
              handleJobSelect={handleJobSelect}
            />

            <Col className="d-flex-row justify-content-between">
              {/* <Row className="d-flex flex-direction-row justify-content-between"></Row> */}
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
                      <Button>Apply Now</Button>
                    </Col>
                  </Row>

                  <hr />

                  <Row>
                    <Col>
                      <p>
                        <AccessTimeIcon /> -{" "}
                        {getTimeDifference(selectedJob.job_posted_at_timestamp)}{" "}
                        - <WorkIcon /> {selectedJob.job_employment_type}
                      </p>
                    </Col>
                    <Col>
                      
                      {selectedJob.job_latitude && (
                        <JobLocation
                         lat={52.00}
                         lon={13.00}
                        />
                      )}
                    </Col>
                  </Row>

                  <hr />
                  <p>{selectedJob.job_description}</p>
                  <hr />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
