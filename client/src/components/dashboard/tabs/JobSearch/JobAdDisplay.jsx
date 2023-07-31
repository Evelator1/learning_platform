import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { cols } from "../../../../colorSchema";
import axios from "axios";
import { tempResult } from "./tempResult";
import {
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Container,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

// import JobFilterUtils from "./JobFilterUtils"
// import FetchJobHardCoded from "./FetchJobHardCoded";
import { applyFilters } from "./applyFilters";
import JobSearchFilters from "./JobSearchFilters";
import SelectedAd from "./SelectedAd";

export default function JobAdDisplay() {
  const [jobs, setJobs] = useState([]);
  const [searchStatus, setSearchStatus] = useState("completed");
  const [show, setShow] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [publishedFilter, setPublishedFilter] = useState("yesterday");
  const [cityFilter, setCityFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState(
    "experience_mentioned"
  );
  const [levelOfExperienceFilter, setLevelOfExperienceFilter] = useState("");
  const [requiredEducationFilter, setRequiredEducationFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3010/jobs/jobs")
      .then((response) => {
        console.log(response);
        setJobs(response.data);
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
    experienceFilter,
    levelOfExperienceFilter,
    requiredEducationFilter,
  ]);

  const handleShow = () => {
    showFilters && setShowFilters(false);
    setShow(!show);
  };

  const handleFilters = () => {
    console.log(showFilters);
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
      experienceFilter,
      levelOfExperienceFilter,
      requiredEducationFilter,
    };
    const filteredJobs = applyFilters(jobs, filters);
    setJobs(filteredJobs);
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

          <Row className="d-flex ">
            <Col className="col-12 ">
              {jobs && (
                <Button variant="primary" onClick={handleFilters}>
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
                  />
                </Row>
              )}
            </Col>

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
        handleShow={handleShow}
        show={show}
        setShow={setShow}
      />
      {/* <FetchJobHardCoded setJobs={setJobs}/> */}
    </>
  );
}
