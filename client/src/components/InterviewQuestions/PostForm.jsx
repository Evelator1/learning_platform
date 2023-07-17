import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './PostForm.css';

function PostForm({ loggedInUserId }) {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3010/post");
        const jsonData = await result.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Find the logged-in user's profile picture URL
  const loggedInUser = data.find((user) => user.author._id === loggedInUserId);
  const profilePicture = loggedInUser ? loggedInUser.author.profilePicture : null;

  // Handler function to update formData state
  const handleInputChange = (event) => {
    setFormData(event.target.value);
  };

  return (
    <div className='PostUrPostDiv'>
      <Container key="post-form-containerpost">
        <Row xs={12}>
          <Col xs={2}>
            {profilePicture && (
                <Image
                  src={profilePicture}
                  alt='userImg'
                  className='userFormPicture'
                  height={90}
                  width={140}
                  roundedCircle
                  
                />
            )}
          </Col>
          <Col className='PostArea' xs={10}>
            <Form.Control
              as="textarea"
              rows={5}
              value={formData}
              onChange={handleInputChange}
              placeholder='Tell Us about your interview experience and questions!'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PostForm;
