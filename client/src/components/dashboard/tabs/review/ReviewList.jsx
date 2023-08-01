import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import Avatar from "../../../Navbar-Components/Avatar";
import { Button, Image, Container, Row, Col } from "react-bootstrap";

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function ReviewList({ reviews }) {
  const { user } = useContext(AuthContext);

  function formatDate(date) {
    const now = new Date();
    const reviewDate = new Date(date);

    const diffInMilliseconds = now - reviewDate;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays === 0) {
      return "today";
    } else if (diffInDays === 1) {
      return "yesterday";
    } else if (diffInDays <= 10) {
      return `${diffInDays} days ago`;
    } else {
      // Format the review date in your desired way if older than 10 days
      const options = { year: "numeric", month: "long", day: "numeric" };
      return reviewDate.toLocaleDateString(undefined, options);
    }
  }

  return (
    <div >
      {reviews &&
        reviews.map((review) => {
          return (
            <Card key={review._id} style={{width:"100%"}}>
              <Card.Header as="h5" className="w-100">
                <Row>
                  <Col className="col-2">
                <Avatar user={review.author} />

                  </Col>
                  <Col className="col-10">
                {review.author.username}
                <p className="fs-6">

                  {formatDate(review.createdAt)}
                </p>
                  </Col>
                </Row>
    
                
                <Card.Text className="fs-6 ">
                  {" "}
                </Card.Text>

              </Card.Header>
              <Card.Body>
                <Card.Title> {review.title}</Card.Title>
                <Card.Text>{review.content}</Card.Text>
                <ThumbUpOffAltIcon/>
                <ChatBubbleOutlineIcon/>
                {/* <Button variant="primary"> </Button>
                <Button variant="primary"><ChatBubbleOutlineIcon/></Button> */}
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

//   {review.map((post) => (
//     <Container key={post._id} className="postCard">
//       <Row className="postHeader">
//         <Col xs={2}>
//           {post.author.profilePicture && (
//             <Image
//               src={post.author.profilePicture}
//               alt="userImg"
//               className="userPicture"
//               roundedCircle
//             />
//           )}
//         </Col>
//         <Col xs={2}>
//           <Row className="userName">{post.author.username}</Row>
//           <Row className="postTime">{getFormattedDate(post.createdAt)}</Row>
//         </Col>
//         <Col xs={6}></Col>
//       </Row>
//       <Row>
//         <blockquote className="blockquote mb-0">
//           <p>{post.content}</p>
//           {post.image && (
//             <Image src={post.image} className="postImage"></Image>
//           )}
//         </blockquote>
//       </Row>
//       <Row className="likes_Comments_Counter">
//         <Col className="likesCounter">
//           <FontAwesomeIcon
//             icon={solidThumbsUp}
//             className="likeIconCounter"
//           />{" "}
//           15
//         </Col>
//         <Col className="commentsTracker">
//           <a
//             href="/comments"
//             onClick={(event) => handleAllCommentsClick(post, event)}
//           >
//             All Comments
//           </a>
//         </Col>
//       </Row>
//       <Row className="likes_Comments_Save">
//         <Col xs={4} className="d-flex LCS">
//           <Button
//             className={`likeButton ${
//               post.likeChecked ? "likeChecked" : ""
//             }`}
//             onClick={() => handleLikeClick(post._id)}
//           >
//             <FontAwesomeIcon
//               icon={post.likeChecked ? solidThumbsUp : outlineThumbsUp}
//               className={`LikeIconAction ${
//                 post.likeChecked ? "likeChecked" : ""
//               }`}
//             />
//             <span
//               className={`ml-6 likeButtonText ${
//                 post.likeChecked ? "likeChecked" : ""
//               }`}
//             >
//               Like
//             </span>
//           </Button>
//         </Col>
//         <Col xs={4} className="d-flex LCS">
//           <Button
//             className={`commentButton ${
//               post.commentChecked ? "commentChecked" : ""
//             }`}
//             onClick={() => handleCommentClick(post._id)}
//           >
//             <FontAwesomeIcon
//               icon={faComment}
//               className={`commentIconAction ${
//                 post.commentChecked ? "commentChecked" : ""
//               }`}
//             />
//             <span
//               className={`ml-6 commentButtonText ${
//                 post.commentChecked ? "commentChecked" : ""
//               }`}
//             >
//               Comment
//             </span>
//           </Button>
//         </Col>
//         <Col xs={4} className="d-flex LCS">
//           <Button
//             className={`saveButton ${
//               post.saveChecked ? "saveChecked" : ""
//             }`}
//             onClick={() => handleSaveClick(post._id)}
//           >
//             <FontAwesomeIcon
//               icon={post.saveChecked ? solidStar : outlineStar}
//               className={`saveIconAction ${
//                 post.saveChecked ? "saveChecked" : ""
//               }`}
//             />
//             <span
//               className={`ml-6 saveButtonText ${
//                 post.saveChecked ? "saveChecked" : ""
//               }`}
//             >
//               Save
//             </span>
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   ))}
