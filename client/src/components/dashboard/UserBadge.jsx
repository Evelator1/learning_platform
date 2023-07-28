import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material";
import { cols } from "../../colorSchema";

export default function UserBadge({ userInfo }) {
  const navigate = useNavigate();
  console.log(userInfo);

  return (
    <ThemeProvider theme={theme}>
      <Card style={{ maxWidth: "15rem", position: "relative" }}>
        <Card.Img
          variant="top"
          src={userInfo.profilePicture}
          alt={userInfo.username}
          height="240"
        />
        <Card.Body>
          <Card.Title>
            <h6>{userInfo.username}</h6>
          </Card.Title>
          <Card.Text style={{ color: cols.black }} className="my-4">
            {userInfo.personalInfo}
          </Card.Text>
          <Button
            as={Link}
            to={`/settings/profile/${userInfo.username}`}
            variant="primary"
            style={{ width: 100 }}
          >
            Settings
          </Button>
        </Card.Body>
      </Card>
    </ThemeProvider>
  );
}
