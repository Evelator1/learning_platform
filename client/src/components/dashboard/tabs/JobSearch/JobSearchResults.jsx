import Offcanvas from "react-bootstrap/Offcanvas";

export default function JobSearchResults({ show, setShow, queryResults, handleSelect }) {
  console.log(queryResults.data);

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
        {queryResults.data.map((result) => {
          return (
            <div
              style={{ border: "2px solid black", height: "8rem", cursor: "pointer" }}
              key={result.job_id}
              onClick={() => handleSelect(result)}
            >
              <h6>{result.job_title}</h6>
              <p>{result.employer_name}</p>
              <p>{result.job_city}</p>
            </div>
          );
        })}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
