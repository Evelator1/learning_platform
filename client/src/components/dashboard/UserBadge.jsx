import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UserBadge({userInfo}) {
  console.log(userInfo)
  return (
    <Card style={{ width: '18rem' }}>
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