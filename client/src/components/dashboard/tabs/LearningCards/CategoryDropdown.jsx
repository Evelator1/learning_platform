import React, { useState } from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";

const CategoryDropdown = () => {
  const [options, setOptions] = useState([
    "Technical question",
    "Non-technical question",
  ]);

  const [newOption, setNewOption] = useState("");

  const handleAddOption = () => {
    if (newOption.trim() !== "") {
      setOptions([...options, newOption.trim()]);
      setNewOption("");
    }
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>Select a Category:</Form.Label>
        <InputGroup>
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              style={{ width: "20rem" }}
            >
              Select a Category
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {options.map((option, index) => (
                <Dropdown.Item key={index}>{option}</Dropdown.Item>
              ))}
              <Dropdown.Divider />
              <Dropdown.ItemText>
                <InputGroup>
                  <FormControl
                    type="text"
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="Enter a new category"
                  />
                  <Button onClick={handleAddOption}>Save</Button>
                </InputGroup>
              </Dropdown.ItemText>
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup>
      </Form.Group>
    </div>
  );
};

export default CategoryDropdown;
