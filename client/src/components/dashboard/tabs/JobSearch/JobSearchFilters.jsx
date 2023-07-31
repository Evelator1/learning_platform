import { Container, Row, Col, Form } from "react-bootstrap";
export default function JobSearchFilters({
  publishedFilter,
  setPublishedFilter,
  
  cityFilter,
  setCityFilter,

  experienceFilter,
  setExperienceFilter,

  levelOfExperienceFilter,
  setLevelOfExperienceFilter,

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
        Required Experience:
        <Form.Select
          size="sm"
          value={experienceFilter}
          onChange={(e) => setExperienceFilter(e.target.value)}
        >
          <option> experience_mentioned</option>
          <option> experience_preferred </option>
          <option> no_experience_required </option>
        </Form.Select>
        Level of Experience:
        <Form.Select
          size="sm "
          value={levelOfExperienceFilter}
          onChange={(e) => setLevelOfExperienceFilter(e.target.value)}
        >
          <option> Junior</option>
          <option> Mid Level </option>
          <option> Senior </option>
        </Form.Select>
        Required Education:
        <Form.Select
          size="sm"
          value={requiredEducationFilter}
          onChange={(e) => setRequiredEducationFilter(e.target.value)}
        >
          <option> associates_degree</option>
          <option> bachelors_degree </option>
          <option> degree_mentioned </option>
          <option> degree_preferred</option>
          <option> high_school </option>
          <option> postgraduate_degree </option>
          <option> professional_certification</option>
          <option> professional_certification_mentioned </option>
          <option> Senior </option>
        </Form.Select>
      </Row>
    </Container>
  );
}
