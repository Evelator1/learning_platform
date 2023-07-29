import Offcanvas from "react-bootstrap/Offcanvas";

export default function JobSearchResultsOffCanvas({
  show,
  setShow,
  jobs,
  handleJobSelect,
}) {
  jobs && console.log(jobs);
  const handleClose = () => setShow(!show);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      backdrop={false}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Results:</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {jobs &&
          jobs.data.length > 0 &&
          jobs.data.map((job) => {
            return (
              <div
                style={{
                  border: "2px solid black",
                  height: "8rem",
                  cursor: "pointer",
                }}
                key={job.job_id}
                onClick={() => {
                  handleClose(),
                  handleJobSelect(job)}}
              >
                <h6>{job.job_title}</h6>
                <p>{job.employer_name}</p>
                <p>{job.job_city}</p>
              </div>
            );
          })}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
