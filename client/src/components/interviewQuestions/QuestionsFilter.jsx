import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Button, ButtonGroup } from "react-bootstrap";

export default function QuestionsFilter({ data, setFilteredData, handleFilterQuestions,selectedTechnology, setSelectedTechnology }) {
  // const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [isTechnical, setIsTechnical] = useState(null);


  

  let filteredData = data;
  if (selectedTechnology) {
    filteredData = data.filter((question) => {
      return (
        question.technology === selectedTechnology &&
        (isTechnical === null || question.isTechnical === isTechnical)
      );
    });
  } else if (isTechnical !== null) {
    filteredData = data.filter(
      (question) => question.isTechnical === isTechnical
    );
  }

  return (
    <Dropdown className="filterDropDown" required>
      <Dropdown.Toggle variant="dark" id="dropDownType">
        Filter by
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleFilterQuestions("all")}>
          all
        </Dropdown.Item>
        <Dropdown as={ButtonGroup}>
          <Button
            className="filterQuestionsBtn"
            variant="dark"
            onClick={() => handleFilterQuestions("technical")}
          >
            Technical
          </Button>

          <Dropdown.Toggle
            split
            variant="success"
            id="dropdown-split-basic"
          />

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSelectedTechnology(null)}>
              All
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedTechnology("node")}>
              node
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedTechnology("express")}>
              express
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedTechnology("react")}>
              react
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSelectedTechnology("javascript")}
            >
              javascript
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedTechnology("html")}>
              html
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedTechnology("css")}>
              css
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedTechnology("sql")}>
              sql
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedTechnology("mysql")}>
              mysql
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedTechnology("mongodb")}>
              mongodb
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedTechnology("bootstrap")}>
              bootstrap
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedTechnology("other")}>
              other
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown.Item onClick={() => handleFilterQuestions("non-technical")}>
          Non-Technical
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
