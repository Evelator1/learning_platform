import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { cols } from "../../../../colorSchema";
import axios from "axios";
import { Row, Col, Form, InputGroup, Button, Container } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

// import { tempResult } from "./tempResult";
// import JobFilterUtils from "./JobFilterUtils"
// import FetchJobHardCoded from "./FetchJobHardCoded";
import { applyFilters } from "./applyFilters";
import JobSearchFilters from "./JobSearchFilters";
import SelectedAd from "./SelectedAd";

export default function JobAdDisplay() {
  const [searchStatus, setSearchStatus] = useState("completed"); // search status
  const [jobs, setJobs] = useState([]); //all the Jobs
  const [filtered, setFiltered] = useState([]); // filterd Jobs
  const [show, setShow] = useState(false); //show results offcanvas
  const [showFilters, setShowFilters] = useState(false); //show

  const [publishedFilter, setPublishedFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [remoteFilter, setRemoteFilter] = useState("");
  const [levelOfExperienceFilter, setLevelOfExperienceFilter] = useState("");
  const [requiredEducationFilter, setRequiredEducationFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3010/jobs/jobs")
      .then((response) => {
        console.log("response: ", response);
        setJobs(response.data);
        setFiltered(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    handleFilterChange();
  }, [
    publishedFilter,
    cityFilter,
    remoteFilter,
    experienceFilter,
    requiredEducationFilter,
  ]);

  const handleShow = () => {
    showFilters && setShowFilters(false);
    setShow(!show);
  };

  const handleShowFilters = () => {
    // console.log(showFilters);
    setShowFilters(!showFilters);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleFilterChange = () => {
    const filters = {
      publishedFilter,
      cityFilter,
      remoteFilter,
      experienceFilter,
      requiredEducationFilter,
    };

    const filteredJobs = applyFilters(jobs, filters);

    setFiltered(filteredJobs);
  };

  function onSubmit(data) {
    // setSearchStatus("searching");
    // fetchJobs(data);
    console.log("you are  searching for: ", data.JobSearchQuery);
    reset();
  }

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
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          backgroundColor: cols.lila,
          border: `2px solid ${cols.gray}`,
          borderRadius: "0.5rem",
          boxShadow: `10px 10px 5px  ${cols.black}`,
        }}
      >
        <Container>
          <h1>Search For Jobs</h1>

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
          </Row>

          {/* /////////////////DIsplay Filters/////////////////////////////////////// */}
          <Row className="d-flex ">
            <Col className="col-12 ">
              {jobs && (
                <Button variant="primary" onClick={handleShowFilters}>
                  Filters
                </Button>
              )}

              {showFilters && (
                <Row className="col-12 mx-1">
                  <JobSearchFilters
                    publishedFilter={publishedFilter}
                    setPublishedFilter={setPublishedFilter}
                    cityFilter={cityFilter}
                    setCityFilter={setCityFilter}
                    experienceFilter={experienceFilter}
                    setExperienceFilter={setExperienceFilter}
                    levelOfExperienceFilter={levelOfExperienceFilter}
                    setLevelOfExperienceFilter={setLevelOfExperienceFilter}
                    requiredEducationFilter={requiredEducationFilter}
                    setRequiredEducationFilter={setRequiredEducationFilter}
                    remoteFilter={remoteFilter}
                    setRemoteFilter={setRemoteFilter}
                  />
                </Row>
              )}
            </Col>
            {/* /////////////////Show Results/////////////////////////////////////// */}

            <Col className="col-12 my-2">
              {jobs && (
                <Button variant="primary" onClick={handleShow}>
                  Show&nbsp;Results
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      <SelectedAd
        jobs={jobs}
        filtered={filtered}
        handleShow={handleShow}
        show={show}
        setShow={setShow}
      />
      {/* <FetchJobHardCoded setJobs={setJobs}/> */}
    </>
  );
}
