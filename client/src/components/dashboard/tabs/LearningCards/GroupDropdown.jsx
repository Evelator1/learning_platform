import React, { useState } from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";

const GroupDropdown = () => {
  const [options, setOptions] = useState(["Easy", "Moderate", "Hard"]);

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
        <Form.Label>Select a group:</Form.Label>
        <InputGroup>
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              style={{ width: "20rem" }}
            >
              Select a group
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
                    placeholder="Enter a new group"
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

export default GroupDropdown;
