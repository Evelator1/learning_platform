import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

    export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <Card style={{ width: '40rem', position:"fixed", top:"0" }}>
      <Card.Img variant="top" src={user.profilePicture} style={{aspectRatio:"1/1", objectFit: "cover"}} />
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>
          {user.personalInfo}
        </Card.Text>
        <Button variant="primary">Add as Friend</Button>
      </Card.Body>
    </Card>
  );
}

