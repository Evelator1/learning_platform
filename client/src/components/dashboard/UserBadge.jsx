import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {cols} from '../../colorSchema'
export default function UserBadge({userInfo}) {
  return (
    <Card style={{ maxWidth: '15rem', position: "fixed" }}>
      <Card.Img variant="top" src={userInfo.profilePicture} />
      <Card.Body>
        <Card.Title>{userInfo.username}</Card.Title>
        <Card.Text>
          Some quick example text about the user
        </Card.Text>
        <Button style={{backgroundColor: cols.blue}}>Profile Settings</Button>
      </Card.Body>
    </Card>
  )
}
