import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UserBadge({userInfo}) {
  return (
    <Card style={{ width: '18rem', position: "fixed" }}>
      <Card.Img variant="top" src={userInfo.profilePicture} />
      <Card.Body>
        <Card.Title>{userInfo.username}</Card.Title>
        <Card.Text>
          Some quick example text about the user
        </Card.Text>
        <Button variant="primary">Options</Button>
      </Card.Body>
    </Card>
  )
}
