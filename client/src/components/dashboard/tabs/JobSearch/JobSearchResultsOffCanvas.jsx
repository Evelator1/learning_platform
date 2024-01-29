import Offcanvas from "react-bootstrap/Offcanvas";

export default function JobSearchResultsOffCanvas({
  show,
  setShow,
  handleJobSelect,
  jobs,
  filtered,
}) {
  const handleClose = () => setShow(!show);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" backdrop={true}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Results:</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {jobs &&
          jobs.length > 0 &&
          filtered.map((job, index) => {
            return (
              <div
                style={{
                  border: "2px solid black",
                  height: "8rem",
                  cursor: "pointer",
                }}
                key={index}
                onClick={() => {
                  handleClose(), handleJobSelect(job);
                }}
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
