import { Container, Row, Col, Form } from "react-bootstrap";
export default function JobSearchFilters({
  publishedFilter,
  setPublishedFilter,

  cityFilter,
  setCityFilter,
  
    remoteFilter,
    setRemoteFilter,

  experienceFilter,
  setExperienceFilter,

  requiredEducationFilter,
  setRequiredEducationFilter,
}) {
  return (
    <Container>
      <Row>
        Published:
        <Form.Select
          size="sm"
          value={publishedFilter}
          onChange={(e) => setPublishedFilter(e.target.value)}
        >
          <option> </option>
          <option> yesterday</option>
          <option> 1 week ago</option>
          <option> 4 weeks ago</option>
          <option> 1 month ago</option>
          <option> older </option>
        </Form.Select>
        City:
        <Form.Select
          size="sm"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option> </option>
          <option> Berlin</option>
          <option> Bremen </option>
          <option> Düsseldorf </option>
          <option> Frankfurt</option>
          <option> Hamburg</option>
          <option> Hannover </option>
          <option> Leipzig </option>
          <option> Munich</option>
          <option> Nürnberg </option>
          <option> Rostock </option>
          <option> Stuttgart </option>
        </Form.Select>



        Remote job?
        <Form.Select
          size="sm "
          value={remoteFilter}
          onChange={(e) => setRemoteFilter(e.target.value)}
        >
          <option> </option>
          <option> Remote </option>
          <option> On Site </option>
        </Form.Select>
       

        Required Experience:
        <Form.Select
          size="sm"
          value={experienceFilter}
          onChange={(e) => setExperienceFilter(e.target.value)}
        >
          <option> </option>
          <option> mentioned</option>
          <option> experience preferred </option>
          <option> no experience required </option>
        </Form.Select>


        Required Education:
        <Form.Select
          size="sm"
          value={requiredEducationFilter}
          onChange={(e) => setRequiredEducationFilter(e.target.value)}
        >
          <option> </option>
          <option> associates degree</option>
          <option> bachelors degree </option>
          <option> degree mentioned </option>
          <option> degree preferred</option>
          <option> high school </option>
          <option> postgraduate degree </option>
          <option> professional certification</option>
          <option> professional certification mentioned </option>
        </Form.Select>

        {/* Level of Experience:
        <Form.Select
          size="sm "
          value={levelOfExperienceFilter}
          onChange={(e) => setLevelOfExperienceFilter(e.target.value)}
        >
          <option> </option>
          <option> Junior</option>
          <option> Mid Level </option>
          <option> Senior </option>
        </Form.Select> */}


       
      </Row>
    </Container>
  );
}
